import React from "react"
import { Table } from "playbook-ui"
import TransactionItem from "./TransactionItem"

const Home = ({ transactions, handleDelete }) => {
  const listOfLastFiveTransactions = transactions.map(transaction => (
        <TransactionItem
        key={transaction.id}
        transaction={transaction}
        handleDelete={handleDelete}
        />
  )).slice(1).slice(-5)

  const welcomeHeader =
    <div><h1>Welcome to your Finance Tracker</h1>
    </div>

  const transactionTable =
  <div>
    <h2>Check out your most recent transactions below:</h2>
    <Table
    size="md">
    <thead >
        <tr className="transaction">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
    {listOfLastFiveTransactions}
    </tbody>
    </Table>
    </div>

  return (
       <div>
           {welcomeHeader}
           <br/>
           {transactionTable}
        </div>
  )
}

export default Home
