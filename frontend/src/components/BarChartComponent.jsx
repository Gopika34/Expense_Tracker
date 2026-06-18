import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const BarChartComponent = ({ expenses }) => {

    const monthTotals = {};

    expenses.forEach((expense) => {

        const month = new Date(
            expense.createdAt
        ).toLocaleString(
            "default",
            {
                month: "short",
                year: "numeric"
            });

        if (monthTotals[month]) {
            monthTotals[month] += expense.amount;
        }
        else {
            monthTotals[month] = expense.amount;
        }

    });

    const chartData = Object.entries(monthTotals).map(
        ([month, amount]) => ({
            month,
            amount
        })
    );

    return (
        <BarChart
            width={500}
            height={300}
            data={chartData}
        >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
                dataKey="amount"
            />

        </BarChart>
    );
};

export default BarChartComponent;