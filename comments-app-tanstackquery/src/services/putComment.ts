import { CommentAPIType } from "../App"
import fetchComments from "./fetchComments"

const putComment = async ( comment : CommentAPIType) => {
    const comments = await fetchComments()
    const response = await fetch('https://api.jsonbin.io/v3/b/67706ca1acd3cb34a8c0c7a3', {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
            'X-Master-Key' : '$2a$10$nS/rJ9e4q5hWQyBnWfU53uAXyno7reqMPFv3v41dxKkd.fWoDm7c.'
        },
        body : JSON.stringify({
            comments : [...comments, comment]
        })
    })
    if (!response.ok) {
        throw new Error('post comment error.')
    }
    return comment
}

export default putComment