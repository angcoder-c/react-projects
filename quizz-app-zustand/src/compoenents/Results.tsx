import { useQuestionsStore } from "../store/useQuestions"

const Results = () => {
    const questions = useQuestionsStore(state => state.questions)
    const correctAnswers = questions.filter(question => question.isCorrect).length
    const unanswered = questions.filter(question => question.isCorrect==null).length
    const incorrectAnswers = questions.filter(question => question.isCorrect===false).length
    const reset = useQuestionsStore(state => state.reset)

    return (
        <div className="results">
            <div className="results-items">
                <span>🟢 {correctAnswers}</span>
                <span>🔴 {incorrectAnswers}</span>
                <span>🟡 {unanswered}</span>
            </div>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}

export default Results