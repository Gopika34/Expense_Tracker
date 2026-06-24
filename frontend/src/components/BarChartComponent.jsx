import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
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
            }
        );

        monthTotals[month] = 
            (monthTotals[month] || 0) + expense.amount;

    });

    const chartData = Object.entries(monthTotals).map(
        ([month, amount]) => ({
            month,
            amount
        })
    );

    return (

        <div className="w-full h-[280px] sm:h-[350px]">

            <ResponsiveContainer 
                width="100%" 
                height="100%"
            >

                <BarChart data={chartData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis 
                        dataKey="month"
                        tick={{fontSize:12}}
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="amount"
                        radius={[6,6,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default BarChartComponent;