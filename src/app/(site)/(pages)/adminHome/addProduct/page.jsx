
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
import { auth, db, storage } from '../../../../../lib/firebaseConfig';
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';
import PreLoader from "@/components/Common/PreLoader";
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

import shopData from "../../../../../components/Shop/shopData";


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



function AddProductForm() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            if (!auth.currentUser) {
                alert("Please sign in first!");
                return;
            }
    
            const id = uuidv4(); // 🆕 create your own id
            const productRef = doc(db, 'products', id); // 🆕 use it as Firestore document id
    
            const productData = {
                id, // 🆕 also save the id inside the data
                product_name: name,
                product_description: description,
                product_price: parseFloat(price),
                product_category: category,
                createdAt: serverTimestamp(),
            };
    
            if (image) {
                const reader = new FileReader();
                const base64Image = await new Promise((resolve) => {
                    reader.onload = () => resolve(reader.result);
                    reader.readAsDataURL(image);
                });
                productData.image = base64Image;
            }
    
            await setDoc(productRef, productData);
            alert("Product added successfully!");
            router.push("/adminHome/productList");
        } catch (error) {
            console.error("Error adding product:", error);
            alert(`Error adding product: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow">
            {loading && ( // ✅ Full-screen loader
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
                    <PreLoader />
                </div>
            )}
            <h1 className="text-2xl font-semibold text-gray-700 mb-6">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="productTitle" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="productTitle"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">
                            Price ($) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="productPrice"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            step="0.01"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="productCategory"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Toys">Toys</option>
                            <option value="Sports">Sports</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="productDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                    <span>Upload a file</span>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className="sr-only"
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>

                            {image && (
                                <div className="mt-4">
                                    <p className="text-xs text-gray-500 mb-1">Preview:</p>
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Preview"
                                        className="mx-auto h-24 object-contain rounded"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="flex justify-center pt-3">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {
                            loading ? "Creating..." : "Create"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProductForm;


