import Link from 'next/link';
import Image from 'next/image';

const dummyOrders = [
    { id: 'ORD001', customer: 'Alice Smith', date: '2023-10-26', total: 150.00, status: 'Shipped' },
    { id: 'ORD002', customer: 'Bob Johnson', date: '2023-10-25', total: 75.50, status: 'Processing' },
    { id: 'ORD003', customer: 'Charlie Brown', date: '2023-10-25', total: 210.25, status: 'Delivered' },
    { id: 'ORD004', customer: 'Diana Prince', date: '2023-10-24', total: 55.00, status: 'Shipped' },
    { id: 'ORD005', customer: 'Ethan Hunt', date: '2023-10-23', total: 300.00, status: 'Cancelled' },
];

const OrdersPage = () => {
    // Add state for filtering, sorting, pagination if needed
    return (
        <div className="space-y-6 ">
            <h1 className="text-2xl font-semibold text-gray-7 pt-20 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-4">Orders</h1>
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
                        {dummyOrders.map(order => (
                            <tr key={order.id} className="hover:bg-gray">
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-7">{order.id}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">{order.customer}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">{order.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-7">${order.total.toFixed(2)}</td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Shipped' ? 'bg-blue text-white' :
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
};

export default OrdersPage;