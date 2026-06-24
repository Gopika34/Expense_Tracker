import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const PieChartComponent = ({ expenses }) => {

    const categoryTotals = {};

    expenses.forEach((expense)=>{

        categoryTotals[expense.category] =
        (categoryTotals[expense.category] || 0)
        + expense.amount;

    });


    const chartData = Object.entries(categoryTotals)
    .map(([category,amount])=>({
        name:category,
        value:amount
    }));


    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AA336A"
    ];


    return (

        <div className="w-full h-[280px] sm:h-[350px]">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <PieChart>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        label
                    >

                    {
                        chartData.map((entry,index)=>(

                            <Cell
                                key={index}
                                fill={
                                COLORS[index % COLORS.length]
                                }
                            />

                        ))
                    }

                    </Pie>


                    <Tooltip />

                    <Legend
                        wrapperStyle={{
                            fontSize:"12px"
                        }}
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );
};


export default PieChartComponent;