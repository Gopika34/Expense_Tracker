const DashboardCard = ({ title, value }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 flex flex-col gap-1 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</h2>
        </div>
    )
}

export default DashboardCard