import useSWR from "swr"
import { getItemInfo } from "../service/newsServices"
import { getTimeDays } from "../utils/timeFormat"

const Story = ({ item, index } : { item : number, index : number }) => {
    const { data, isLoading } = useSWR(`story/${item}`, async ()=>{
        const story = await getItemInfo(item)
        return story
    })

    const currentData = data ? { ...data } : null;

    if (isLoading) return (
        <p>Loading...</p>
    )

    return (
        <div className="story">
            <main className="story-main-info">
                <span>{ index }</span>
                <a href={currentData?.url}>{currentData?.title}</a>
                <span>({ currentData?.url.split('/')[2] })</span>
            </main>
            <aside>
                <span>
                    { currentData?.score } points by { currentData?.by } { getTimeDays(currentData ? currentData.time : 0) } days ago
                </span>
            </aside>
        </div>
    )
}

export default Story