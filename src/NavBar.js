import React from "react"
import { NavLink } from "react-router-dom"
// import { Nav } from "playbook-ui"

const NavBar = () => {
    return (
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addTransaction">Add New Transaction</NavLink>
        <NavLink to="/transactionTracker">Track your Transactions</NavLink>
        <NavLink to="/barGraphOfTransactions">See your Habits</NavLink>
        </div>
    )
}

export default NavBar