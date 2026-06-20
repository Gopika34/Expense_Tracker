import React from 'react'

const RecentTransactions = ({expense}) => {
    return (
        <li className="flex items-center justify-between py-3">
            <div>
                <p className="font-medium text-gray-800">{expense.title}</p>
                <p className="text-sm text-gray-400">{expense.category}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-700">₹{expense.amount}</p>
            </div>
        </li>
    )
}

export default RecentTransactions
