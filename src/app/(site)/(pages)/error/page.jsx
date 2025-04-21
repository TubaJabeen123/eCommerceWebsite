import React from "react";
import Error from "@/components/Error";
// import { Metadata } from "next";

export const metadata = {
    title: "Error Page | Byte and Board Solutions",
    description: "This is Error Page for Byte and Board Solutions",
    // other metadata
};

const ErrorPage = () => {
    return (
        <main>
            <Error />
        </main>
    );
};

export default ErrorPage;