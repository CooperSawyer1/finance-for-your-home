import React from "react"
import TransactionItem from "./TransactionItem"
import { Table } from "playbook-ui"

const TransactionTracker = ({ transactions, handleDelete, handleSortCategory }) => {
  const listOfTransactions = transactions.map(transaction => (
        <TransactionItem
        key={transaction.id}
        transaction={transaction}
        handleDelete={handleDelete}
        />
  ))

  const handleClick = () => {
    return handleSortCategory
  }

  return (
    <div>
        <h2>List of Transactions</h2>
        <Table
         size="md">
            <thead className="tableHeader">
                <tr className="transaction">
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th onClick={handleClick}>Category</th>
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
