'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import shopData from '../Shop/shopData'; // (you might not need this anymore if fully replacing)

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardStats = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    try {
      const cartData = JSON.parse(localStorage.getItem('cart'));
      if (cartData && Array.isArray(cartData.items)) {
        setTotalProducts(cartData.items.length);
      } else {
        setTotalProducts(0);
      }
    } catch (err) {
      console.error('Error fetching cart from localStorage:', err);
      setTotalProducts(0);
    }
  }, []); // empty dependency array -> runs only once when component mounts

  // Dummy data (can keep these)
  const dummyOrders = [
    { id: 'ORD001', customer: 'Alice Smith', date: '2023-10-26', total: 150.0, status: 'Shipped' },
    { id: 'ORD002', customer: 'Bob Johnson', date: '2023-10-25', total: 75.5, status: 'Processing' },
    { id: 'ORD003', customer: 'Charlie Brown', date: '2023-10-25', total: 210.25, status: 'Delivered' },
    { id: 'ORD004', customer: 'Diana Prince', date: '2023-10-24', total: 55.0, status: 'Shipped' },
    { id: 'ORD005', customer: 'Ethan Hunt', date: '2023-10-23', total: 300.0, status: 'Cancelled' },
  ];

  const dummyReviews = [
    { id: 'REV001', product: 'Stylish Watch', customer: 'Alice Smith', rating: 5, comment: 'Absolutely love it!', date: '2023-10-27' },
    { id: 'REV002', product: 'Comfy Sneakers', customer: 'Bob Johnson', rating: 4, comment: 'Good value for money.', date: '2023-10-26' },
    { id: 'REV003', product: 'Wireless Headphones', customer: 'Charlie Brown', rating: 3, comment: 'Decent sound, but connectivity issues sometimes.', date: '2023-10-26' },
    { id: 'REV004', product: 'Stylish Watch', customer: 'Diana Prince', rating: 5, comment: 'Perfect gift!', date: '2023-10-25' },
  ];

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [1200, 1900, 3000, 5000, 2300, 3200],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const orderStatusData = {
    labels: ['Shipped', 'Processing', 'Delivered', 'Cancelled'],
    datasets: [
      {
        label: 'Order Status',
        data: [2, 1, 1, 1],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart Title Placeholder' },
    },
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-gray-7 pt-10 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-6">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cards */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-sm font-medium text-gray-7 mb-2">Total Sales</h3>
          <p className="text-3xl font-semibold text-gray-7">$16,650.75</p>
          <p className="text-xs text-green mt-1">+5.2% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-sm font-medium text-gray-7 mb-2">Total Orders</h3>
          <p className="text-3xl font-semibold text-gray-7">{dummyOrders.length}</p>
          <p className="text-xs text-gray-7 mt-1">In current view</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-sm font-medium text-gray-7 mb-2">Total Products</h3>
          <p className="text-3xl font-semibold text-gray-7">{totalProducts}</p> {/* changed here */}
          <p className="text-xs text-gray-7 mt-1">Active listings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-sm font-medium text-gray-7 mb-2">Pending Reviews</h3>
          <p className="text-3xl font-semibold text-gray-7">{dummyReviews.filter(r => r.rating < 4).length}</p>
          <p className="text-xs text-red mt-1">Action required</p>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="bg-white p-6 rounded-lg shadow h-76">
          <h3 className="text-lg font-semibold text-gray-7 mb-4">Monthly Sales Performance</h3>
          <div className="h-80">
            <Bar options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Monthly Sales ($)' } } }} data={salesData} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow h-96">
          <h3 className="text-lg font-semibold text-gray-7 mb-4">Order Status Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <Pie options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Order Status' } } }} data={orderStatusData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
