import React from "react"
import { CircleChart } from "playbook-ui"

const dataWithLegend = [{
  name: 'Bugs',
  value: 8,

},
{
  name: 'Chores',
  value: 1,

},
{
  name: 'Stories',
  value: 12,
},
]

const CircleChartOfTransactions = ({ props }) => (
  <div>
    <CircleChart
        chartData={dataWithLegend}
        id="with-legend-example"
        legend
        {...props.category}
    />
  </div>
)

export default CircleChartOfTransactions