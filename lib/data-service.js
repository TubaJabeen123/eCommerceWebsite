import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

// Dashboard data
export const getDashboardData = async () => {
  try {
    // Get total revenue
    const ordersRef = collection(db, "orders")
    const ordersSnapshot = await getDocs(ordersRef)
    const orders = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
    const totalOrders = orders.length

    // Get total customers
    const customersRef = collection(db, "customers")
    const customersSnapshot = await getDocs(customersRef)
    const totalCustomers = customersSnapshot.docs.length

    // Get sales data for chart (last 6 months)
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    const salesByMonth = {}

    orders.forEach((order) => {
      const date = order.createdAt.toDate()
      if (date >= sixMonthsAgo) {
        const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`
        salesByMonth[monthYear] = (salesByMonth[monthYear] || 0) + order.total
      }
    })

    return {
      totalRevenue,
      totalOrders,
      totalCustomers,
      salesByMonth,
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    throw error
  }
}

// Products
export const getProducts = async () => {
  try {
    const productsRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsRef)
    return productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

// Orders
export const getOrders = async () => {
  try {
    const ordersRef = collection(db, "orders")
    const ordersSnapshot = await getDocs(ordersRef)
    return ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

// Customers
export const getCustomers = async () => {
  try {
    const customersRef = collection(db, "customers")
    const customersSnapshot = await getDocs(customersRef)
    return customersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error fetching customers:", error)
    throw error
  }
}

// // Collections
// export const getCollections = async () => {
//   try {
//     const collectionsRef = collection(db, "collections")
//     const collectionsSnapshot = await getDocs(collectionsRef)
//     return collectionsSnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }))
//   } catch (error) {
//     console.error("Error fetching collections:", error)
//     throw error
//   }
// }

