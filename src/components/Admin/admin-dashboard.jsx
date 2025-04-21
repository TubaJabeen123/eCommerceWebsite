
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

// Register ChartJS components
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

import shopData from "../Shop/shopData"; 


const dummyOrders = [
  { id: 'ORD001', customer: 'Alice Smith', date: '2023-10-26', total: 150.00, status: 'Shipped' },
  { id: 'ORD002', customer: 'Bob Johnson', date: '2023-10-25', total: 75.50, status: 'Processing' },
  { id: 'ORD003', customer: 'Charlie Brown', date: '2023-10-25', total: 210.25, status: 'Delivered' },
  { id: 'ORD004', customer: 'Diana Prince', date: '2023-10-24', total: 55.00, status: 'Shipped' },
  { id: 'ORD005', customer: 'Ethan Hunt', date: '2023-10-23', total: 300.00, status: 'Cancelled' },
];

const dummyReviews = [
  { id: 'REV001', product: 'Stylish Watch', customer: 'Alice Smith', rating: 5, comment: 'Absolutely love it!', date: '2023-10-27' },
  { id: 'REV002', product: 'Comfy Sneakers', customer: 'Bob Johnson', rating: 4, comment: 'Good value for money.', date: '2023-10-26' },
  { id: 'REV003', product: 'Wireless Headphones', customer: 'Charlie Brown', rating: 3, comment: 'Decent sound, but connectivity issues sometimes.', date: '2023-10-26' },
  { id: 'REV004', product: 'Stylish Watch', customer: 'Diana Prince', rating: 5, comment: 'Perfect gift!', date: '2023-10-25' },
];

const dummyAdminProfile = {
  name: 'Admin User',
  email: 'admin@ecommerce.com',
  phone: '+1 234 567 890',
  imageUrl: '/images/users/user-01.jpg', // Replace with a real or placeholder image path
  role: 'Super Administrator',
  joinedDate: '2025-04-15',
};

// --- Reusable Components ---

// Header Component (Assuming AHeader exists and is styled)
const AHeader = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[88px] flex items-center px-6">
    {/* Placeholder for Header Content (e.g., Search, Notifications, Profile Dropdown) */}
    <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
            {/* Example: Search Bar */}
            <input type="text" placeholder="Search..." className="px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            {/* Example: Profile Icon */}
            <Image src={dummyAdminProfile.imageUrl} alt="Admin" width={40} height={40} className="rounded-full" />
        </div>
    </div>
  </header>
);

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
<div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6 md:px-8 pt-32 pb-6 overflow-y-auto">
  <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 mt-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-7">{title}</h2>
      <button
        onClick={onClose}
        className="text-gray-4 hover:text-gray-7 text-2xl"
        aria-label="Close modal"
      >
        ×
      </button>
    </div>
    <div>{children}</div>
  </div>
</div>

  );
};

// --- Page Specific Components ---

// ## Dashboard Statistics Component ##
const DashboardStats = () => {
    // Dummy data for charts
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
                data: [2, 1, 1, 1], // Counts from dummyOrders
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
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart Title Placeholder',
            },
          },
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-gray-7 pt-20 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-6">Dashboard Overview</h1>

             {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <p className="text-3xl font-semibold text-gray-7">{shopData.length}</p>
                     <p className="text-xs text-gray-7 mt-1">Active listings</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-sm font-medium text-gray-7 mb-2">Pending Reviews</h3>
                    <p className="text-3xl font-semibold text-gray-7">{dummyReviews.filter(r => r.rating < 4).length}</p> {/* Example: reviews needing attention */}
                     <p className="text-xs text-red mt-1">Action required</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div className="bg-white p-6 rounded-lg shadow h-76">
                    <h3 className="text-lg font-semibold text-gray-7 mb-4">Monthly Sales Performance</h3>
                    <div className="h-80"> {/* Constrain chart height */}
                        <Bar options={{...options, plugins: {...options.plugins, title: {...options.plugins.title, text:'Monthly Sales ($)'}}}} data={salesData} />
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow h-96">
                     <h3 className="text-lg font-semibold text-gray-7 mb-4">Order Status Distribution</h3>
                     <div className="h-80 flex items-center justify-center"> {/* Constrain chart height */}
                        <Pie options={{...options, plugins: {...options.plugins, title: {...options.plugins.title, text:'Order Status'}}}} data={orderStatusData} />
                     </div>
                </div>
            </div>
        </div>
    );
};

