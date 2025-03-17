import React from "react";
import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata = {
    title: "Signin Page | NextCommerce Nextjs E-commerce template",
    description: "This is Signin Page for NextCommerce Template",
    // other metadata
};

const SigninPage = () => {
    return (
        <main>
            <Signin />
        </main>
    );
};

export default SigninPage;