import { type CryptocurrencyName } from "../types"

const fetchAssets = async (name : CryptocurrencyName) => {
    const response = await fetch(`https://api.coincap.io/v2/assets/${name}`)
    const json = await response.json()
    return json.data
}

export default fetchAssets