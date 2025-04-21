"use client";
import React from "react";
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
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

  export default Modal;