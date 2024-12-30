type Props = {
    user : string,
    message : string,
    preview : boolean
}
const Comment = ({ user, message, preview } : Props) => {
    return (
        <div className={`comment ${preview?' temp-comment':''}`}>
            <span>{ user }</span>
            <p>{ message }</p>
        </div>
    )
}

export default Comment