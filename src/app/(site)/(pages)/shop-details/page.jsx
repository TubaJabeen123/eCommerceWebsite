import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata = {
    title: "Shop Details Page | Byte and Board Solutions",
    description: "This is Shop Details Page for Byte and Board Solutions",
    // other metadata
};

const ShopDetailsPage = () => {
    return (
        <main>
            <ShopDetails />
        </main>
    );
};

export default ShopDetailsPage;