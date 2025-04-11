import React from "react";
import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata = {
    title: "Signin Page | Byte and Board Solutions",
    description: "This is Signin Page for Byte and Board Solutions",
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