import Add from "@/components/Add/page";
import { Metadata } from "next";

export const metadata = {
    title: "Product Add Page | Byte and Board Solutions",
    description: "This is Contact Page for Byte and Board Solutions",
    // other metadata
};

const AddProduct = () => {
    return (
        <main>
            <Add />
        </main>
    );
};

export default AddProduct;