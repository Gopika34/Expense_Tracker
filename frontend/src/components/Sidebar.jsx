// import { NavLink } from "react-router-dom";

// const Sidebar = ({ isOpen, closeSidebar }) => {

//     const linkStyle = ({ isActive }) =>
//         `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//             isActive
//                 ? "bg-indigo-600 text-white"
//                 : "text-gray-300 hover:bg-gray-800 hover:text-white"
//         }`;

//     return (
//         <>
//             {/* dark overlay behind sidebar on mobile, tap to close */}
//             {isOpen && (
//                 <div
//                     onClick={closeSidebar}
//                     className="fixed inset-0 bg-black/50 z-30 md:hidden"
//                 />
//             )}

//             <div className={`
//                 fixed md:static top-0 left-0 z-40
//                 w-56 min-h-screen bg-gray-900 p-5 flex flex-col gap-2
//                 transform transition-transform duration-300
//                 ${isOpen ? "translate-x-0" : "-translate-x-full"}
//                 md:translate-x-0
//             `}>

//                 <NavLink to="/dashboard" className={linkStyle} onClick={closeSidebar}>Dashboard</NavLink>
//                 <NavLink to="/transactions" className={linkStyle} onClick={closeSidebar}>Transactions</NavLink>
//                 <NavLink to="/add-transaction" className={linkStyle} onClick={closeSidebar}>Add Transaction</NavLink>
//                 <NavLink to="/analytics" className={linkStyle} onClick={closeSidebar}>Analytics</NavLink>
//             </div>
//         </>
//     );
// };

// export default Sidebar;
import { NavLink } from "react-router-dom";
import { HiOutlineViewGrid, HiOutlineSwitchVertical, HiOutlinePlusCircle, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Sidebar = ({ isOpen, closeSidebar }) => {

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
            ? "bg-indigo-600 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`;

    return (
        <>
            {isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                />
            )}
            <div className={`fixed md:static top-0 left-0 z-40 w-64 md:w-56 min-h-screen bg-gray-900 p-4 md:p-5 flex flex-col gap-2 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
            `}>
                {/* <h2 className="text-xl font-bold text-white mb-6 px-2"> Tracker</h2> */}

                <NavLink to="/dashboard" className={linkStyle} onClick={closeSidebar}>
                    <HiOutlineViewGrid className="text-lg" /> Dashboard
                </NavLink>
                <NavLink to="/transactions" className={linkStyle} onClick={closeSidebar}>
                    <HiOutlineSwitchVertical className="text-lg" /> Transactions
                </NavLink>
                <NavLink to="/add-transaction" className={linkStyle} onClick={closeSidebar}>
                    <HiOutlinePlusCircle className="text-lg" /> Add Transaction
                </NavLink>
                <NavLink to="/analytics" className={linkStyle} onClick={closeSidebar}>
                    <HiOutlineChartBar className="text-lg" /> Analytics
                </NavLink>
                <NavLink to="/profile" className={linkStyle} onClick={closeSidebar}>
                    <HiOutlineUser className="text-lg" /> Profile
                </NavLink>
            </div>
        </>
    );
};

export default Sidebar;