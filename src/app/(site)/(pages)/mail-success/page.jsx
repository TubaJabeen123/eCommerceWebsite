import React from "react";
import MailSuccess from "@/components/MailSuccess";
import { Metadata } from "next";

export const metadata = {
    title: "Mail Success Page | Byte and Board Solutions",
    description: "This is Mail Success Page for Byte and Board Solutions",
    // other metadata
};

const MailSuccessPage = () => {
    return (
        <main>
            <MailSuccess />
        </main>
    );
};

export default MailSuccessPage;