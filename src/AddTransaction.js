import React, { useState } from "react"

const AddTransaction = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    amount: "",
    category: ""
  })

  const handleSubmitTransaction = (event) => {
    event.preventDefault()
    handleSubmit({ ...formData, amount: parseFloat(formData.amount) })
    setFormData({
      date: "",
      description: "",
      amount: "",
      category: ""
    })
    alert("You added another transaction")
  }

  const handleAddTransaction = (event) => {
    setFormData({
      ...formData, [event.target.name]: (event.target.value)
    })
  }

  return (
        <div className="inputForm">
            <h2>Add a New Transaction Below</h2>
        <section>
        <form className="transactionForm" onSubmit={handleSubmitTransaction}>
            <input
            className="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleAddTransaction}
            />
            <input
            className="description"
            name="description"
            placeholder="Add transaction here"
            value={formData.description}
            onChange={handleAddTransaction}
            />

            <input
            className="amount"
            type="amount"
            name="amount"
            placeholder="Add amount here"
            value={formData.amount}
            onChange={handleAddTransaction}
            />

            <select
            className="category"
            name="category"
            placeholder="select a category"
            value={formData.category}
            onChange={handleAddTransaction}
            >
                <option value="">Please Select</option>
                <option value="Groceries">Groceries</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Car">Car</option>
                <option value="Housing">Housing</option>
                <option value="Income">Income</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        <input className="submit" type="submit" value="Submit"/>
        </form>
        </section>
        </div>
  )
}

export default AddTransaction
