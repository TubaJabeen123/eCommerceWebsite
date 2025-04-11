import React from "react";
import BlogGridWithSidebar from "@/components/BlogGridWithSidebar";
import { Metadata } from "next";

export const metadata = {
    title: "Blog Grid Page | Byte and Board Solutions",
    description: "This is Blog Grid Page for Byte and Board Solutions",
    // other metadata
};

const BlogGridWithSidebarPage = () => {
    return (
        <>
            <BlogGridWithSidebar />
        </>
    );
};

export default BlogGridWithSidebarPage;