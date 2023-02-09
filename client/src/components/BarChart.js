import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend

} from 'chart.js'

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BarChart = () => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "sales report 2023",
          backgroundColor: "#357266",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 0,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [10, 59, 80, 81, 56, 55, 20],
        },
      ],
    })

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'sales 2023'
        }
      }
    })
  }, [])


  return (
    <div className="flex flex-col p-5 ">
      <Bar
        data={chartData}
        width={100}
        height={100}
        options={chartOptions}
      />
    </div>
  );
};

export default BarChart;
