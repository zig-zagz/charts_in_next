'use client'
import {
  Chart as ChartJS, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend
} from "chart.js";

ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

import { Bar, Line, Scatter, Bubble, } from "react-chartjs-2";

export default function LineChart(props) {

  const data= {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [0.1, 0.4, 0.3, 0.4, 0.5, 0.6, 0.5],
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elelments: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68,0.3)",

      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
      scales: {
        xAxis: {
          display: false,
        },
        yAxis: {
          display: false,
      }
      }
    }
  }
  return(
    <div className="h-screen w-full">
      <section className=" h-1/2 p-20"> 
        <Line data={data} width={600} height={100} options={options} />
      </section>
    </div>
  )
}