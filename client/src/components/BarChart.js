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


const BarChart = ({data}) => {

  console.log(data)

  const products = () =>{
    const products = []
        for (let item of data) {
             products.push(item.product.name)
        }
        console.log(products)
        return products
  }

  const productsQty = () =>{
    const productsQty = []
        for (let item of data) {
             productsQty.push(item.bags)
        }
        console.log(productsQty)
        return productsQty
  }

  products()

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {

    setChartData({
      labels: products() || [],
      datasets: [
        {
          label: "sales report 2023",
          backgroundColor: "teal",
          borderColor: "",
          borderWidth: 0,
          hoverBackgroundColor: "#408C7D",
          hoverBorderColor: "#408C7D",
          data: productsQty() || [],
        },
      ],
      
    })

    setChartOptions({
      maintainAspectRatio: false,
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
    <div className="flex justify-center shadow-md w-full h-72 rounded-md p-2">
      <Bar
        data={chartData}
        options={chartOptions}
        className="w-auto"
      />
    </div>
  );
};

export default BarChart;
