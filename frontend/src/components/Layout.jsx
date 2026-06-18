import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

            <div className="flex-1 w-full">
                <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
                <main className="p-4 md:p-6">
                    <Breadcrumbs />
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;