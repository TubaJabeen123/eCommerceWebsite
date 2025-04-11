import React from "react";
import Cart from "@/components/Cart";
import { Metadata } from "next";

export const metadata = {
    title: "Cart Page | Byte and Board Solutions",
    description: "This is Cart Page for Byte and Board Solutions",
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