const getNewsFromPage = async (page : number, limit : number) => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const json = await response.json()
    const startIndex = (page - 1) * limit
    const newsPage = json.slice(startIndex, startIndex + limit)
    return newsPage
}