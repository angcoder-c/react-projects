import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './components/board/board'
import Selector from './components/selector/selector'
import checkBoard from './hooks/checkBoard'
import Modal from './components/modal/modal'
import './App.css'

function App() {
  const [active, setActive] = useState(0) // 0 -> ❌ 1 -> ⭕
  const [board, setBoard] = useState(Array(9).fill(null))
  const [showModal, setShowModal] = useState(false)
  const [winner, setWinner] = useState('')

  useEffect(()=>{
    localStorage.setItem('board', JSON.stringify(board))
    let getWinner=[
      checkBoard(board, '❌'), 
      checkBoard(board, '⭕')
    ]
    .filter(item=>item.win)

    if (getWinner.length>0){
      let tempWinner=getWinner[0]
      setShowModal(tempWinner.win)
      setWinner(tempWinner.char)
    }
  }, [board])

  const handleClick = (index) => {
    if (Boolean(board[index]) || showModal) return 
    
    let newContent = active?'⭕':'❌'
    const newBoard = [...board];
    newBoard[index] = newContent;
    setActive(!active)
    setBoard(newBoard)
  }

  const handlePlayAgain = e => {
    setBoard(Array(9).fill(null))
    setShowModal(false)
    setWinner('')
  }
  return (
    <>
      <div className={`modal-container${showModal?'':' hide'}`}>
        <Modal winner={winner} handlePlayAgain={handlePlayAgain}/>
      </div>
      <main>
        <h1>Tic-Tac-Toe</h1>
        <div className='container'>
          <Board 
          handleClick={handleClick} 
          board={board}
          />
          <Selector 
          active={active}
          />
        </div>
      </main>
    </>
  )
}

export default App