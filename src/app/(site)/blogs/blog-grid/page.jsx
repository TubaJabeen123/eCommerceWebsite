import React from "react";
import BlogGrid from "@/components/BlogGrid";
import { Metadata } from "next";

export const metadata = {
    title: "Blog Grid Page | Byte and Board Solutions",
    description: "This is Blog Grid Page for Byte and Board Solutions",
    // other metadata
};

const BlogGridPage = () => {
    return (
        <main>
            <BlogGrid />
        </main>
    );
};

export default BlogGridPage;