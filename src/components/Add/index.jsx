"use client"
import { useState } from "react"
import { auth, db, storage } from '../../lib/firebaseConfig';
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';

export default function Add() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter() 

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            if (!auth.currentUser) {
                alert("Please sign in first!");
                return;
            }
    
            const productRef = doc(collection(db, 'products'));
            const productData = {
                id: uuidv4(),
                product_name: name,
                product_description: description,
                product_price: parseFloat(price),
                product_category: category,
                createdAt: serverTimestamp()
            };
    
            // Add image handling if needed
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
            router.push("/shop-with-sidebar");
        } catch (error) {
            console.error("Error adding product:", error);
            alert(`Error adding product: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-4 md:p-8">
            <nav aria-label="breadcrumb">
                <ol className="flex list-none p-0 m-0">
                    <li><a href="/products">Products</a></li>
                    <li>Add</li>
                </ol>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Add Product</h1>
            <div className="max-w-2xl mx-auto">
                <div className="mb-4">
                    <h2 className="text-xl md:text-2xl">Product Information</h2>
                </div>
                <form id="add-product-form" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    {/* Name field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="font-medium">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Product name"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Description field */}
                    <div className="space-y-2">
                        <label htmlFor="description" className="font-medium">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Product description"
                            className="w-full px-3 py-2 border rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Price field */}
                    <div className="space-y-2">
                        <label htmlFor="price" className="font-medium">Price</label>
                        <input
                            id="price"
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0.00"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Category select */}
                    <div className="space-y-2">
                        <label htmlFor="category" className="font-medium">Categories</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="clothing">Clothing</option>
                            <option value="accessories">Accessories</option>
                            <option value="electronics">Electronics</option>
                            <option value="home">Home</option>
                            <option value="outdoor">Outdoor</option>
                        </select>
                    </div>
                    {/* Image upload */}
                    <div className="space-y-2">
                        <label htmlFor="image" className="font-medium">Image</label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full cursor-pointer"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => router.push("/products")}
                        className="w-full sm:w-auto px-4 py-2 bg-blue hover:bg-blue-dark rounded-md transition-colors"
                    >
                        Submit
                    </button>
                </form>
           


                                
            </div>
        </div>
    )
} 