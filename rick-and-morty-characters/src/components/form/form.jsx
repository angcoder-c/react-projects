const Form = ({
    onSubmit,
    setSearch, 
    setSpecies,
    setStatus
}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" id="search" onChange={setSearch}/>
                <input type="text" id="species" onChange={setSpecies}/>
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
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Form