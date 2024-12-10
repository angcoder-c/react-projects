import './selector.css'

const Selector = ({
    active
}) => {
    return (
        <div className='selector'>
          <div className={`player ${active?'':' active'}`}>❌</div>
          <div className={`player ${active?' active':''}`}>⭕</div>
        </div>
    )
}

export default Selector