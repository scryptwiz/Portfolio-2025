import './App.css'
import { Hero } from './components/hero'
import { MaxWidth } from './components/layout'
import { Navbar } from './components/navigation'
import { Introduction, Projects } from './components/section'

export const App = () => {
  return (
    <>
      {/* Hero Section */}
      <MaxWidth>
        <Navbar />
        <Hero />
      </MaxWidth>
      {/* Service Section */}
      <MaxWidth id="services" className='bg-secondary px-5'><Introduction /></MaxWidth>
      {/* Projects section */}
      <MaxWidth id="projects" className='px-5'><Projects /></MaxWidth>
    </>
  )
}