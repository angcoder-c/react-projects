import './showUsdValue.css'

const ShowUsdValue = ({ usd } : { usd : number }) => {
    return (
        <textarea 
        className="show-usd" 
        value={`$ ${usd}`} 
        disabled
        />
    )
}

export default ShowUsdValue