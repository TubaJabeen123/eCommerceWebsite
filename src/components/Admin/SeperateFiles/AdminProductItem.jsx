"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="relative overflow-hidden flex items-center justify-center bg-gray-100 min-h-[250px] p-4">
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
              <Image
                key={i}
                src={`/images/icons/icon-star${i < (item.rating || 4) ? '' : '-gray'}.svg`} // Assuming gray star exists
                alt="star icon"
                width={14}
                height={14}
              />
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

  export default AdminProductItem;