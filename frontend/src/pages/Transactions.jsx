import { useExpense } from "../context/ExpenseContext";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ExpenseItem from "../components/ExpenseItem";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
const Transactions = () => {
    const {
        filteredExpenses, isLoading, search, setSearch,
        selectedCategory, setSelectedCategory, sortBy, setSortBy,
        handleDelete, handleEdit
    } = useExpense();

    const navigate = useNavigate();

    if (isLoading) {
        return <div className="flex justify-center mt-10"><ThreeDot color="crimson" size="small" /></div>
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Transactions</h2>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center transition-colors">
                <SearchBar search={search} setSearch={setSearch} />
                <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 transition-colors">
                {filteredExpenses.length === 0
                    ? <p className="text-gray-400 dark:text-gray-500">No expenses found</p>
                    : <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                        {filteredExpenses.map(exp => (
                            <ExpenseItem
                                key={exp._id}
                                expense={exp}
                                handleDelete={handleDelete}
                                handleEdit={(id) => { handleEdit(id); navigate("/add-transaction"); }}
                            />
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Transactions