// ## Product Item Component (Modified for Admin) ##
const AdminProductItem = ({ item, onEditClick, onDeleteClick }) => {

  const handleEdit = (e) => {
      e.preventDefault(); // Prevent link navigation if buttons are inside link
      e.stopPropagation();
      onEditClick(item);
  };

  const handleDelete = (e) => {
      e.preventDefault(); // Prevent link navigation if buttons are inside link
      e.stopPropagation();
      if (window.confirm(`Are you sure you want to delete "${item.title}"?`)) {
          onDeleteClick(item.id);
      }
  };

  return (
    <div className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden  flex flex-col">
      <div className="relative overflow-hidden flex items-center justify-center bg-gray-100 min-h-[150px] p-4">
        {/* Use Link for navigation to product details page if needed, but make sure buttons are accessible */}
        <Link href={`#`} onClick={(e) => e.preventDefault()} className="block w-full h-full">
            <Image
                src={item.imgs?.previews?.[0] || '/images/placeholder.png'} // Added fallback
                alt={item.title}
                width={200}
                height={200}
                className="object-contain max-h-[200px] mx-auto"
            />
        </Link>
         {/* Edit/Delete Buttons - positioned absolutely */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
                onClick={handleEdit}
                aria-label="Edit product"
                className="flex items-center justify-center w-8 h-8 rounded-full shadow-md ease-out duration-200 text-blue bg-white hover:bg-blue-dark"
                title="Edit Product"
            >
                {/* Edit Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>
            <button
                onClick={handleDelete}
                aria-label="Delete product"
                className="flex items-center justify-center w-8 h-8 rounded-full shadow-md ease-out duration-200 text-red bg-white hover:bg-red-dark"
                title="Delete Product"
            >
                 {/* Delete Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
         {/* Star Rating (Example) */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
           <svg
           key={i}
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 20 20"
           fill={i < (item.rating || 4) ? '#facc15' : '#d1d5db'} // Yellow for filled, Gray for empty
           className="w-5 h-5"
         >
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.443a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.54-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.946z" />
         </svg>
          ))}
           <span className="text-xs text-dark ml-1">({item.reviews || 0} reviews)</span>
        </div>

        {/* Product Title */}
        <h3
          className="font-semibold text-dark hover:text-blue text-base leading-6 mb-2.5 inline-block"
          title={item.title}
        >
          {item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title} {/* Truncate long titles */}
        </h3>

        {/* Price and Stock */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-semibold text-lg text-blue">
            ${item.price?.toFixed(2)}
          </span>
           <span className={`text-xs font-medium px-2 py-0.5 rounded ${item.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red text-white'}`}>
                {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
            </span>
        </div>
      </div>
    </div>
  );
};


// ## Product List Component ##
const ProductList = ({ products, onEdit, onDelete }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All Categories");
    const [sortBy, setSortBy] = useState("Last added");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Adjust as needed

    // --- Filtering and Sorting Logic ---
    const filteredProducts = products
        .filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .filter(product =>
            categoryFilter === "All Categories" || product.category === categoryFilter
        );
        // Add sorting logic here based on `sortBy` state if needed

    // --- Pagination Logic ---
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getUniqueCategories = () => {
        const categories = new Set(products.map(p => p.category).filter(Boolean)); // Filter out undefined/null
        return ["All Categories", ...Array.from(categories)];
    };
    const uniqueCategories = getUniqueCategories();


    return (
        <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-6 pt-20 px-6 md:px-8 pb-1 md:pb-8 top-[88px]">
                <h1 className="text-2xl font-semibold text-gray-7">Product List</h1>
                {/* Add buttons can go here or in the AddProduct component */}
                {/* <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add New Product
                </button> */}
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                    {/* Search Input */}
                    <div className="relative flex-grow max-w-sm">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }} // Reset page on search
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex gap-4 flex-wrap">
                         <select
                            value={categoryFilter}
                            onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }} // Reset page on filter change
                            className="px-4 py-2 border border-gray-5 rounded-md text-gray-7 hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-blue-dark"
                        >
                            {uniqueCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                         <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-5 rounded-md text-gray-7 hover:bg-gray-4 hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
                        >
                            <option value="Last added">Last added</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Name: A-Z">Name: A-Z</option>
                             {/* Add more sort options */}
                        </select>
                    </div>
                </div>
            </div>

             {/* Product Grid */}
             {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentProducts.map((item) => (
                        <AdminProductItem
                            item={item}
                            key={item.id}
                            onEditClick={onEdit}
                            onDeleteClick={onDelete}
                        />
                    ))}
                </div>
             ) : (
                <div className="text-center py-10 text-gray">
                    No products found matching your criteria.
                </div>
             )}


            {/* Pagination */}
            {totalPages > 1 && (
                 <div className="flex justify-center items-center gap-2 p-4 mt-6">
                    <button
                        className="px-3 py-1 border border-gray rounded-md text-gray hover:bg-blue-dark disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        « Prev
                    </button>

                    {/* Generate page numbers (simplified example) */}
                    {[...Array(totalPages).keys()].map(number => (
                        <button
                            key={number + 1}
                            className={`flex items-center justify-center w-8 h-8 rounded-md border ${
                                currentPage === number + 1
                                ? 'bg-blue-dark text-white border-blue-dark'
                                : 'border-gray text-gray hover:bg-gray'
                            }`}
                            onClick={() => handlePageChange(number + 1)}
                        >
                        {number + 1}
                        </button>
                    ))}


                    <button
                         className="px-3 py-1 border border-gray rounded-md text-gray0 hover:bg-gray disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next »
                    </button>
                </div>
            )}
        </div>
    );
};

