import { useEffect } from "react"
import { useQuestionsStore } from "../store/useQuestions"

const Game = () => {
    const questions = useQuestionsStore(store => store.questions)
    const currentQuestion = useQuestionsStore(store => store.currentQuestion)
    const nextQuestion = useQuestionsStore(store => store.nextQuestion) 
    const backQuestion = useQuestionsStore(store => store.backQuestion) 
    const selectAnswer = useQuestionsStore(store => store.selectAnswer) 
    const question = questions[currentQuestion]

    const getBackgroundColor = (index : number) => {
        const newIndex = index+1
        if (question.selectUserAnswer==null) return 'transparent'
        if (newIndex !== question.correctAnswer && newIndex !== question.selectUserAnswer) return 'transparent'
        if (newIndex===question.correctAnswer) return 'green'
        if (newIndex===question.selectUserAnswer) return 'red'
        return 'transparent'
    }

    useEffect(()=>{
        console.log(question.isCorrect)
        console.log(question.selectUserAnswer)
    }, [question])

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
                        <p 
                        key={question.id+index} 
                        onClick={()=>selectAnswer(question.id, index)}
                        style={{
                            backgroundColor : getBackgroundColor(index)
                        }}
                        >{answer}</p>
                    )
                })
            }
        </div>
    )
}

export default Game