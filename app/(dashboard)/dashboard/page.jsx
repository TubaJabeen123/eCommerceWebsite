"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingBag, Users } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    salesByMonth: {},
  })
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, you'd fetch from Firebase
        // For demo purposes, we'll use mock data
        // const data = await getDashboardData();

        const mockData = {
          totalRevenue: 24680,
          totalOrders: 156,
          totalCustomers: 89,
          salesByMonth: {
            Jan: 2500,
            Feb: 3200,
            Mar: 2800,
            Apr: 3800,
            May: 4200,
            Jun: 5100,
          },
        }

        setDashboardData(mockData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const chartData = Object.entries(dashboardData.salesByMonth).map(([month, sales]) => ({
    month,
    sales,
  }))

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>

      <div className="border-b pb-6 mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center justify-between p-4 md:p-6">
            <div>
              <p className="text-base md:text-xl text-gray-600 mb-1">Total Revenue</p>
              <h2 className="text-xl md:text-3xl font-bold">${dashboardData.totalRevenue.toLocaleString()}</h2>
            </div>
            <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-4 md:p-6">
            <div>
              <p className="text-base md:text-xl text-gray-600 mb-1">Total Orders</p>
              <h2 className="text-xl md:text-3xl font-bold">{dashboardData.totalOrders.toLocaleString()}</h2>
            </div>
            <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="flex items-center justify-between p-4 md:p-6">
            <div>
              <p className="text-base md:text-xl text-gray-600 mb-1">Total Customer</p>
              <h2 className="text-xl md:text-3xl font-bold">{dashboardData.totalCustomers.toLocaleString()}</h2>
            </div>
            <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sales Chart ($)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-60 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: isMobile ? 12 : 14 }} />
                <YAxis tick={{ fontSize: isMobile ? 12 : 14 }} width={40} />
                <Tooltip formatter={(value) => [`$${value}`, "Sales"]} />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

