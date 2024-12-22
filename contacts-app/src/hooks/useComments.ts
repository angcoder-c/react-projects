import { add } from "../store/comments/commentSlice"
import { useAppDispatch } from "./store"
import { CommentState } from "../store/comments/commentSlice"

const useComments = () => {
    const dispatch = useAppDispatch()
    const addComment = ({ message, username } : CommentState) => {
        dispatch(add({ message, username}))
    }
    return { addComment }
}

export default useComments