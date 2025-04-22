"use client"
import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import AHeader from "./Header"

const ReviewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      product: "iPhone 14 Plus , 6/128GB",
      productImage: "/images/products/product-2-sm-1.png",
      customer: "Alice Martin",
      rating: 5,
      date: "2023-04-15",
      comment: "Absolutely love the iPhone 14 Plus! Super fast, great battery life, and stunning camera quality.",
      status: "Published"
    },
    {
      id: 2,
      product: "Apple iMac M1 24-inch 2021",
      productImage: "/images/products/product-3-sm-1.png",
      customer: "James Carter",
      rating: 4,
      date: "2023-04-14",
      comment: "The M1 iMac is smooth and fast for everyday tasks and design work. Could use more ports though.",
      status: "Published"
    },
    {
      id: 3,
      product: "MacBook Air M1 chip, 8/256GB",
      productImage: "/images/products/product-4-sm-1.png",
      customer: "Sophia Walker",
      rating: 5,
      date: "2023-04-13",
      comment: "Perfect for students and professionals! Lightweight, silent, and insanely powerful with the M1 chip.",
      status: "Published"
    },
    {
      id: 4,
      product: "Apple Watch Ultra",
      productImage: "/images/products/product-5-sm-1.png",
      customer: "Ethan Brooks",
      rating: 4,
      date: "2023-04-12",
      comment: "Great features for fitness tracking and durability. Battery could last a bit longer, though.",
      status: "Published"
    },
    {
      id: 5,
      product: "Logitech MX Master 3 Mouse",
      productImage: "/images/products/product-6-sm-1.png",
      customer: "Laura Bennett",
      rating: 5,
      date: "2023-04-11",
      comment: "Best productivity mouse ever. Super ergonomic and the scrolling is buttery smooth!",
      status: "Published"
    },
    {
      id: 6,
      product: "Asus RT Dual Band Router",
      productImage: "/images/products/product-8-sm-1.png",
      customer: "Chris Evans",
      rating: 4,
      date: "2023-04-10",
      comment: "Stable connection and wide coverage. Setup was easy and performance is solid.",
      status: "Published"
    }
  ];
  

  // Filter reviews based on search query and rating filter
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesRating = ratingFilter === "All" || review.rating === Number.parseInt(ratingFilter)
    
    return matchesSearch && matchesRating
  })

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-semibold text-gray-7 mb-6">Product Reviews</h1>
       <div className="bg-white rounded-lg shadow overflow-hidden">
            <ul className="divide-y divide-gray-6">
               {reviews.map(review => (
                   <li key={review.id} className="p-4 hover:bg-gray">
                       <div className="flex justify-between items-start mb-2">
                           <div>
                               <p className="text-sm font-semibold text-dark">{review.customer}</p>
                               <p className="text-xs text-dark">Reviewed: <span className="font-medium text-blue">{review.product}</span> on {review.date}</p>
                           </div>
                           <div className="flex items-center">
                               {[...Array(5)].map((_, i) => (
                                   <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow' : 'text-gray-4'}`} fill="currentColor" viewBox="0 0 20 20">
                                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.97z" />
                                   </svg>
                               ))}
                               <span className="text-xs text-gray-5 ml-1">({review.rating}/5)</span>
                           </div>
                       </div>
                        <p className="text-sm text-gray-6 mb-3">{review.comment}</p>
                        <div className="flex gap-2">
                            <button className="text-xs px-2 py-1 rounded bg-green text-white hover:bg-green">Approve</button>
                            <button className="text-xs px-2 py-1 rounded bg-red text-white hover:bg-red">Delete</button>
                        </div>
                   </li>
               ))}
            </ul>
       </div>
      
   </div>
);}

export default ReviewsPage;