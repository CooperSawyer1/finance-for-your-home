import React, { useState } from "react"

const AddTransaction = ({ handleSubmit}) => {
    const[formData, setFormData] = useState({
        date:"",
        description:"",
        amount:0,
        category:""
    })

    const handleSubmitTransaction = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        setFormData({
            date:"",
            description:"",
            amount:0,
            category:""
        })
    }

    const handleAddTransaction = (event) => {
        setFormData({
            ...formData, [event.target.name] : (event.target.value)
        })}

    return (
        <section>
        <form onSubmit={handleSubmitTransaction} >
            <input 
            type="date"
            name="date" 
            value={formData.date}
            onChange={handleAddTransaction}
            />  
            <input 
            name="description" 
            placeholder="Add transaction here" 
            value={formData.description}
            onChange={handleAddTransaction}
            />
            
            <input 
            type="number" 
            name="amount" 
            placeholder="Add amount here"
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
                <option value="Income">Income</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        <input type="submit" value="Submit" />
        </form>
        </section>
        )
}

export default AddTransaction