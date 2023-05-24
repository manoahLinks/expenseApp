import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const LineChart = () => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {

    setChartData({
      labels: ['jan', 'feb', 'mar', 'apr', 'may'],
      datasets: [
        {
          label: "Revenue Generated 2023",
          fill: false,
          data: [20, 30, 50, 5, 7],
          borderColor: '#7688A7',
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          tension: 0.1
        },
      ],
      
    })

    setChartOptions({
      maintainAspectRatio: false,
      responsive: true,
      plugins:{
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Total Revenue'
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
    <div className="flex justify-center shadow-md w-full h-72 rounded-lg p-2">
      <Line
        data={chartData}
        options={chartOptions}
        className="w-auto"
      />
    </div>
  );
};
export default LineChart;