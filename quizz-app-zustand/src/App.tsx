import './App.css'
import Game from './compoenents/Game'
import Start from './compoenents/Start'
import { useQuestionsStore } from './store/useQuestions'

function App() {
  const questions = useQuestionsStore(store => store.questions)

  return (
    <main className='star-field'>
      <h1> Star Wars quizz </h1>
      {questions.length === 0 && <Start/>}
      {questions.length > 0 && <Game/>}
    </main>
  )
}

export default App
