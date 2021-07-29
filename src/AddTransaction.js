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
            type="date"
            name="date"
            value={formData.date}
            onChange={handleAddTransaction}
            />
            <input
            name="description"
            placeholder="Add Description Here"
            value={formData.description}
            onChange={handleAddTransaction}
            />

            <input
            type="amount"
            name="amount"
            placeholder="Add Amount Here"
            value={formData.amount}
            onChange={handleAddTransaction}
            />

            <select
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
                <option value="Utilities">Utilities</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Entertainment">Entertainment</option>
            </select>
        <input className="submit" type="submit" value="Submit"/>
        </form>
        </section>
        </div>
  )
}

export default AddTransaction
