"use client"
import { useState } from "react"
import Link from "next/link"

const AdminSidebar = ({ activePage }) => {
  const [productsOpen, setProductsOpen] = useState(true)

  return (
    <div className="w-64 fixed left-0 top-[88px] h-[calc(100vh-88px)] bg-white shadow-sm z-10 overflow-auto">
      <div className="p-4">
        <Link href="/admin" className="flex items-center gap-2 mb-8 mt-2">
          <div className="bg-blue-600 text-white p-2 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 6.5C3 3.87 3.02 3 6.5 3C9.98 3 10 3.87 10 6.5C10 9.13 10.02 10 6.5 10C2.98 10 3 9.13 3 6.5Z"
                fill="currentColor"
              />
              <path
                d="M14 6.5C14 3.87 14.02 3 17.5 3C20.98 3 21 3.87 21 6.5C21 9.13 21.02 10 17.5 10C13.98 10 14 9.13 14 6.5Z"
                fill="currentColor"
              />
              <path
                d="M3 17.5C3 14.87 3.02 14 6.5 14C9.98 14 10 14.87 10 17.5C10 20.13 10.02 21 6.5 21C2.98 21 3 20.13 3 17.5Z"
                fill="currentColor"
              />
              <path
                d="M14 17.5C14 14.87 14.02 14 17.5 14C20.98 14 21 14.87 21 17.5C21 20.13 21.02 21 17.5 21C13.98 21 14 20.13 14 17.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-blue-600 font-semibold text-lg">
            Admin <span className="text-gray-500 font-normal">ecommerce</span>
          </div>
        </Link>

        <nav className="space-y-1">
          <Link
            href="/admin"
            className={`flex items-center gap-3 p-3 rounded-md ${
              activePage === "dashboard"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dashboard
          </Link>

          {/* Products dropdown */}
          <div className="mb-1">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex items-center justify-between w-full p-3 text-left rounded-md ${
                ["products", "product-list", "add-product", "categories", "brands"].includes(activePage)
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.17004 7.44L12 12.55L20.77 7.47"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21.61V12.54"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.93001 2.48L4.59001 5.45C3.38001 6.12 2.39001 7.80 2.39001 9.18V14.83C2.39001 16.21 3.38001 17.89 4.59001 18.56L9.93001 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18C21.62 7.80 20.63 6.12 19.42 5.45L14.08 2.48C12.93 1.84 11.07 1.84 9.93001 2.48Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Products
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown content */}
            <div className={`pl-10 mt-1 space-y-1 ${productsOpen ? "block" : "hidden"}`}>
              <Link
                href="/admin/products"
                className={`flex items-center p-2 rounded-md ${
                  activePage === "product-list"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Products list
              </Link>
              <Link
                href="/admin/products/add"
                className={`flex items-center p-2 rounded-md ${
                  activePage === "add-product"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Add product
              </Link>
              <Link
                href="/admin/products/categories"
                className={`flex items-center p-2 rounded-md ${
                  activePage === "categories"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Categories
              </Link>
              <Link
                href="/admin/products/brands"
                className={`flex items-center p-2 rounded-md ${
                  activePage === "brands"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Brands
              </Link>
            </div>
          </div>

          <Link
            href="/admin/orders"
            className={`flex items-center gap-3 p-3 rounded-md ${
              activePage === "orders"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.01H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9.01H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.99561 13H6.00459"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.99561 9H6.00459"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Orders
          </Link>

          <Link
            href="/admin/reviews"
            className={`flex items-center gap-3 p-3 rounded-md ${
              activePage === "reviews"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9965 11H16.0054"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 11H12.0045"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99451 11H8.00349"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Reviews
          </Link>

          <Link
            href="/admin/profile"
            className={`flex items-center gap-3 p-3 rounded-md ${
              activePage === "profile"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Profile
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default AdminSidebar
