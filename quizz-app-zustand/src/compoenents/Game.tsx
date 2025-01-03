import { useQuestionsStore } from "../store/useQuestions"

const Game = () => {
    const questions = useQuestionsStore(store => store.questions)
    const currentQuestion = useQuestionsStore(store => store.currentQuestion)
    const nextQuestion = useQuestionsStore(store => store.nextQuestion) 
    const backQuestion = useQuestionsStore(store => store.backQuestion) 
    const question = questions[currentQuestion]

    return (
        <div className="item">
            <button onClick={()=>backQuestion()}>
                Back
            </button>
            <button onClick={()=>nextQuestion()}>
                Next
            </button>
            <span className="question">
                {question.question}
            </span>
            {
                question.answers.map((answer, index) => {
                    return (
                        <p key={question.id+index}>{answer}</p>
                    )
                })
            }
        </div>
    )
}

export default Game