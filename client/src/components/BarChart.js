import React, { useEffect, useState } from "react";
import {useDataContext} from '../hooks/useDataContext'
import { useAuthContext } from "../hooks/useAuthContext";
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


const BarChart = ({data,label}) => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {

    setChartData({
      labels: label,
      datasets: [
        {
          label: "sales report 2023",
          backgroundColor: "#357266",
          borderColor: "",
          borderWidth: 0,
          hoverBackgroundColor: "#408C7D",
          hoverBorderColor: "#408C7D",
          data: data,
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
  }, [dispatch])


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
