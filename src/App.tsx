import './App.css'
import { Navbar } from './components/navigation'

export const App = () => {
  return (
    <div className='app'>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar />
      </div>
    </div>
  )
}