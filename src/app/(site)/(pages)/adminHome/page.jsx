import React from "react";
import AdminDashboard from "./adminDashboard/page";

// Inline export of metadata
export const metadata = {
    title: "Admin Home | Byte and Board Solutions",
    description: "This is Admin Home Page for Byte and Board Solutions",
    // other metadata
};

export default function AdminHome() {
    return (
        <AdminDashboard /> 
    );
}
