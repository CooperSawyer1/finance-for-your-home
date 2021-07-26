import React from "react"
import { BarGraph } from "playbook-ui"

const chartData = [{
  name: "Groceries",
  data: [1475, 200, 3000, 654, 656],
}, {
  name: "Restaurant",
  data: [4434, 524, 2320, 440, 500],
}, {
  name: "Car",
  data: [3387, 743, 1344, 434, 440],
}, {
  name: "Income",
  data: [3227, 878, 999, 780, 1000],
}, {
  name: "Housing",
  data: [123, 123, 324, 2312.31, 231.33]
}, {
  name: "Miscellaneous",
  data: [164.34, 12.233, 7654.00, 123.1, 324.33]
}
]
const BarGraphOfTransactions = (props) => (
  
  <div>
    <BarGraph
        axisTitle="Amount Spent"
        chartData={chartData}
        id="bar-test-2"
        legend
        title="Bar Graph with Legend"
        xAxisCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
        yAxisMin={0}
        {...props}
    />
  </div>
)

export default BarGraphOfTransactions