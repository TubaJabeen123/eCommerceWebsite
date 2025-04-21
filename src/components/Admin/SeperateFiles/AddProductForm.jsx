import { useState } from "react"
import Link from "next/link";
import Image from "next/image"
import AdminSidebar from "./AdminSidebar"
import AHeader from "./Header"


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
        <div className="bg-white p-6 md:p-8 rounded-lg shadow">
            <h1 className="text-2xl font-semibold text-gray-7 mb-6">Add New Product</h1>
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
export default AddProductForm;