import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata = {
    title: "Wishlist Page | Byte and Board Solutions",
    description: "This is Wishlist Page for Byte and Board Solutions",
    // other metadata
};

const WishlistPage = () => {
    return (
        <main>
            <Wishlist />
        </main>
    );
};

export default WishlistPage;
