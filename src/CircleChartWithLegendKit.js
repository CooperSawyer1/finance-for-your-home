import React from 'react';
import { Pie } from 'react-chartjs-2';


  const CircleChartWithLegendKit = ({ transactions }) => {
    
    // const groceries = transactions.forEach(element => {
    //   if (element.category === "groceries")
    //   return (
    //     transactions.amount
    //     )  
    // })
       
  
        
        
    const dataSet = {
      labels: ["Groceries", "Car", "Insurance",
               "Miscellaneous", "Restaurant", "Housing"],
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
          data: [12, 12, 23, 21, 32, 43],
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