// ## Add Product Form Component ##
const AddProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    // Add state for image upload if needed

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!title || !price || !category || !stock) {
            alert('Please fill in all required fields.');
            return;
        }
        const newProduct = {
            id: `prod_${Date.now()}`, // Simple unique ID generation
            title,
            price: parseFloat(price),
            category,
            description,
            stock: parseInt(stock, 10),
            imgs: { previews: ['/images/placeholder.png'] }, // Placeholder image
            rating: 0,
            reviews: 0,
            // Add other necessary fields
        };
        onAddProduct(newProduct);
        // Reset form (optional)
        setTitle('');
        setPrice('');
        setCategory('');
        setDescription('');
        setStock('');
        alert('Product added successfully!'); // Simple feedback
    };

    return (
        <div className="bg-white pt-20  px-6 md:px-8 pb-6 md:pb-8 rounded-lg shadow h-[calc(100vh-88px)]  z-10 overflow-auto  top-[88px]">
            <h1 className="text-2xl top-[100px] font-semibold text-gray-7  mb-6">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="productTitle" className="block text-sm font-medium text-gray-7 mb-1">Product Title <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="productTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-7 mb-1">Price ($) <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            id="productPrice"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            step="0.01"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div>
                        <label htmlFor="productStock" className="block text-sm font-medium text-gray-7 mb-1">Stock Quantity <span className="text-red">*</span></label>
                        <input
                            type="number"
                            id="productStock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                 </div>


                <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-7 mb-1">Category <span className="text-red">*</span></label>
                    <input
                        type="text"
                        id="productCategory"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                         placeholder="e.g., Electronics, Clothing, Books"
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                    {/* Or use a <select> dropdown if categories are predefined */}
                </div>

                <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-gray-7 mb-1">Description</label>
                    <textarea
                        id="productDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                    ></textarea>
                </div>

                 {/* Placeholder for Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-7 mb-1">Product Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-5 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-5" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-5">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue hover:text-blue-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-5">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt-3">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue text-white rounded-md hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

// ## Categories Component (Placeholder) ##
const CategoriesPage = () => (
    <div className="bg-white pt-20 px-6 md:px-8 pb-6 md:pb-8 rounded-lg shadow top-[88px]">
        <h1 className="text-2xl font-semibold text-gray-7 mb-6">Product Categories</h1>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>
        <p className="text-gray-5">Category management Page...</p>

        {/* Add UI for listing, adding, editing, deleting categories here */}
     </div>
);


