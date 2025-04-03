"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductForm } from "@/components/product-form"
import { EditProductForm } from "@/components/edit-product-form"
import { DeleteProductDialog } from "@/components/delete-product-dialog"
import { Pencil, Trash2, Plus, Download, Filter } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [isDeleteProductOpen, setIsDeleteProductOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Mock products data
  useEffect(() => {
    const mockProducts = [
      {
        id: "1",
        name: "T-shirt for Men",
        price: 90.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "clothing",
        description: "Comfortable cotton t-shirt for everyday wear.",
        size: "medium",
      },
      {
        id: "2",
        name: "Travel Bag Jeans",
        price: 19.5,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "accessories",
        description: "Stylish travel bag made from recycled jeans material.",
        size: "large",
      },
      {
        id: "3",
        name: "Jeans shorts",
        price: 70.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "clothing",
        description: "Casual denim shorts perfect for summer.",
        size: "medium",
      },
      {
        id: "4",
        name: "Sofa for interior",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "home",
        description: "Modern sofa with comfortable cushions for your living room.",
        size: "large",
      },
      {
        id: "5",
        name: "Leather Wallet",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "accessories",
        description: "Genuine leather wallet with multiple card slots.",
        size: "small",
      },
      {
        id: "6",
        name: "Travel Bag Jeans",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "accessories",
        description: "Durable travel bag made from recycled jeans material.",
        size: "large",
      },
      {
        id: "7",
        name: "Just a Item",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "home",
        description: "A versatile item for your home.",
        size: "medium",
      },
      {
        id: "8",
        name: "GoPro Camera 4K",
        price: 32.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "electronics",
        description: "High-quality 4K action camera for your adventures.",
        size: "small",
      },
      {
        id: "9",
        name: "Headset Xiaomi",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "electronics",
        description: "Wireless headset with noise cancellation.",
        size: "medium",
      },
      {
        id: "10",
        name: "WinterJacket",
        price: 375.0,
        imageUrl: "/placeholder.svg?height=200&width=200",
        category: "clothing",
        description: "Warm winter jacket with water-resistant outer layer.",
        size: "large",
      },
    ]

    setProducts(mockProducts)
  }, [])

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = category === "all" || product.category === category
    return matchesSearch && matchesCategory
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") return -1 // Mock sorting by newest
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "name-asc") return a.name.localeCompare(b.name)
    if (sortBy === "name-desc") return b.name.localeCompare(a.name)
    return 0
  })

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

  const handleAddProduct = (newProduct) => {
    // In a real app, you'd fetch products from Firebase again
    // For now, we'll just add the mock product to the list
    const mockNewProduct = {
      id: `${products.length + 1}`,
      name: newProduct.name,
      price: newProduct.price,
      imageUrl: newProduct.imageUrl || "/placeholder.svg?height=200&width=200",
      category: newProduct.category,
      description: newProduct.description,
      size: newProduct.size,
    }

    setProducts([mockNewProduct, ...products])
  }

  const handleEditProduct = (id, updatedProduct) => {
    // In a real app, you'd fetch products from Firebase again
    // For now, we'll just update the product in the list
    setProducts(products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)))
  }

  const handleDeleteProduct = (id) => {
    // In a real app, you'd delete from Firebase
    setProducts(products.filter((product) => product.id !== id))
  }

  const openEditModal = (product) => {
    setSelectedProduct(product)
    setIsEditProductOpen(true)
  }

  const openDeleteModal = (product) => {
    setSelectedProduct(product)
    setIsDeleteProductOpen(true)
  }

  const applyFilters = () => {
    setIsFilterOpen(false)
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Products grid</h1>
        {/* <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex items-center gap-2 hidden md:flex">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button
            onClick={() => setIsAddProductOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-auto justify-center"
          >
            <Plus className="h-4 w-4" />
            <span className="sm:inline">Create new</span>
          </Button>
        </div> */}
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {/* <SelectItem value="clothing">Clothing</SelectItem> */}
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              {/* <SelectItem value="home">Home</SelectItem> */}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Last added" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Last added</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile Search and Filter */}
      <div className="flex md:hidden gap-2 mb-6">
        <Input
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="px-3">
              <Filter className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Filter and sort your products</SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Category</h3>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {/* <SelectItem value="clothing">Clothing</SelectItem> */}
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    {/* <SelectItem value="home">Home</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Last added</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="border rounded-md overflow-hidden bg-white">
            <div className="h-40 sm:h-48 relative">
              <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => openEditModal(product)}
                >
                  <Pencil className="h-4 w-4" />
                  <span className="hidden sm:inline">Edit</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-red-500 hover:text-red-600"
                  onClick={() => openDeleteModal(product)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - Responsive */}
      {totalPages > 1 && (
        <div className="flex justify-center md:justify-end mt-8 gap-2 flex-wrap">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="h-9 px-3"
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
              className="h-9 w-9 p-0"
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="h-9 px-3"
          >
            Next
          </Button>
        </div>
      )}

      {/* Add Product Form Dialog */}
      <ProductForm open={isAddProductOpen} onOpenChange={setIsAddProductOpen} onProductAdded={handleAddProduct} />

      {/* Edit Product Form Dialog */}
      <EditProductForm
        open={isEditProductOpen}
        onOpenChange={setIsEditProductOpen}
        product={selectedProduct}
        onProductUpdated={handleEditProduct}
      />

      {/* Delete Product Confirmation Dialog */}
      <DeleteProductDialog
        open={isDeleteProductOpen}
        onOpenChange={setIsDeleteProductOpen}
        product={selectedProduct}
        onProductDeleted={handleDeleteProduct}
      />
    </div>
  )
}

