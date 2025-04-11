import MyAccount from "@/components/MyAccount";
import React from "react";
import { Metadata } from "next";

export const metadata = {
    title: "My Account | Byte and Board Solutions",
    description: "This is My Account page for Byte and Board Solutions",
    // other metadata
};

const MyAccountPage = () => {
    return (
        <main>
            <MyAccount />
        </main>
    );
};

export default MyAccountPage;