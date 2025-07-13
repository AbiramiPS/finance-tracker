"use Client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets : [{
            label : 'Banks',
            data : [200, 300, 125],
            backgroundColor : ['#9747b6', '#7878a3','#3584b7']
        }],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <Doughnut data={data} 
    options={{
        cutout: '70%', 
        plugins:{
            legend:{
                display: false
            }
        }
    }}
    />
  )
  
}

export default DoughnutChart
