import './App.css'
import { Hero } from './components/hero'
import { MaxWidth } from './components/layout'
import { Navbar } from './components/navigation'

export const App = () => {
  return (
    <>
      <MaxWidth>
        <Navbar />
        <Hero />
      </MaxWidth>
    </>
  )
}