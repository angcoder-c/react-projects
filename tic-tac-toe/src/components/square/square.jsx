import './square.css'

const Square = ({
    content, 
    handleClick
}) => {
    return (
        <div className="square" onClick={handleClick}>
            {content}
        </div>
    )
}

export default Square