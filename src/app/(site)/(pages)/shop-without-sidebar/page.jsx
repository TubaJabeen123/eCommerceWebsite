import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { Metadata } from "next";

export const metadata = {
    title: "Shop Page | Byte and Board Solutions",
    description: "This is Shop Page for Byte and Board Solutions",
    // other metadata
};

const ShopWithoutSidebarPage = () => {
    return (
        <main>
            <ShopWithoutSidebar />
        </main>
    );
};

export default ShopWithoutSidebarPage;