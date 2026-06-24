import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex min-h-screen w-full overflow-x-hidden bg-gray-50 dark:bg-gray-950 transition-colors">

            <Sidebar
                isOpen={sidebarOpen}
                closeSidebar={() => setSidebarOpen(false)}
            />

            <div className="flex-1 min-w-0">

                <Navbar
                    toggleSidebar={() => setSidebarOpen(prev => !prev)}
                />

                <main className="p-3 sm:p-4 md:p-6">

                    <Breadcrumbs />

                    <div className="w-full overflow-x-auto">
                        <Outlet />
                    </div>

                </main>

            </div>

        </div>
    );
};

export default Layout;