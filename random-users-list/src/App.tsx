import React from 'react'
import useUsers from './hooks/useUsers'
import UsersTable from './components/usersTable'
import Filters from './components/filters'
import './App.css'

function App() {
  const { 
    users, 
    filteredUsers, 
    countryField, 
    filters, 
    deleteUser, 
    orderByName,
    orderByLastname, 
    orderByCountry,
    resetFilters,
    setCountryField 
  } = useUsers()
  let retUsers = filters ? filteredUsers : users
  const handleCountryFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCountryField(event.target.value)
  }

  return (
    <>
      <h1>Redux-Users</h1>
      <Filters
        resetFilters={resetFilters}
        handleCountryFilter={handleCountryFilter}
        countryField={countryField}
      />
      <UsersTable
        users={retUsers}
        deleteUser={deleteUser}
        orderByCountry={orderByCountry}
        orderByLastname={orderByLastname}
        orderByName={orderByName}
      />
    </>
  )
}

export default App
