import { useAuth } from "../context/AuthContext.jsx";
import { notifyInfo } from '../utils/toastMessages.js';
import { HiMenu, HiOutlineLogout, HiOutlineUserCircle  } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = ({ toggleSidebar }) => {

    const { logout, user } = useAuth();

    const handleLogOut = () => {
        logout();
        notifyInfo("Logged out successfully");
    }

    return (
        // <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow-sm">

        //     <div className="flex items-center gap-3">
        //         <button onClick={toggleSidebar} className="md:hidden text-gray-700 text-2xl">
        //             <HiMenu />
        //         </button>
        //         <h1 className="text-base md:text-lg font-semibold text-gray-800">
        //             Expense Tracker
        //         </h1>
        //     </div>

        //     <button
        //         onClick={handleLogOut}
        //         className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 md:px-4 py-2 rounded-lg transition-colors"
        //     >
        //         Logout
        //     </button>

        // </div>
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow-sm sticky top-0 z-20">

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-700 text-2xl p-1 rounded hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <HiMenu />
                </button>
                <h1 className="text-base md:text-lg font-semibold text-gray-800">
                    Expense Tracker
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <Link
                    to="/profile"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    <HiOutlineUserCircle className="text-2xl" />
                </Link>
                {/* {user?.userName && (
                    <span className="hidden sm:inline text-sm text-gray-500">
                        Hi, <span className="font-medium text-gray-700">{user.userName}</span>
                    </span>
                )} */}

                <button
                    onClick={handleLogOut}
                    className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 md:px-4 py-2 rounded-lg transition-colors"
                >
                    <HiOutlineLogout className="text-base" />
                    <span className="hidden sm:inline">Logout</span>
                </button>
            </div>
        </div>
    )
}

export default NavBar