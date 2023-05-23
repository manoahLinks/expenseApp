import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PieController,
  Title,
  Tooltip,
  Legend

} from 'chart.js'

import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PieController,
  Title,
  Tooltip,
  Legend
)

const PieChart = ({ data }) => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {
    setChartData({
      labels: ['family', 'slice', 'jumbo', 'choco', 'mini'],
      datasets: [
        {
          label: "sales report 2023",
          backgroundColor: ['#357266', '#A3BBAD', '#D0DCD5', '#D0DCD4', '#D0DCD6', '#A3BBAD', '#A3BBAD'],
          borderWidth: [0,0,0,0,0,0],
          data: [50, 60, 30, 50, 70],
        },
      ],
    })

    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: 'sales 2023'
        }
      }
    })
  }, [])


  return (
    <div className="flex p-2 h-72 rounded shadow">
      <Pie
        data={chartData}
        width={50}
        height={50}
        options={chartOptions}
      />
    </div>
  );
};

export default PieChart;
