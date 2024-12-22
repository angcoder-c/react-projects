import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommentId = string

export interface CommentState {
    message : string,
    username : string
}

export interface CommentStateWithId extends CommentState {
    id : CommentId
}

const initialState : CommentStateWithId[] = [
    {
        id : '1',
        username : 'user 1',
        message : 'Comment 1'
    },
    {
        id : '2',
        username : 'user 2',
        message : 'Comment 2'
    },
    {
        id : '3',
        username : 'user 3',
        message : 'Comment 3'
    }
]

export const commentsSlice = createSlice({
    name : 'comments',
    initialState,
    reducers : {
        add : (state : CommentStateWithId[], action : PayloadAction<CommentState>) => {
            state.push({
                ...action.payload,
                id : `${ state.length + 1 }`
            }) 
            return state
        }
    }
})

export const { add } = commentsSlice.actions

export default commentsSlice.reducer