import React from "react";
import Cart from "@/components/Cart";
import { Metadata } from "next";

export const metadata = {
    title: "Cart Page | NextCommerce Nextjs E-commerce",
    description: "This is Cart Page for NextCommerce",
    // other metadata
};

const CartPage = () => {
    return (
        <>
            <Cart />
        </>
    );
};

export default CartPage;