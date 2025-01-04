import { create } from "zustand";

type QuestionType = {
    id : string,
    question : string,
    answers : string[],
    correctAnswer : number,
    selectUserAnswer? : number,
    isCorrect? : boolean
}

type State = {
    questions : QuestionType[],
    currentQuestion : number,
    fetchQuestions : (limit : number) => void,
    nextQuestion : () => void,
    backQuestion : () => void,
    selectAnswer : (questionId : string, answerIndex : number) => void,
    reset : ()=>void
}

export const useQuestionsStore = create<State>((set, get)=>{
    return {
        questions : [],
        currentQuestion : 0,
        fetchQuestions : async (limit:number) => {
            const response = await fetch('http://localhost:5173/data.json')
            const json = await response.json()
            const questionsSlice = json.sort(() => Math.random() - 0.5).slice(0, limit)
            set(state => {
                return {
                    ...state,
                    questions : questionsSlice
                }
            })
        },
        nextQuestion : () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1
            if (nextQuestion < questions.length) {
                set(state => {
                    return {
                        ...state,
                        currentQuestion : nextQuestion
                    }
                })
            }
        },
        backQuestion : () => {
            const { currentQuestion } = get()
            const backQuestion = currentQuestion - 1
            if (backQuestion >= 0) {
                set(state => {
                    return {
                        ...state,
                        currentQuestion : backQuestion
                    }

                })
            }
        },
        selectAnswer : (questionId : string, answerIndex : number) => {
            const { questions } = get()
            const newQuestions = questions.map(question =>{
                if (question.id === questionId) {
                    question.selectUserAnswer = answerIndex + 1
                    question.isCorrect = (question.selectUserAnswer===question.correctAnswer)
                }
                return question
            })
            set(state => {
                return {
                    ...state,
                    questions : newQuestions
                }
            })
        },
        reset : () => {
            set(state => {
                return {
                    ...state,
                    questions : [],
                    currentQuestion : 0
                }
            })
        }
    }
})