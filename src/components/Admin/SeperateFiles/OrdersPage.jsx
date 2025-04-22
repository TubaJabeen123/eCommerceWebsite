"use client"
import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import AHeader from "./Header"

const OrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  // Sample orders data
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      email: "john.doe@example.com",
      date: "2023-04-15",
      status: "Delivered",
      total: "$125.00",
      items: 3,
      paymentMethod: "Credit Card",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      date: "2023-04-14",
      status: "Processing",
      total: "$89.99",
      items: 1,
      paymentMethod: "PayPal",
    },
    {
      id: "#ORD-003",
      customer: "Robert Johnson",
      email: "robert.j@example.com",
      date: "2023-04-14",
      status: "Shipped",
      total: "$245.50",
      items: 4,
      paymentMethod: "Credit Card",
    },
    {
      id: "#ORD-004",
      customer: "Emily Davis",
      email: "emily.davis@example.com",
      date: "2023-04-13",
      status: "Delivered",
      total: "$78.25",
      items: 2,
      paymentMethod: "PayPal",
    },
    {
      id: "#ORD-005",
      customer: "Michael Brown",
      email: "michael.b@example.com",
      date: "2023-04-12",
      status: "Cancelled",
      total: "$112.75",
      items: 3,
      paymentMethod: "Credit Card",
    },
    {
      id: "#ORD-006",
      customer: "Sarah Wilson",
      email: "sarah.w@example.com",
      date: "2023-04-11",
      status: "Processing",
      total: "$67.50",
      items: 1,
      paymentMethod: "PayPal",
    },
    {
      id: "#ORD-007",
      customer: "David Miller",
      email: "david.m@example.com",
      date: "2023-04-10",
      status: "Shipped",
      total: "$189.99",
      items: 2,
      paymentMethod: "Credit Card",
    },
    {
      id: "#ORD-008",
      customer: "Jennifer Taylor",
      email: "jennifer.t@example.com",
      date: "2023-04-09",
      status: "Delivered",
      total: "$45.75",
      items: 1,
      paymentMethod: "PayPal",
    },
    {
      id: "#ORD-009",
      customer: "Thomas Anderson",
      email: "thomas.a@example.com",
      date: "2023-04-08",
      status: "Cancelled",
      total: "$320.00",
      items: 5,
      paymentMethod: "Credit Card",
    },
    {
      id: "#ORD-010",
      customer: "Lisa Moore",
      email: "lisa.m@example.com",
      date: "2023-04-07",
      status: "Delivered",
      total: "$95.25",
      items: 2,
      paymentMethod: "PayPal",
    },
  ]

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "All" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray mb-6">Orders</h1>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full min-w-[600px] table-auto">
                <thead className="bg-gray border-b border-gray-200">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Order ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Customer</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Total</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray">
                    {orders.map(order => (
                        <tr key={order.id} className="hover:bg-gray">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-7">{order.id}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">{order.customer}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">{order.date}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">${order.total}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    order.status === 'Shipped' ? 'bg-blue text-white' :
                                    order.status === 'Processing' ? 'bg-yellow text-white' :
                                    order.status === 'Delivered' ? 'bg-green text-white' :
                                    order.status === 'Cancelled' ? 'bg-red text-white' : 'bg-gray text-gray'
                                }`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                                 {/* Add action buttons like View Details, Update Status */}
                                <button className="text-blue hover:text-blue-dark mr-2">View</button>
                                <button className="text-indigo hover:text-indigo-800">Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         {/* Add pagination if needed */}
    </div>
);
}

export default OrdersPage;
