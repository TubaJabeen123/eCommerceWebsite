import React from "react";
import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";

export const metadata = {
    title: "Blog Details Page | Byte and Board Solutions",
    description: "This is Blog Details Page for Byte and Board Solutions",
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