import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const PieChartComponent = ({ expenses }) => {

    const categoryTotals = {};

    expenses.forEach((expense) => {

        if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] += expense.amount;
        }
        else {
            categoryTotals[expense.category] = expense.amount;
        }

    });

    const chartData = Object.entries(categoryTotals).map(
        ([category, amount]) => ({
            name: category,
            value: amount
        })
    );

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AA336A"
    ];

    return (
        <PieChart width={400} height={300}>

            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
            >
                {
                    chartData.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))
                }

            </Pie>

            <Tooltip />

            <Legend />

        </PieChart>
    );
};

export default PieChartComponent;