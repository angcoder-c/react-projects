import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./store"
import { deleteUserAction, OrderBy, resetFiltersAction, setCountryFieldAction, nextPage } from "../store/users/usersSlice"
import { fetchUsers } from "../service/fetchUsers"

const useUsers = () => {
    const users = useAppSelector(state => state.users.data)
    const filters = useAppSelector(state => state.users.filters)
    const filteredUsers = useAppSelector(state => state.users.filteredData)
    const countryField = useAppSelector(state => state.users.countryField)
    const page = useAppSelector(state=>state.users.page)
    const status = useAppSelector(state => state.users.status)
    const dispatch = useAppDispatch()

    const deleteUser = (email:string) => {
        dispatch(deleteUserAction(email))
    }

    const orderByName = () => {
        dispatch(OrderBy('name'))
    }

    const orderByLastname = () => {
        dispatch(OrderBy('lastname'))
    }

    const orderByCountry = () => {
        dispatch(OrderBy('country'))
    }

    const resetFilters = () => {
        dispatch(resetFiltersAction())
    }

    const setCountryField = (input:string) => {
        dispatch(setCountryFieldAction(input))
    }

    const getUsers = () => {
        dispatch(fetchUsers(page))
        dispatch(nextPage())
    }

    useEffect(()=>{
        getUsers()
    }, [])

    return { 
        users, 
        filteredUsers, 
        filters, 
        countryField,
        status,
        deleteUser, 
        orderByName, 
        orderByLastname, 
        orderByCountry,
        resetFilters,
        setCountryField,
        getUsers
    }
}

export default useUsers