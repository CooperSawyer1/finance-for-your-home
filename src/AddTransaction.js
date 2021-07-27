import React, { useState } from "react"

const AddTransaction = ({ handleSubmit }) => {
    const[formData, setFormData] = useState({
        date:"",
        description:"",
        amount:0,
        category:"",
        categoryId:0
    })

    const handleSubmitTransaction = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        setFormData({
            date:"",
            description:"",
            amount:0,
            category:"",
            categoryId:0
        })
        alert("You added another transaction")
    }

    const handleAddTransaction = (event) => {
        setFormData({
            ...formData, [event.target.name] : (event.target.value)
        })}

    return (
        <section>
        <form onSubmit={handleSubmitTransaction} >
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
            type="number" 
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
                <option value="" categoryId="0">Please Select</option>
                <option value="Groceries" categoryId="1">Groceries</option>
                <option value="Restaurant" categoryId="2">Restaurant</option>
                <option value="Car" categoryId="3">Car</option>
                <option value="Housing" categoryId="4">Housing</option>
                <option value="Income" categoryId="5">Income</option>
                <option value="Miscellaneous" categoryId="6">Miscellaneous</option>
            </select>
        <input type="submit" value="Submit" />
        </form>
        </section>
        )
}

export default AddTransaction