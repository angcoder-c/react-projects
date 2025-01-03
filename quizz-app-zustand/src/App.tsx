import './App.css'
import Game from './compoenents/Game'
import Start from './compoenents/Start'
import { useQuestionsStore } from './store/useQuestions'

function App() {
  const questions = useQuestionsStore(store => store.questions)

  return (
    <main>
      {questions.length === 0 && <Start/>}
      {questions.length > 0 && <Game/>}
    </main>
  )
}

export default App
