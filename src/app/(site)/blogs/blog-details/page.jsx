import React from "react";
import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";

export const metadata = {
    title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
    description: "This is Blog Details Page for NextCommerce Template",
    // other metadata
};

const BlogDetailsPage = () => {
    return (
        <main>
            <BlogDetails />
        </main>
    );
};

export default BlogDetailsPage;