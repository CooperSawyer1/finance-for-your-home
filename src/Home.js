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

    return (
        <div> 
            <h1>Welcome to your Finance Tracker</h1>
            <br/>
            <h2>Check out your most recent transactions below:</h2>
        <Table
         size="md">
            <thead>
                <tr>
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
        
        
    )

}

export default Home