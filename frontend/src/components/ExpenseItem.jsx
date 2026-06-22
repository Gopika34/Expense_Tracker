import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
    return (
        <li className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
            <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">{expense.title}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{expense.category}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-700 dark:text-gray-200">₹{expense.amount}</p>
                <button onClick={() => handleEdit(expense._id)} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-lg">
                    <CiEdit />
                </button>
                <button onClick={() => handleDelete(expense._id)} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-lg">
                    <AiTwotoneDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem