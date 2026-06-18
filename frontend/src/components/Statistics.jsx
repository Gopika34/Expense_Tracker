import DashboardCard from "./DashboardCard"

const Statistics = ({ totalExpenses, totalTransaction, highestExpense, lowestExpense, avgExpense }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <DashboardCard title="Total Expenses" value={`₹${totalExpenses}`} />
            <DashboardCard title="Total Transactions" value={totalTransaction} />
            <DashboardCard title="Highest Expense" value={`₹${highestExpense}`} />
            <DashboardCard title="Lowest Expense" value={`₹${lowestExpense}`} />
            <DashboardCard title="Average Expense" value={`₹${avgExpense.toFixed(2)}`} />
        </div>
    )
}

export default Statistics;