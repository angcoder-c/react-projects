import './form.css'

const Form = ({
    onSubmit,
    setSearch, 
    setSpecies,
    setStatus
}) => {
    return (
        <>
            <form onSubmit={onSubmit} className='form'>
                <input placeholder="Character" type="text" id="search" onChange={setSearch}/>
                <input placeholder="Species" type="text" id="species" onChange={setSpecies}/>
                <button type="submit">Search</button>
                <div className="filters">
                    <div className="filter">
                        <input type="checkbox" id="alive" onChange={setStatus} />
                        <label htmlFor="alive">Alive</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" id="dead" onChange={setStatus} />
                        <label htmlFor="dead">Dead</label>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form