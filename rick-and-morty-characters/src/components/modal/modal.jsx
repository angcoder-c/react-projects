import './modal.css'
const Modal = ({
    info,
    show,
    closeModal
}) => {
    return (
        <div className={`modal-container${show?'':' hidden'}`}>
            <div className="modal">
                <p>
                    Name: {info?.name}
                </p>
                <p>
                    Gender: {info?.gender}
                </p>
                <p>
                    Species: {info?.species}
                </p>
                <p>
                    Status: {info?.status}
                </p>
                <p>
                    Origin: {info?.origin.name}
                </p>
                <button className='closeButton' onClick={closeModal}> Close </button>
            </div>
        </div>
    )
}

export default Modal