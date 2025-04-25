'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import Admin from "@/components/Admin";
import AHeader from "@/components/Admin/AHeader";
import PreLoader from "@/components/Common/PreLoader";

const AdminPage = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const [isProductsExpanded, setIsProductsExpanded] = useState(false);

    // Show loader on route change
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 30);
        return () => clearTimeout(timer);
    }, [pathname]);

    // Toggle Products Menu
    const toggleProductsMenu = () => {
        setIsProductsExpanded(!isProductsExpanded);
    };

    // Handle navigation with loader
    const handleNavClick = (path) => {
        setIsLoading(true);
        router.push(path);
    };

    // Sidebar Link Component
    const SidebarLink = ({ path, currentPath, onClick, children, icon }) => (
        <button
            onClick={() => onClick(path)}
            className={`flex items-center gap-3 p-3 w-full text-left rounded-md transition-colors duration-200 ${currentPath === path
                ? 'bg-blue-dark text-white font-semibold'
                : 'text-dark hover:bg-gray hover:text-dark'
                }`}
        >
            {icon}
            {children}
        </button>
    );

    // Submenu link
    const SidebarDropdownLink = ({ path, currentPath, onClick, children, icon }) => (
        <button
            onClick={() => onClick(path)}
            className={`flex items-center gap-3 py-2 px-3 w-full text-left rounded-md transition-colors duration-200 text-sm ${currentPath === path
                ? 'bg-blue-dark text-white font-medium'
                : 'text-dark hover:bg-gray hover:text-dark'
                }`}
        >
            {icon || <span className="w-5 h-5 inline-block" />}
            {children}
        </button>
    );

    return (
        <main>
            <Admin />
            <div className="min-h-screen bg-gray-1">
                <AHeader />
                <div className="flex pt-[88px]">
                    {/* Sidebar */}
                    <aside className="w-64 absolute left-0 top-[179px] h-[calc(100vh-100px)] bg-white overflow-y-auto">
                        <div className="p-4">
                            <Link href="/" className="flex items-center gap-2 mb-8 mt-2 px-2">
                                <div className="bg-blue text-white p-2 rounded-lg shadow">
                                    {/* Logo icon */}
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path d="M3 6.5C3 3.87 3.02 3 6.5 3C9.98 3 10 3.87 10 6.5C10 9.13 10.02 10 6.5 10C2.98 10 3 9.13 3 6.5Z" fill="currentColor" />
                                        <path d="M14 6.5C14 3.87 14.02 3 17.5 3C20.98 3 21 3.87 21 6.5C21 9.13 21.02 10 17.5 10C13.98 10 14 9.13 14 6.5Z" fill="currentColor" />
                                        <path d="M3 17.5C3 14.87 3.02 14 6.5 14C9.98 14 10 14.87 10 17.5C10 20.13 10.02 21 6.5 21C2.98 21 3 20.13 3 17.5Z" fill="currentColor" />
                                        <path d="M14 17.5C14 14.87 14.02 14 17.5 14C20.98 14 21 14.87 21 17.5C21 20.13 21.02 21 17.5 21C13.98 21 14 20.13 14 17.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="text-blue font-semibold text-lg">Admin <span className="text-gray font-normal">Panel</span></div>
                            </Link>

                            {/* Navigation */}
                            <nav className="space-y-1">
                                <SidebarLink
                                    path="/adminHome"
                                    currentPath={pathname}
                                    onClick={handleNavClick}
                                >
                                    Dashboard
                                </SidebarLink>

                                {/* Products Section */}
                                <div>
                                    <button
                                        onClick={toggleProductsMenu}
                                        className={`flex items-center justify-between gap-3 p-3 w-full text-left rounded-md transition-colors duration-200 ${pathname.startsWith('/adminHome/product') || pathname === '/adminHome/addProduct'
                                            ? 'bg-blue-dark text-white font-semibold'
                                            : 'text-dark hover:bg-gray hover:text-dark'
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">Products</span>
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.5 8.25-7.5 7.5-7.5-7.5" stroke="currentColor" />
                                        </svg>
                                    </button>

                                    {isProductsExpanded && (
                                        <div className="mt-1 pl-6 space-y-1 border-l-2 border-gray ml-3">
                                            <SidebarDropdownLink
                                                path="/adminHome/productList"
                                                currentPath={pathname}
                                                onClick={handleNavClick}
                                            >
                                                Product List
                                            </SidebarDropdownLink>
                                            <SidebarDropdownLink
                                                path="/adminHome/addProduct"
                                                currentPath={pathname}
                                                onClick={handleNavClick}
                                            >
                                                Add Product
                                            </SidebarDropdownLink>
                                        </div>
                                    )}
                                </div>

                                <SidebarLink
                                    path="/adminHome/orders"
                                    currentPath={pathname}
                                    onClick={handleNavClick}
                                >
                                    Orders
                                </SidebarLink>

                                <SidebarLink
                                    path="/adminHome/reviews"
                                    currentPath={pathname}
                                    onClick={handleNavClick}
                                >
                                    Reviews
                                </SidebarLink>

                                <SidebarLink
                                    path="/adminHome/profile"
                                    currentPath={pathname}
                                    onClick={handleNavClick}
                                >
                                    Profile
                                </SidebarLink>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="ml-64 flex-1 p-6 md:p-8 lg:p-10">
                        <div className="max-w-full mx-auto">
                            {isLoading ? <PreLoader /> : children}
                        </div>
                    </main>
                </div>
            </div>
        </main>
    );
};

export default AdminPage;
