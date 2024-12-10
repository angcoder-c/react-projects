import './modal.css'

const Modal = ({
    winner,
    handlePlayAgain
}) => {
    return (
        <div className="modal">
            <h2>{winner} Win</h2>
            <div className={'play-again'} onClick={handlePlayAgain}>
                Play again
            </div>
        </div>
    )
}

export default Modal