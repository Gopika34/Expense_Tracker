import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
    return (
        <li className="flex items-center justify-between py-3">
            <div>
                <p className="font-medium text-gray-800">{expense.title}</p>
                <p className="text-sm text-gray-400">{expense.category}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-700">₹{expense.amount}</p>
                <button onClick={() => handleEdit(expense._id)} className="text-indigo-500 hover:text-indigo-700 text-lg">
                    <CiEdit />
                </button>
                <button onClick={() => handleDelete(expense._id)} className="text-red-500 hover:text-red-700 text-lg">
                    <AiTwotoneDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem