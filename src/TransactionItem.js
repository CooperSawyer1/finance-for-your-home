import React from "react"

const TransactionItem = ({ handleDelete, transaction }) => {
  const { amount, category, date, description, id } = transaction

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/transactions/${id}`, {
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
