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
            <div className="story-index">
                <span>{ index }.</span>
            </div>
            <div className="story-main-info">
                <a className="title" href={currentData?.url}>{currentData?.title}</a>
                <a className="story-url" href={currentData?.url}> ({ currentData?.url?.split('/')[2] })</a>
                <div className="story-data">
                    <span>{ currentData?.score } points</span> 
                    <a href="#">by { currentData?.by }</a> 
                    <a href="#">{ getTimeDays(currentData ? currentData.time : 0) }</a>
                    <a href="#">{ currentData?.kids?.length } comments</a>
                </div>
            </div>
        </div>
    )
}

export default Story