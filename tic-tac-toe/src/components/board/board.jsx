import Square from "../square/square"
import './board.css'

const Board = ({
    board,
    handleClick
}) => {
    
    return (
        <div className='board'>
          {
            board.map((square, index) => {
                return (
                <Square 
                key={index} 
                content={square}
                handleClick={event=>handleClick(index)}
                />
                )
            })
        }
        </div>
    )
}

export default Board;