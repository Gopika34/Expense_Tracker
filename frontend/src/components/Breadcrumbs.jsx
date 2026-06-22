import { Link, useLocation } from "react-router-dom";

const LABELS = {
    dashboard: "Dashboard",
    transactions: "Transactions",
    "add-transaction": "Add Transaction",
    analytics: "Analytics",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const segments = location.pathname.split("/").filter(Boolean); // e.g. ["transactions"]

    if (segments.length === 0) return null;

    return (
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link to="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            {segments.map((seg, i) => {
                const path = "/" + segments.slice(0, i + 1).join("/");
                const isLast = i === segments.length - 1;
                const label = LABELS[seg] || seg;

                return (
                    <span key={path}>
                        <span className="mx-2">/</span>
                        {isLast
                            ? <span className="text-gray-800 dark:text-gray-100 font-medium">{label}</span>
                            : <Link to={path} className="hover:text-indigo-600 dark:hover:text-indigo-400">{label}</Link>
                        }
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;