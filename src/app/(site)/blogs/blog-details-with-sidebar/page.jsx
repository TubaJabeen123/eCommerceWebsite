import React from "react";
import BlogDetailsWithSidebar from "@/components/BlogDetailsWithSidebar";
import { Metadata } from "next";

export const metadata = {
    title: "Blog Details Page | Byte and Board Solutions",
    description: "This is Blog Details Page for Byte and Board Solutions",
    // other metadata
};

const BlogDetailsWithSidebarPage = () => {
    return (
        <main>
            <BlogDetailsWithSidebar />
        </main>
    );
};

export default BlogDetailsWithSidebarPage;