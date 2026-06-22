import { useExpense } from "../context/ExpenseContext";
import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";
import { ThreeDot } from "react-loading-indicators";

const Analytics = () => {
    const { expenses, isLoading } = useExpense();

    if (isLoading) {
        return <div className="flex justify-center mt-10"><ThreeDot color="crimson" size="small" /></div>
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Analytics</h2>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 transition-colors">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Spending by Category</h3>
                <PieChartComponent expenses={expenses} />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 transition-colors">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Monthly Spending</h3>
                <BarChartComponent expenses={expenses} />
            </div>
        </div>
    )
}

export default Analytics