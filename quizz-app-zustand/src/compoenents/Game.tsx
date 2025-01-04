import { useEffect } from "react"
import Results from "./Results"
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
        if (newIndex===question.correctAnswer) return '#144d12'
        if (newIndex===question.selectUserAnswer) return '#7b2c2c'
        return 'transparent'
    }

    return (
        <div className="item">
            <div className="controls">
                <button onClick={()=>backQuestion()}>
                    <span>⬅️</span>
                </button>
                <span>
                    {
                    `${currentQuestion + 1} / ${questions.length}`
                    }
                </span>
                <button onClick={()=>nextQuestion()}>
                    <span>➡️</span>
                </button>
            </div>
            <div className="question-body">
                <div className="question">
                    <span>{ question.question }</span>
                </div>
                <div className="question-body-answers">
                    {
                        question.answers.map((answer, index) => {
                            return (
                                <div 
                                    className="answer"
                                    key={ question.id+index } 
                                    onClick={
                                        ()=>selectAnswer(question.id, index)
                                    }
                                    style={{
                                        backgroundColor : getBackgroundColor(index)
                                    }}
                                >
                                    <span>{ answer }</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Results/>
        </div>
    )
}

export default Game