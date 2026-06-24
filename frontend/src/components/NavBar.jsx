import { useAuth } from "../context/AuthContext.jsx";
import { notifyInfo } from '../utils/toastMessages.js';
import { HiMenu, HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const NavBar = ({ toggleSidebar }) => {

    const { darkMode, setDarkMode } = useTheme();
    const { logout, user } = useAuth();

    const handleLogOut = () => {
        logout();
        notifyInfo("Logged out successfully");
    }

    return (
        <div className="flex items-center justify-between w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm sticky top-0 z-20 transition-colors">
            <div className="flex items-center gap-3">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-700 text-2xl p-1 rounded hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <HiMenu />
                </button>
                <h1 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Expense Tracker
                </h1>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-2xl"
                >
                    {
                        darkMode
                            ? <HiSun />
                            : <HiMoon />
                    }
                </button>
                <Link
                    to="/profile"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    <HiOutlineUserCircle className="text-2xl" />
                </Link>
                {/* {user?.userName && (
                    // <span className="hidden sm:inline text-sm text-gray-500">
                    //     <span className="font-medium text-gray-700">{user.userName}</span>
                    // </span>
                )} */}
                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-200">{user?.userName}</span>
                <button
                    onClick={handleLogOut}
                    className="flex items-center gap-1 md:flex text-gray-700 dark:text-gray-300 text-xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <HiOutlineLogout />

                    <span className="hidden sm:inline text-sm">
                        Logout
                    </span>

                </button>
            </div>
        </div>
    )
}

export default NavBar