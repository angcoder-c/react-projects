import React, {useCallback, useEffect} from 'react'
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
    status,
    deleteUser, 
    orderByName,
    orderByLastname, 
    orderByCountry,
    resetFilters,
    setCountryField,
    getUsers
  } = useUsers()
  let retUsers = filters ? filteredUsers : users
  const handleCountryFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCountryField(event.target.value)
  }

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !(status==='pending')) {
      getUsers()
    }
  }, [getUsers]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <h1>Redux-Users</h1>
      <Filters
        resetFilters={resetFilters}
        handleCountryFilter={handleCountryFilter}
        countryField={countryField}
      />
      <UsersTable
        loading={status==='pending'}
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
