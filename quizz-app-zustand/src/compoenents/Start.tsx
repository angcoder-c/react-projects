import { useQuestionsStore } from "../store/useQuestions"

const Start = () => {
    const fetchQuestions = useQuestionsStore(state=>state.fetchQuestions)

    const handleStart = () => {
        fetchQuestions(10)
    }
    
    return (
        <button
        className="start-button"
        onClick={()=>handleStart()}
        >
            Start Quizz
        </button>
    )
}

export default Start