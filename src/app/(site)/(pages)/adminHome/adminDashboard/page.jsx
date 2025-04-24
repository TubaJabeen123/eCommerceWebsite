'use client';
import { useState } from "react";
import Link from "next/link";
import AHeader from "@/components/Admin/AHeader";
import DashboardStats from "@/components/Admin/DashboardStats";
import shopData from "@/components/Shop/shopData";
// import ProductList from "@/components/Admin/ProductList";
// import AddProductForm from "@/components/Admin/AddProductForm";
// import CategoriesPage from "@/components/Admin/CategoriesPage";
// import OrdersPage from "@/components/Admin/OrdersPage";
// import ReviewsPage from "@/components/Admin/ReviewsPage";
// import ProfilePage from "@/components/Admin/ProfilePage";
// import EditProductModal from "@/components/Admin/EditProductModal";
// Assuming you have a data file for products

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
            className={`flex items-center gap-3 p-3 w-full text-left rounded-md transition-colors duration-200 ${currentSection === section
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
            className={`flex items-center gap-3 py-2 px-3 w-full text-left rounded-md transition-colors duration-200 text-sm ${currentSection === section
                ? 'bg-blue-dark text-white font-medium'
                : 'text-dark hover:bg-gray hover:text-dark'
                }`}
        >
            {icon || <span className="w-5 h-5 inline-block"></span>} {/* Placeholder for alignment */}
            {children}
        </button>
    );

    return (
        <DashboardStats />
                         
    );
};

export default AdminDashboard;