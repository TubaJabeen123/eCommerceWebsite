import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata = {
    title: "Contact Page | Byte and Board Solutions",
    description: "This is Contact Page for Byte and Board Solutions",
    // other metadata
};

const ContactPage = () => {
    return (
        <main>
            <Contact />
        </main>
    );
};

export default ContactPage;