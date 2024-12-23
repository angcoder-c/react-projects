import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./store"
import { random } from "../store/users/usersSlice"
import { fetchUsers } from "../service/fetchUsers"

const useUsers = () => {
    const users = useAppSelector(state => state.users.data)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])
    return { users }
}

export default useUsers