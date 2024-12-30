type Props = {
    handleSubmit : (event:React.FormEvent<HTMLFormElement>) => void,
    loading : boolean
 }

const CommentForm = ({ handleSubmit, loading } : Props) => {
    return (
        <form className={`comment-form ${loading?' disabled':''}`} onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Username'
            name="username"
            disabled={loading}
            />
            <textarea 
            name="message"
            placeholder='Message...'
            disabled={loading}
            />
            <button
            disabled={loading}
            >
                Submit
            </button>
        </form>
    )
}

export default CommentForm