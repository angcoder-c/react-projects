import React, { ChangeEvent } from 'react'
import useUsers from './hooks/useUsers'
import './App.css'

function App() {
  const { users, filteredUsers, countryField, filters, deleteUser, orderByName, resetFilters, setCountryField } = useUsers()
  let retUsers = filters ? filteredUsers : users
  const handleCountryFilter = (event:ChangeEvent<HTMLInputElement>) => {
    setCountryField(event.target.value)
  }

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={()=>{
        orderByName()
      }}>filter by name</button>
      <button onClick={()=>{
        resetFilters()
      }}>reset</button>
      <input type="text" onChange={handleCountryFilter} value={countryField}/>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            retUsers.map(
              (user, index) => (
                <tr key={user.email+index}>
                  <td>
                    <img src={user.image} alt={user.email} />
                  </td>
                  <td>{ user.name }</td>
                  <td>{ user.lastname }</td>
                  <td>{ user.country }</td>
                  <td>
                    <button onClick={()=>{
                      deleteUser(user.email)
                    }}>Button</button>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
