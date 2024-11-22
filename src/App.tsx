import './App.css'
import { Hero } from './components/hero'
import { MaxWidth } from './components/layout'
import { Navbar } from './components/navigation'
import { Introduction } from './components/section'

export const App = () => {
  return (
    <>
      {/* Hero Section */}
      <MaxWidth>
        <Navbar />
        <Hero />
      </MaxWidth>
      {/* Introduction Section */}
      <MaxWidth className='bg-secondary px-5'><Introduction /></MaxWidth>
    </>
  )
}