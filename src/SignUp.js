import React, { useState } from "react"

const SignUp = ({ handleLoginSubmit }) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })

  const handleSubmitUser = (event) => {
    event.preventDefault()
    handleLoginSubmit(...formData)
    setFormData({
      userName: "",
      password: ""
    })
    alert("added to the system")
  }

  const handleAddUser = (event) => {
    setFormData({
      ...formData, [event.target.name]: (event.target.value)
    })
  }

  return (
        <div className="userForm">
            <h2>Sign Up Below</h2>
        <section>
        <form className="userNameForm" onSubmit={handleSubmitUser}>
            <input
            className="userName"
            type="userName"
            name="userName"
            placeholder="User Name"
            value={formData.userName}
            onChange={handleAddUser}
            />
            <input
            className="description"
            name="description"
            placeholder="Password"
            value={formData.description}
            onChange={handleAddUser}
            />
            <input className="submit" type="submit" value="Submit"/>
          </form>
        </section>
      </div>
  )
}
export default SignUp
