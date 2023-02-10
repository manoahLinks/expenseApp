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
          borderColor: "",
          borderWidth: 0,
          hoverBackgroundColor: "#408C7D",
          hoverBorderColor: "#408C7D",
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
        },
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false,
          }
        },
        y: {
          border: {
            display: false
          },
          grid: {
            display: false,
          }
      }}
    })
  }, [])


  return (
    <div className="flex p-5 rounded-md bg-primary bg-opacity-10">
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
