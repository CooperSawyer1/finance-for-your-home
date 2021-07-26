import './App.css';
import Home from "./Home"
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import AddTransaction from "./AddTransaction"
import TransactionTracker from "./TransactionTracker"
import CircleChartOfTransactions from "./CircleChartOfTransactions"

const URL = "http://localhost:4000/transactions"
function App() {
  
  const [transactions, setTransactions] = useState([])

  useEffect (() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setTransactions(data))
  }, [])

  const handleSubmit = (newTransaction) => {
    fetch(URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({
      date: newTransaction.date,
      description: newTransaction.description,
      amount: newTransaction.amount,
      category: newTransaction.category
      })
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]))
  }

  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
      <Home 
      transactions={transactions}
      />
      </Route>
      <Route exact path="/addtransaction">
       <AddTransaction 
       handleSubmit={handleSubmit}/>
      </Route>
      <Route exact path="/transactionTracker">
      <TransactionTracker 
          transactions={transactions}
      />
       </Route>
      <Route path ="/circleChartOfTransactions">
        <CircleChartOfTransactions
        />
      </Route>
    </Switch>
  </div>;

}

export default App;
