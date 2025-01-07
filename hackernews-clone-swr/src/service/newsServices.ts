import { TopStoriesType } from "../types"
import { StoryType } from "../types"

export const getTopStories = async (page : number, limit : number) => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const json = await response.json()
    const startIndex = (page - 1) * limit
    const newsPage : TopStoriesType = json.slice(startIndex, startIndex + limit)
    return newsPage
}

export const getItemInfo = async ( id : number ) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const json : StoryType = await response.json()
    return json
}