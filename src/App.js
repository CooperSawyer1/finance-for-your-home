import "./App.css"
import Home from "./Home"
import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import AddTransaction from "./AddTransaction"
import TransactionTracker from "./TransactionTracker"
import CircleChartWithLegendKit from "./CircleChartWithLegendKit"

const transactionURL = `${process.env.REACT_APP_API_URL}/transactions`

function App () {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch(transactionURL)
      .then(response => response.json())
      .then(data => setTransactions(data))
  }, [])

  const handleSubmit = (newTransaction) => {
    fetch(transactionURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: newTransaction.date,
        description: newTransaction.description,
        amount: newTransaction.amount,
        category: newTransaction.category,
        categoryId: newTransaction.categoryId
      })
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]))
  }

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id)
    setTransactions(updatedTransactions)
  }

  return <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home
      transactions={transactions}
      handleDelete={handleDelete}
      />
      </Route>
      <Route exact path="/addtransaction">
        <AddTransaction
       handleSubmit={handleSubmit}
      />
       </Route>
      <Route exact path="/transactionTracker">
        <TransactionTracker
          transactions={transactions}
          handleDelete={handleDelete}
      />
       </Route>
      <Route path ="/circleChartWithLegendKit">
        <CircleChartWithLegendKit
        transactions={transactions}
        />
      </Route>
    </Switch>
  </div>
}

export default App
