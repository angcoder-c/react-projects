import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./store"
import { deleteUserAction, OrderBy, resetFiltersAction, setCountryFieldAction } from "../store/users/usersSlice"
import { fetchUsers } from "../service/fetchUsers"

const useUsers = () => {
    const users = useAppSelector(state => state.users.data)
    const filters = useAppSelector(state => state.users.filters)
    const filteredUsers = useAppSelector(state => state.users.filteredData)
    const countryField = useAppSelector(state => state.users.countryField)
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

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return { 
        users, 
        filteredUsers, 
        filters, 
        countryField,
        deleteUser, 
        orderByName, 
        orderByLastname, 
        orderByCountry,
        resetFilters,
        setCountryField
    }
}

export default useUsers