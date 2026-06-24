import { useExpense } from "../context/ExpenseContext";

const CATEGORIES = ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Others"];

const AddTransaction = () => {
    const { title, setTitle, amount, setAmount, category, setCategory, editId, handleForm, resetForm } = useExpense();

    return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 sm:p-6 space-y-5 transition-colors">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{editId ? "Edit Expense" : "Add Expense"}</h2>

            <form onSubmit={handleForm} className="space-y-4">
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>

                <input
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <div className="flex gap-3">
                    <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors">
                        {editId ? "Save Changes" : "Add Expense"}
                    </button>
                    {editId && (
                        <button type="button" onClick={resetForm} className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium py-2 rounded-lg transition-colors">
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default AddTransaction