'use client'

import { useState } from 'react';
import AdminProductItem from '@/components/Admin/AdminProductItem';
import shopData from '@/components/Shop/shopData';

const ProductList = ({onEdit, onDelete }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [products , setProducts] = useState(shopData); 
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
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                            className={`flex items-center justify-center w-8 h-8 rounded-md border ${currentPage === number + 1
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

export default ProductList;