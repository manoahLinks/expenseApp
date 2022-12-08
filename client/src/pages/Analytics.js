import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'
import React, {useState, useEffect} from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Analytics = () => {

    const [chartData, setChartData] = useState({dataSets: []})

    const [chartOptions, setChartOptions] = useState({})

    useEffect(()=>{
        setChartData({
            labels: ["Maintenance", "Bulk Purchase", "Petty Purchase"],
            dataSets: [{
                label: "Chart showing expenditure based on category",
                data: [200, 600, 900],
                borderColor: "rgb(120, 56, 56)",
                backgroundColor: "rgb(50, 230,)"
            }]
        })
    }, [])

    setChartOptions({
        responsive: true,
        plugins:{
            legend:{
                position: "top"
            },
            title:{
                display: true,
                text: "expense categorized based on category"
            }
        }
    })

    return ( 
        <div className="grid grid-cols-1">
            <Bar option={chartOptions} data={chartData}/>
        </div>
     );
}
 
export default Analytics;