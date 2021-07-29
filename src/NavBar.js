import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
        <div className="nav-bar">
        <NavLink to="/"><button className="navButton">Home</button></NavLink>
        <NavLink to="/addTransaction"><button className="navButton">Add New Transaction</button></NavLink>
        <NavLink to="/transactionTracker"><button className="navButton">Track Your Transactions</button></NavLink>
        <NavLink to="/circleChartWithLegendKit"><button className="navButton">See Your Spending Habits</button></NavLink>
        {/* <NavLink to="/signup"><button className="navButton">SignUp</button></NavLink> */}
        </div>
  )
}

export default NavBar
