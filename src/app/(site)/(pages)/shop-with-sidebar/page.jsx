import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { Metadata } from "next";

export const metadata = {
    title: "Shop Page | Byte and Board Solutions",
    description: "This is Shop Page for Byte and Board Solutions",
    // other metadata
};

const ShopWithSidebarPage = () => {
    return (
        <main>
            <ShopWithSidebar />
        </main>
    );
};

export default ShopWithSidebarPage;