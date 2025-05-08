import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Modal } from './AHeader';

const AdminProductItem = ({ item, onEditClick, onDeleteClick, onSave }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        product_name: '',
        product_price: '',
        stock: '',
        product_description: '',
        product_category: '',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState('');

   const openModal = () => {
        setSelectedItem(item);
        setFormData({
            product_name: item.product_name || item.title || '',
            product_price: item.product_price || item.price || '',
            stock: item.stock || '',
            product_description: item.product_description || item.description || '',
            product_category: item.product_category || item.category || '',
            image: item.image || ''
        });
        setImagePreview(item.image || '');
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        setImagePreview('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = { 
            ...item, 
            ...formData,
            price: formData.product_price,
            title: formData.product_name,
            description: formData.product_description,
            category: formData.product_category
        };
        onSave(updatedItem);
        closeModal();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDeleteClick(item.id);
    };

    return (
        <>
            <div className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="relative overflow-hidden flex items-center justify-center bg-gray-100 min-h-[150px] p-4">
                    <Link href="#" onClick={(e) => e.preventDefault()} className="block w-full h-full">
                        <Image
                            src={item?.image || '/images/placeholder.png'}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain max-h-[200px] mx-auto"
                        />
                    </Link>

                    <div className="absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300">

                        <button
                            onClick={openModal}
                            aria-label="Edit product"
                            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 text-dark bg-white hover:text-blue"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>

                        <button
                            onClick={handleDelete}
                            aria-label="Delete product"
                            className="flex items-center justify-center w-8 h-8 rounded-full shadow-md text-red bg-white hover:bg-red-dark"
                            title="Delete Product"
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill={i < (item.rating || 4) ? '#facc15' : '#d1d5db'}
                                className="w-5 h-5"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.443a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.54-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.946z" />
                            </svg>
                        ))}
                        <span className="text-xs text-dark ml-1">({item.reviews || 0} reviews)</span>
                    </div>

                    <h3 className="font-semibold text-dark hover:text-blue text-base leading-6 mb-2.5 inline-block" title={item.title}>
                        {item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
                    </h3>

                    <div className="mt-auto pt-2 flex items-center justify-between">
                        <span className="font-semibold text-lg text-blue">${item.price?.toFixed(2)}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${item.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red text-white'}`}>
                            {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal for Editing */}
            {isModalOpen && selectedItem && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit Product">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-7">Title</label>
                    <input
                        type="text"
                        name="product_name"
                        value={formData.product_name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-4 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-7">Price</label>
                    <input
                        type="number"
                        name="product_price"
                        value={formData.product_price}
                        onChange={handleChange}
                        step="0.01"
                        required
                        className="mt-1 block w-full rounded-md border-gray-4 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-7">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        min={0}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-4 shadow-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="category" className="font-medium">Categories</label>
                    <select
                        id="category"
                        name="product_category"
                        value={formData.product_category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="accessories">Accessories</option>
                        <option value="electronics">Electronics</option>
                        <option value="home">Home</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-7">Description</label>
                    <textarea
                        name="product_description"
                        value={formData.product_description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-4 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="image" className="font-medium">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="mt-1 block w-full rounded-md border-gray-4 shadow-sm"
                        onChange={handleImageChange}
                    />
                    {(imagePreview || formData.image) && (
                        <img
                            src={imagePreview || formData.image}
                            alt="Preview"
                            className="mt-2 w-32 h-32 object-contain border"
                        />
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray rounded hover:bg-gray-3">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue text-white rounded hover:bg-blue-dark">
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )}
        </>
    );
};

export default AdminProductItem;
