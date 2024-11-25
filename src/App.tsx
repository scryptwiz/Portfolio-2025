import './App.css'
import { Hero, Introduction, MaxWidth, Navbar, Projects } from './components'

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
      <MaxWidth id="works" className='bg-secondary px-5'><Projects /></MaxWidth>
    </>
  )
}