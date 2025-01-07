import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../service/newsServices';
import Story from './story';

const TopStories = () => {
    const LIMIT_STORIES = 4

    const { data, size, setSize } = useSWRInfinite(
        (index) => {
            return `topStories/${index+1}`
        }, 
        async (key) => {
            const page = parseInt(key.split("/")[1], 10);
            return await getTopStories(page, LIMIT_STORIES)
        }
    )

    const handleMoreButton = () => {
        setSize(size + 1)
    }

    return (
        <main>
            <div className="stories-container">
                {
                    data 
                    ? data[size-1]?.map((item, index)=>{
                        return (
                            <Story 
                            key={item}
                            item={item}
                            index={
                                (
                                    (size-1) * LIMIT_STORIES
                                ) + index + 1
                            }
                            />
                        )
                    }) 
                    : []
                }
            </div>
            <div className='more-button-container'>
                <button onClick={handleMoreButton}>
                    More
                </button>
            </div>
        </main>
    )
}

export default TopStories