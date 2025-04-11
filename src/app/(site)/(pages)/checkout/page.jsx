import React from "react";
import Checkout from "@/components/Checkout";
// import { Metadata } from "next";

export const metadata = {
    title: "Checkout Page | Byte and Board Solutions",
    description: "This is Checkout Page for Byte and Board Solutions",
    // other metadata
};

const CheckoutPage = () => {
    return (
        <main>
            <Checkout />
        </main>
    );
};

export default CheckoutPage;