import { create } from "zustand";

type QuestionType = {
    id : string,
    question : string,
    answers : string[],
    correctAnswer : number
}

type State = {
    questions : QuestionType[],
    currentQuestion : number,
    fetchQuestions : (limit : number) => void,
    nextQuestion : () => void,
    backQuestion : () => void
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
            const { currentQuestion, questions } = get()
            const backQuestion = currentQuestion - 1
            if (backQuestion >= 0) {
                set(state => {
                    return {
                        ...state,
                        currentQuestion : backQuestion
                    }

                })
            }
        }
    }
})