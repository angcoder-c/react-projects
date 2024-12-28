import { createAsyncThunk } from "@reduxjs/toolkit";
import { type UserGross } from "../types.d";
import { type UserType } from "../store/users/usersSlice";

export const fetchUsers = createAsyncThunk('users/fetchGetAll', async (page:number) => {
    const response = await fetch(`https://randomuser.me/api/?results=10&?seed=abcd&?page=${page}`)
    if (!response.ok) {
        throw new Error('fetch data error');
    }
    const json = await response.json()
    const results : UserType[] = json.results?.map((user : UserGross)=>{
        return {
            email : user.email,
            name : user.name.first,
            lastname : user.name.last,
            country : user.location.country,
            image : user.picture.thumbnail
        }
    })
    return results
})