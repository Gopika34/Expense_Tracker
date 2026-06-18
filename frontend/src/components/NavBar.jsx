import { useAuth } from "../context/AuthContext.jsx";
import { notifyInfo } from '../utils/toastMessages.js';
import { HiMenu } from "react-icons/hi";

const NavBar = ({ toggleSidebar }) => {

    const { logout, user } = useAuth();

    const handleLogOut = () => {
        logout();
        notifyInfo("Logged out successfully");
    }

    return (
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow-sm">

            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="md:hidden text-gray-700 text-2xl">
                    <HiMenu />
                </button>
                <h1 className="text-base md:text-lg font-semibold text-gray-800">
                    Welcome, <span className="text-indigo-600">{user?.userName}</span>
                </h1>
            </div>

            <button
                onClick={handleLogOut}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 md:px-4 py-2 rounded-lg transition-colors"
            >
                Logout
            </button>

        </div>
    )
}

export default NavBar