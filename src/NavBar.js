import React from "react"
import { NavLink } from "react-router-dom"

// import { Nav } from "playbook-ui"

const NavBar = () => {
    return (
        <div className="nav-bar">
        <NavLink to="/"><button className="button">Home</button></NavLink>
        <NavLink to="/addTransaction"><button className="button">Add New Transaction</button></NavLink>
        <NavLink to="/transactionTracker"><button className="button">Track your Transactions</button></NavLink>
        <NavLink to="/circleChartWithLegendKit"><button className="button">See your Habits</button></NavLink>
        </div>
    )
}

export default NavBar