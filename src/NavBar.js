import React from "react"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addTransaction">Add New Transaction</NavLink>
        <NavLink to="/transactionTracker">Track your Transactions</NavLink>
        <NavLink to="/circleChartOfTransactions">See your Habits</NavLink>
        </div>
    )
}

export default NavBar