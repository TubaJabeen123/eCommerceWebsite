"use client"
import { useState } from "react"
import Image from "next/image";
import AdminSidebar from "./AdminSidebar"
import AHeader from "./Header"


const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const profile = {
    name: 'Admin User',
    email: 'admin@ecommerce.com',
    phone: '+1 234 567 890',
    imageUrl: '/images/users/user-01.jpg', // Replace with a real or placeholder image path
    role: 'Super Administrator',
    joinedDate: '2025-04-15',
  };
  return (
           <div className="space-y-6">
              <h1 className="text-2xl font-semibold text-gray-7 mb-6">Admin Profile</h1>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* Profile Picture */}
                  <div className="flex flex-col items-center md:items-start">
                      <Image
                          src={profile.imageUrl}
                          alt={profile.name}
                          width={128}
                          height={128}
                          className="rounded-full mb-4 border-4 border-gray-4"
                      />
                                         <div className="flex text-sm text-gray">
                                  <label htmlFor="Profile-pic" className="relative cursor-pointer bg-white rounded-md font-medium text-blue hover:text-blue-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue">
                                      <span>Change Profile</span>
                                      <input id="Profile-pic" name="file-upload" type="file" className="sr-only" />
                                  </label>
                              </div>
                  </div>
  
                  {/* Profile Details */}
                  <div className="md:col-span-2 space-y-4">
                      <h2 className="text-2xl font-bold text-dark">{profile.name}</h2>
                      <p className="text-sm font-medium text-indigo bg-indigo px-2 py-0.5 rounded-full inline-block">{profile.role}</p>
  
                       <div className="border-t pt-4 mt-4 space-y-2">
                           <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                              </svg>
                              <span className="text-gray-7">{profile.email}</span>
                          </div>
                           <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.87 2.25H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                              </svg>
                              <span className="text-gray-7">{profile.phone}</span>
                          </div>
                           <div className="flex items-center gap-3">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-7">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008Zm0 2.25h.008v.008H9.75v-.008Zm2.25-4.5h.008v.008H12v-.008Zm0 2.25h.008v.008H12v-.008Zm0 2.25h.008v.008H12v-.008Zm2.25-4.5h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25v-.008Z" />
                              </svg>
                              <span className="text-gray-7">Joined: {profile.joinedDate}</span>
                          </div>
                      </div>
  
                       <div className="mt-6 flex gap-3">
                          <button className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-dark">
                              Edit Profile
                          </button>
                           <button className="px-4 py-2 bg-gray-3 text-dark rounded-md hover:bg-gray-5 hover:text-white">
                              Change Password
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      );
  };
  export default ProfilePage;