// ## Orders Page Component ##
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
};

// ## Reviews Page Component ##
const ReviewsPage = () => {
    // Add state for filtering, sorting, pagination if needed
    return (
         <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-7 pt-20 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-6">Product Reviews</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                 <ul className="divide-y divide-gray-6">
                    {dummyReviews.map(review => (
                        <li key={review.id} className="p-4 hover:bg-gray">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm font-semibold text-dark">{review.customer}</p>
                                    <p className="text-xs text-dark">Reviewed: <span className="font-medium text-blue">{review.product}</span> on {review.date}</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow' : 'text-gray-4'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.97z" />
                                        </svg>
                                    ))}
                                    <span className="text-xs text-gray-5 ml-1">({review.rating}/5)</span>
                                </div>
                            </div>
                             <p className="text-sm text-gray-6 mb-3">{review.comment}</p>
                             <div className="flex gap-2">
                                 <button className="text-xs px-2 py-1 rounded bg-green text-white hover:bg-green">Approve</button>
                                 <button className="text-xs px-2 py-1 rounded bg-red text-white hover:bg-red">Delete</button>
                             </div>
                        </li>
                    ))}
                 </ul>
            </div>
             {/* Add pagination if needed */}
        </div>
    );
};

// ## Profile Page Component ##
const ProfilePage = () => {
    const profile = dummyAdminProfile;
    return (
         <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-7 pt-20 px-6 md:px-8 pb-2 md:pb-2 top-[88px] mb-6">Admin Profile</h1>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Profile Picture */}
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src={profile.imageUrl}
                        alt={profile.name}
                        width={128}
                        height={128}
                        className="rounded-full mb-4 border-4 border-gray-4"
                    />
                                       <div className="flex text-sm text-gray">
                                <label htmlFor="Profile-pic" className="relative cursor-pointer bg-white rounded-md font-medium text-blue hover:text-blue-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue">
                                    <span>Change Profile</span>
                                    <input id="Profile-pic" name="file-upload" type="file" className="sr-only" />
                                </label>
                            </div>
                </div>

                {/* Profile Details */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-2xl font-bold text-dark">{profile.name}</h2>
                    <p className="text-sm font-medium text-indigo bg-indigo px-2 py-0.5 rounded-full inline-block">{profile.role}</p>

                     <div className="border-t pt-4 mt-4 space-y-2">
                         <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span className="text-gray-7">{profile.email}</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.87 2.25H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                            </svg>
                            <span className="text-gray-7">{profile.phone}</span>
                        </div>
                         <div className="flex items-center gap-3">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008Zm0 2.25h.008v.008H9.75v-.008Zm2.25-4.5h.008v.008H12v-.008Zm0 2.25h.008v.008H12v-.008Zm0 2.25h.008v.008H12v-.008Zm2.25-4.5h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25v-.008Z" />
                            </svg>
                            <span className="text-gray-7">Joined: {profile.joinedDate}</span>
                        </div>
                    </div>

                     <div className="mt-6 flex gap-3">
                        <button className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-dark">
                            Edit Profile
                        </button>
                         <button className="px-4 py-2 bg-gray-3 text-dark rounded-md hover:bg-gray-5 hover:text-white">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ## Edit Product Modal Component ##
const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
    const [editedProduct, setEditedProduct] = useState(null);

    // Update internal state when product prop changes
    useEffect(() => {
        if (product) {
            setEditedProduct({ ...product });
        } else {
            setEditedProduct(null); // Reset if product is null
        }
    }, [product]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : (name === 'stock' ? parseInt(value, 10) : value)
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!editedProduct.title || !editedProduct.price || !editedProduct.category || editedProduct.stock < 0) {
             alert('Please fill in all required fields correctly.');
             return;
        }
        onSave(editedProduct);
        onClose(); // Close modal after saving
    };

    // Render nothing if modal is closed or no product/editedProduct
    if (!isOpen || !editedProduct) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit Product">
            <form onSubmit={handleSave} className="space-y-4 ">
                <div>
                    <label htmlFor="editProductTitle" className="block text-sm font-medium text-gray-7 mb-1">Title <span className="text-red">*</span></label>
                    <input
                        type="text"
                        id="editProductTitle"
                        name="title"
                        value={editedProduct.title}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="editProductPrice" className="block text-sm font-medium text-gray-7 mb-1">Price ($) <span className="text-red">*</span></label>
                        <input
                            type="number"
                            id="editProductPrice"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleChange}
                            required
                            step="0.01"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark"
                        />
                    </div>
                     <div>
                        <label htmlFor="editProductStock" className="block text-sm font-medium text-gray-7 mb-1">Stock <span className="text-red">*</span></label>
                        <input
                            type="number"
                            id="editProductStock"
                            name="stock"
                            value={editedProduct.stock}
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark"
                        />
                    </div>
                </div>


                <div>
                    <label htmlFor="editProductCategory" className="block text-sm font-medium text-gray-7 mb-1">Category <span className="text-red">*</span></label>
                    <input
                        type="text"
                        id="editProductCategory"
                        name="category"
                        value={editedProduct.category || ''} // Handle potentially undefined category
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark"
                    />
                </div>

                 <div>
                    <label htmlFor="editProductDescription" className="block text-sm font-medium text-gray-7 mb-1">Description</label>
                    <textarea
                        id="editProductDescription"
                        name="description"
                        value={editedProduct.description || ''}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark"
                    ></textarea>
                </div>

                 {/* Placeholder for editing image - more complex */}
                 <div>
                     <label className="block text-sm font-medium text-gray-7 mb-1">Current Image</label>
                     <Image src={editedProduct.imgs?.previews?.[0] || '/images/placeholder.png'} alt="Current" width={80} height={80} className="rounded border"/>
                     <label htmlFor="edit-file-upload" className="mt-2 text-sm text-blue cursor-pointer hover:underline">Change Image</label>
                     <input id="edit-file-upload" name="file-upload" type="file" className="sr-only" />
                 </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-3 text-dark rounded-md hover:bg-gray-dark"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-dark"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </Modal>
    );
};


