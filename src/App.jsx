import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import './index.css'

function App() {

  return (
    <main className='wrapper w-[700px] my-6 bg-White rounded-[10px] p-8'>
      <Header />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </main>
  )
}

export default App
