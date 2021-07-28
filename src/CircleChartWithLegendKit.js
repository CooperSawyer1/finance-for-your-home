import React from "react"
import { Doughnut } from "react-chartjs-2"

const CircleChartWithLegendKit = ({ transactions }) => {
  const totals = {
    Groceries: 0,
    Restaurant: 0,
    Housing: 0,
    Miscellaneous: 0,
    Car: 0,
    Income: 0
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
          "#2D87BB"
        ],
        data: Object.values(totals)
      }
    ]
  }

  return (
      <div>
        <Doughnut
          data={dataSet}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
  )
}

export default CircleChartWithLegendKit
