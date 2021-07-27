import React from "react"
import TransactionItem from "./TransactionItem"
import { Table } from "playbook-ui"

const TransactionTracker = ({ transactions, handleDelete }) => {
    const listOfTransactions = transactions.map(transaction => (
        <TransactionItem 
        key={transaction.id}
        transaction={transaction}
        handleDelete={handleDelete}
        />
    ))

    return (
    <div>
        <h2>List of Transactions</h2>
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
            {listOfTransactions}
            </tbody>
        </Table>
    </div>


    )
}

export default TransactionTracker