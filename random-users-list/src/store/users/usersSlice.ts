import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../service/fetchUsers";

export type UserType = {
    email : string
    name : string,
    lastname : string,
    country : string,
    image : string 
}

type StatusType = 
    | 'idle' 
    | 'pending' 
    | 'succeeded' 
    | 'failed'

export type StateType = {
    data : UserType[],
    status : StatusType,
    error : string | null
}

const initialState : StateType = {
    data : [],
    status : 'idle',
    error : null
}

export const usersSlice = createSlice({
    name : 'users',
    initialState, 
    reducers : {
        random : (state, action) => {
            return state
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload
            state.status='succeeded' 
        })

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status='pending' 
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status='failed' 
            state.error=action.error.message ?? null
        })
    }
})
export const { random } = usersSlice.actions
export default usersSlice.reducer