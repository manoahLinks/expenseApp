import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend

} from 'chart.js'

import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

const PieChart = () => {

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
          backgroundColor: ['#357266', '#A3BBAD', '#D0DCD5', '#D0DCD5', '#D0DCD5', '#A3BBAD', '#A3BBAD'],
          borderWidth: [0,0,0,0,0,0],
          data: [10, 59, 80, 81, 56, 55],
        },
      ],
    })

    setChartOptions({
      responsive: true,
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
    <div className="flex p-5 rounded border">
      <Pie
        data={chartData}
        width={100}
        options={chartOptions}
      />
    </div>
  );
};

export default PieChart;
