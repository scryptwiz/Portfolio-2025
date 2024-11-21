import './App.css'
import { Hero } from './components/hero'
import { MaxWidth } from './components/layout'
import { Navbar } from './components/navigation'

export const App = () => {
  return (
    <>
      <MaxWidth className='h-screen'>
        <Navbar />
        <Hero />
      </MaxWidth>
    </>
  )
}