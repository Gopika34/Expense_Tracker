const RecentTransactions = ({ expense }) => {
    return (
        <li className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
            <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">{expense.title}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{expense.category}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-700 dark:text-gray-200">₹{expense.amount}</p>
            </div>
        </li>
    )
}

export default RecentTransactions