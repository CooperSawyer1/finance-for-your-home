import React from "react"

const TransactionItem = ({ amount, category, description, date }) => {
    return (
        <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>${amount}</td>
        <td>{category}</td>
    </tr>
    )
}

export default TransactionItem