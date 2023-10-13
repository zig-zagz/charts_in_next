'use client'
import {
    Chart as ChartJS, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, BarElement, BarController
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, BarElement, BarController);

import { Bar } from "react-chartjs-2";

export default function BarChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Brutto",
                borderRadius: 30,
                data: [0.1, 0.4, 0.3, 0.4, 0.5, 0.6, 0.5],
                backgroundColor: "rgba(47,97,68,1)",
                barThickness: 10,
            },
            {
                label: "Netto",
                borderRadius: 30,
                data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.3],
                backgroundColor: "rgba(47,97,68,0.3)",
                barThickness: 10,

            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                position: "top",
                align: "start",
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    color: "rgba(47,97,68,1)",
                    usePointStyle: true,
                    pointStyle: "circle",
                    font: {
                        size: 14,
                    },
                    padding: 20,
                },
                title: {
                    text: "Legend",
                    display: true,
                    color: "#000",
                    font: {
                        size: 20,
                    },
                }
                }
            },
            scales: {
                xAxis: {
                    display: false,
                },
                yAxis: {
                    max: 1,
            },
        },
        elements: {
            bar: {
                barPercentage: 0.3,
                categoryPercentage: 1,
            },
        },
    };

    return (
        <div className=" w-full">
            <section className=" h-1/2 p-20"> 
                <Bar data={data} width={600} height={100} options={options} />
            </section>
        </div>
    )
}