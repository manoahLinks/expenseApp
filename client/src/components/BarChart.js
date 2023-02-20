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
      labels: ['1st', '2nd', '3rd', '4th'],
      datasets: [
        {
          label: "sales report 2023",
          backgroundColor: "#357266",
          borderColor: "",
          borderWidth: 0,
          hoverBackgroundColor: "#408C7D",
          hoverBorderColor: "#408C7D",
          data: [1, 2, 50, 56],
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
    <div className="flex justify-center shadow-md rounded-md p-2">
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
