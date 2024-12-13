import './card.css'

const Card = ({
    info, 
    showModal
}) => {
    return (
        <>
            <div className="card" onClick={e=>showModal(info)}>
                <div className="card-image">
                    <img src={info.image} alt={info.name} />
                </div>
                <div className="card-info">
                    <h3>{info.name}</h3>
                    <p>{info.species}</p>
                </div>
            </div>
        </>
    )
}

export default Card