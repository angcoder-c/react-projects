import './App.css'
import TopStories from './components/topStories'


function App() {


  return (
    <>
      <section className='container'>
        <header>
          <div className='logo'> Y </div>
          <span>Hacker News Fake</span>
        </header>
        <TopStories/>
      </section>
    </>
  )
}

export default App
