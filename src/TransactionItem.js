import React from "react"

const TransactionItem = ({ handleDelete, transaction }) => {
  const { amount, category, date, description, id } = transaction
  const transactionURL = `${process.env.REACT_APP_API_URL}`

  const handleDeleteClick = () => {
    fetch(`${transactionURL}/transactions/${id}`, {
      method: "DELETE"
    })
      .then(handleDelete(id))
  }

  return (
        <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>${amount}</td>
        <td>{category}</td>
        <td><button onClick={handleDeleteClick}>🗑</button></td>
    </tr>
  )
}

export default TransactionItem