// --- Main Admin Dashboard Component ---

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // 'dashboard', 'products-list', 'add-product', 'categories', 'orders', 'reviews', 'profile'
  const [isProductsExpanded, setIsProductsExpanded] = useState(false); // State for Products dropdown
  const [products, setProducts] = useState(shopData); // Manage product state here
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);


  const handleNavClick = (section) => {
      setActiveSection(section);
       // Collapse products menu if navigating away from product sections
      if (!section.startsWith('products')) {
          setIsProductsExpanded(false);
      }
  };

  const toggleProductsMenu = () => {
      setIsProductsExpanded(!isProductsExpanded);
      // Optionally navigate to product list when expanding
       if (!isProductsExpanded) {
           setActiveSection('products-list');
       } else if (activeSection.startsWith('products-')) {
            // If already on a product page and collapsing, maybe go back to dashboard? Or stay? Decide behavior.
            // setActiveSection('dashboard'); // Example: Go to dashboard on collapse
       }
  };

  // --- CRUD Handlers ---
  const handleAddProduct = (newProduct) => {
      setProducts(prevProducts => [newProduct, ...prevProducts]);
      setActiveSection('products-list'); // Switch view to product list after adding
  };

  const handleEditProductClick = (product) => {
      setProductToEdit(product);
      setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
      // Add feedback like a toast notification here
      console.log("Deleted product:", productId);
  };

  const handleSaveEditedProduct = (updatedProduct) => {
      setProducts(prevProducts =>
            prevProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p)
        );
      setProductToEdit(null);
      setIsEditModalOpen(false);
      // Add feedback
      console.log("Updated product:", updatedProduct);
  };

  const handleCloseModal = () => {
      setProductToEdit(null);
      setIsEditModalOpen(false);
  };


  // --- Sidebar Link Component ---
  const SidebarLink = ({ section, currentSection, onClick, children, icon }) => (
       <button // Use button for state changes, Link for actual navigation if needed
            onClick={() => onClick(section)}
            className={`flex items-center gap-3 p-3 w-full text-left rounded-md transition-colors duration-200 ${
                currentSection === section
                    ? 'bg-blue-dark text-white font-semibold'
                    : 'text-dark hover:bg-gray hover:text-dark'
            }`}
        >
            {icon}
            {children}
      </button>
  );

 const SidebarDropdownLink = ({ section, currentSection, onClick, children, icon }) => (
       <button
            onClick={() => onClick(section)}
            className={`flex items-center gap-3 py-2 px-3 w-full text-left rounded-md transition-colors duration-200 text-sm ${
                currentSection === section
                    ? 'bg-blue-dark text-white font-medium'
                    : 'text-dark hover:bg-gray hover:text-dark'
            }`}
        >
            {icon || <span className="w-5 h-5 inline-block"></span>} {/* Placeholder for alignment */}
            {children}
      </button>
  );

  return (
    <div className="min-h-screen bg-gray-1">
      <AHeader />

      <div className="flex pt-[88px]"> {/* Adjust pt to match header height */}
        {/* Sidebar */}
        <aside className="w-64 absolute left-0 top-[195px] h-[calc(100vh-100px)] bg-white shadow-md  overflow-y-auto"> {/* Improved styling */}
          <div className="p-4">
            {/* Logo/Brand */}
             <Link href="/" className="flex items-center gap-2 mb-8 mt-2 px-2">
              <div className="bg-blue text-white p-2 rounded-lg shadow"> {/* Slightly updated logo style */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5C3 3.87 3.02 3 6.5 3C9.98 3 10 3.87 10 6.5C10 9.13 10.02 10 6.5 10C2.98 10 3 9.13 3 6.5Z" fill="currentColor"/><path d="M14 6.5C14 3.87 14.02 3 17.5 3C20.98 3 21 3.87 21 6.5C21 9.13 21.02 10 17.5 10C13.98 10 14 9.13 14 6.5Z" fill="currentColor"/><path d="M3 17.5C3 14.87 3.02 14 6.5 14C9.98 14 10 14.87 10 17.5C10 20.13 10.02 21 6.5 21C2.98 21 3 20.13 3 17.5Z" fill="currentColor"/><path d="M14 17.5C14 14.87 14.02 14 17.5 14C20.98 14 21 14.87 21 17.5C21 20.13 21.02 21 17.5 21C13.98 21 14 20.13 14 17.5Z" fill="currentColor"/></svg>
              </div>
              <div className="text-blue font-semibold text-lg">
                Admin <span className="text-gray font-normal">Panel</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="space-y-1">
                {/* Dashboard Link */}
                 <SidebarLink
                    section="dashboard"
                    currentSection={activeSection}
                    onClick={handleNavClick}
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                 >
                    Dashboard
                </SidebarLink>


                {/* Products Section (Collapsible) */}
                <div>
                    <button
                        onClick={toggleProductsMenu}
                        className={`flex items-center justify-between gap-3 p-3 w-full text-left rounded-md transition-colors duration-200 ${
                            activeSection.startsWith('products-')
                                ? 'bg-blue-dark text-white font-semibold' // Highlight if any product section is active
                                : 'text-dark hover:bg-gray hover:text-dark'
                        }`}
                    >
                        <span className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.17004 7.44L12 12.55L20.77 7.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.93001 2.48L4.59001 5.45C3.38001 6.12 2.39001 7.80 2.39001 9.18V14.83C2.39001 16.21 3.38001 17.89 4.59001 18.56L9.93001 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18C21.62 7.80 20.63 6.12 19.42 5.45L14.08 2.48C12.93 1.84 11.07 1.84 9.93001 2.48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            Products
                        </span>
                        {/* Arrow Icon */}
                        <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsExpanded ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    {/* Collapsible Submenu */}
                    {isProductsExpanded && (
                        <div className="mt-1 pl-6 space-y-1 border-l-2 border-gray ml-3">
                            <SidebarDropdownLink
                                section="products-list"
                                currentSection={activeSection}
                                onClick={handleNavClick}
                            >
                                Product List
                            </SidebarDropdownLink>
                            <SidebarDropdownLink
                                section="add-product"
                                currentSection={activeSection}
                                onClick={handleNavClick}
                            >
                                Add Product
                            </SidebarDropdownLink>
                             <SidebarDropdownLink
                                section="categories"
                                currentSection={activeSection}
                                onClick={handleNavClick}
                            >
                                Categories
                            </SidebarDropdownLink>
                        </div>
                    )}
                </div>


                {/* Orders Link */}
                 <SidebarLink
                    section="orders"
                    currentSection={activeSection}
                    onClick={handleNavClick}
                     icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 13.01H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9.01H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.99561 13H6.00459" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.99561 9H6.00459" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                 >
                    Orders
                </SidebarLink>


                {/* Reviews Link */}
                <SidebarLink
                    section="reviews"
                    currentSection={activeSection}
                    onClick={handleNavClick}
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.9955 11H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                >
                    Reviews
                </SidebarLink>

                {/* Profile Link */}
                <SidebarLink
                    section="profile"
                    currentSection={activeSection}
                    onClick={handleNavClick}
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                >
                    Profile
                </SidebarLink>

                {/* Add other links like Customers, Settings etc. */}

            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="ml-64 flex-1 p-6 md:p-8 lg:p-10"> {/* Added padding */}
          <div className="max-w-full mx-auto"> {/* Use max-w-full or constrain as needed */}
            {/* Conditional Rendering based on activeSection */}
            {activeSection === 'dashboard' && <DashboardStats />}
            {activeSection === 'products-list' && (
                <ProductList
                    products={products}
                    onEdit={handleEditProductClick}
                    onDelete={handleDeleteProduct}
                />
            )}
            {activeSection === 'add-product' && <AddProductForm onAddProduct={handleAddProduct} />}
            {activeSection === 'categories' && <CategoriesPage />}
            {activeSection === 'orders' && <OrdersPage />}
            {activeSection === 'reviews' && <ReviewsPage />}
            {activeSection === 'profile' && <ProfilePage />}

            {/* Fallback or Welcome message if needed */}
             {/* {activeSection !== 'dashboard' && !activeSection.startsWith('products') && activeSection !== 'orders' ... etc
             && <p>Select an option from the sidebar.</p>} */}
          </div>
        </main>
      </div>

      {/* Edit Product Modal */}
       <EditProductModal
            isOpen={isEditModalOpen}
            onClose={handleCloseModal}
            product={productToEdit}
            onSave={handleSaveEditedProduct}
        />
    </div>
  );
};

export default AdminDashboard;

