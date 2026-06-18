const DashboardCard = ({ title, value }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        </div>
    )
}

export default DashboardCard