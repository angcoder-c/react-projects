import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../service/fetchUsers";

type FilterType =
    | 'name'
    | 'lastname'
    | 'country'

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
    filteredData : UserType[],
    status : StatusType,
    error : string | null,
    filters : boolean,
    countryField : string
}

const initialState : StateType = {
    data : [],
    filteredData : [],
    status : 'idle',
    error : null,
    filters : false,
    countryField : ''
}

export const usersSlice = createSlice({
    name : 'users',
    initialState, 
    reducers : {
        deleteUserAction : (state, action) => {
            state.data = state.data.filter(user => user.email != action.payload)
            state.filteredData = state.filteredData.filter(user => user.email != action.payload)
            state.status='succeeded'
            state.error=null
            return state 
        },

        OrderBy : (state, action : PayloadAction<FilterType>) => {
            const key = action.payload
            state.filteredData=[...state.data].sort((obj1, obj2) => {
                if (obj1[key] < obj2[key]) return -1;
                if (obj1[key] > obj2[key]) return 1;
                return 0;
            });
            state.filters=true
            return state
        },

        resetFiltersAction : (state) => {
            state.countryField=''
            state.filters=false
            return state
        },

        setCountryFieldAction : (state, action : PayloadAction<string>) => {
            state.countryField=action.payload
            if (!action.payload.trim()) {
                state.filters=false
                return state
            }
            state.filteredData = [...state.data].filter(
                user => user.country.toLocaleLowerCase().includes(
                    action.payload.toLocaleLowerCase().trim()
                )
            )
            state.filters=true
            return state
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload
            state.status='succeeded' 
        })

        builder.addCase(fetchUsers.pending, (state) => {
            state.status='pending' 
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status='failed' 
            state.error=action.error.message ?? null
        })
    }
})
export const { 
    deleteUserAction, 
    OrderBy, 
    resetFiltersAction, 
    setCountryFieldAction 
} = usersSlice.actions
export default usersSlice.reducer