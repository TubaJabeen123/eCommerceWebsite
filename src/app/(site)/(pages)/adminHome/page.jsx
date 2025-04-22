import Admin from "@/components/Admin"
import AdminDashboard from "@/components/Admin/admin-dashboard";

import React from "react";
// import { Metadata } from "next";

export const metadata = {
    title: "Admin Dashboard | Byte and Board Solutions",
    description: "This is My Account page for Admin",
    // other metadata
};

const AdminPage= ()=>{
    return (
    <main>
        <Admin/>
        <AdminDashboard/>

    </main>
    );
}

export default AdminPage;

