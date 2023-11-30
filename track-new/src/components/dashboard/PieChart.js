
/*doughnutchart*/
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Stock", "Sold"],
    datasets: [
        {
            label: "",
            data: [1500, 3000],
            backgroundColor: [
                "rgba(54,185,204,1)",
                "rgba(28,200,138,1)",
                
            ],
            borderColor: "white",
            borderwidth: 500,
            cutout: "75%"
        }
    ]
};

export function PieChart() {
    return <Doughnut data={data} />;
}


