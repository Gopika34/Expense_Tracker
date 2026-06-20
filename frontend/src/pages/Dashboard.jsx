import { useExpense } from "../context/ExpenseContext";
import { useAuth } from "../context/AuthContext";
import Statistics from "../components/Statistics";
import { ThreeDot } from "react-loading-indicators";
import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";
import ExpenseItem from "../components/ExpenseItem";
import RecentTransactions from "../components/RecentTransactions";
const Dashboard = () => {
    const {
        expenses, isLoading, totalExpenses, totalTransactions,
        highestExpense, lowestExpense, avgExpense, recentExpenses,
        handleDelete, handleEdit
    } = useExpense();

    const { user } = useAuth();

    if (isLoading) {
        return <div className="flex justify-center mt-10"><ThreeDot color="crimson" size="small" /></div>
    }

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-500">Welcome back, {user?.userName}</p>

            <Statistics
                totalExpenses={totalExpenses}
                totalTransaction={totalTransactions}
                highestExpense={highestExpense}
                lowestExpense={lowestExpense}
                avgExpense={avgExpense}
            />

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Spending by Category</h3>
                    <PieChartComponent expenses={expenses} />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Spending</h3>
                    <BarChartComponent expenses={expenses} />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
                {recentExpenses.length === 0
                    ? <p className="text-gray-400">No expenses yet</p>
                    : <ul className="divide-y divide-gray-100">
                        {recentExpenses.map(exp => (
                            <RecentTransactions expense={exp}/>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Dashboard