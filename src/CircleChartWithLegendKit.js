import React from "react"
import { Doughnut } from "react-chartjs-2"

const CircleChartWithLegendKit = ({ transactions }) => {
  const totals = {
    Groceries: 0,
    Restaurant: 0,
    Housing: 0,
    Miscellaneous: 0,
    Car: 0,
    Utilities: 0,
    Entertainment: 0
  }

  transactions.forEach(transaction => {
    totals[transaction.category] += transaction.amount
  })

  const dataSet = {
    labels: Object.keys(totals),
    datasets: [
      {
        backgroundColor: [
          "#F66D44",
          "#FEAE65",
          "#E6F69D",
          "#AADEA7",
          "#64C2A6",
          "#03fcd7",
          "#0384fc"
        ],
        data: Object.values(totals)
      }
    ]
  }

  return (
      <div>
         <h2>Your Monthly Totals:</h2>
        <Doughnut
          data={dataSet}
          options={{
            radius: 250
          }
        }
        />
      </div>
  )
}

export default CircleChartWithLegendKit
