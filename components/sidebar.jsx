"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Layers,
  Tag,
  ShoppingBag,
  Users,
  ChevronDown,
  PlusCircle,
  List,
  Grid3X3,
  BadgePercent,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"

export function Sidebar({ isMobile = false, onNavClick }) {
  const pathname = usePathname()
  const { user } = useAuth()
  const [productsOpen, setProductsOpen] = useState(true)

  const handleNavClick = () => {
    if (isMobile && onNavClick) {
      onNavClick()
    }
  }

  const routes = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      href: "/products",
      icon: Tag,
      submenu: [
        {
          name: "Add product",
          href: "/products/add",
          icon: PlusCircle,
        },
        {
          name: "Product list",
          href: "/products",
          icon: List,
        }
      ],
    },
    {
      name: "Orders",
      href: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Customers",
      href: "/customers",
      icon: Users,
    },
  ]

  return (
    <div className="h-full flex flex-col bg-blue-50 text-blue-900 w-64 p-4">
      {!isMobile && (
        <div className="mb-10 mt-4">
          <Link href="/dashboard" className="flex items-center">
            <h1 className="text-4xl font-bold text-blue-600">Byte And Board Solutions</h1>
          </Link>
        </div>
      )}

      <nav className="space-y-2 flex-1">
        {routes.map((route) => (
          <div key={route.href}>
            {route.submenu ? (
              <div className="space-y-1">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2 text-lg rounded-md transition-colors",
                    pathname.startsWith(route.href)
                      ? "text-blue-700 font-medium"
                      : "text-gray-600 hover:text-blue-700 hover:bg-blue-100",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <route.icon className="h-5 w-5" />
                    {route.name}
                  </div>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", productsOpen ? "transform rotate-180" : "")}
                  />
                </button>

                {productsOpen && (
                  <div className="pl-10 space-y-1">
                    {route.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "text-blue-700 font-medium"
                            : "text-gray-600 hover:text-blue-700 hover:bg-blue-100",
                        )}
                        onClick={handleNavClick}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={route.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-lg rounded-md transition-colors",
                  pathname === route.href
                    ? "text-blue-700 font-medium"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-100",
                )}
                onClick={handleNavClick}
              >
                <route.icon className="h-5 w-5" />
                {route.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4">
        <Link
          href="/profile"
          className="flex items-center gap-3 px-3 py-2 text-lg rounded-md transition-colors hover:bg-blue-100"
          onClick={handleNavClick}
        >
          <Avatar className="h-8 w-8 bg-purple-500">
            <AvatarFallback>{user?.email?.charAt(0).toUpperCase() || "T"}</AvatarFallback>
          </Avatar>
          <span>Edit Profile</span>
        </Link>
      </div>
    </div>
  )
}

