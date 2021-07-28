import React from 'react';
import { Pie } from 'react-chartjs-2';


  const CircleChartWithLegendKit = ({ transactions }) => {

    const totals = {
      "Groceries": 0,
      "Restaurant": 0,
      "Housing": 0,
      "Miscellaneous": 0,
      "Car": 0,
      "Income": 0
    }

    transactions.forEach(transaction => {
      totals[transaction.category] += transaction.amount
    })

    const dataSet = {
      labels: Object.keys(totals),
      datasets: [
        { 
          backgroundColor: [
            "#B21F00",
            "#C9DE00",
            "#2FDE00",
            "#00A6B4",
            "#6800B4",
            "#4134"
        ],
          data: Object.values(totals)
        }
      ]
    }
    
    return (
      <div className="pie-chart">
        <Pie
          data={dataSet}
          height={500}
          width={500}
          options={{
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }

export default CircleChartWithLegendKit 