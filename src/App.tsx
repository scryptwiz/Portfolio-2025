import './App.css'
import { Experience, Hero, Introduction, MaxWidth, Navbar, Projects, Testimonials } from './components'

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
      {/* Experience Section */}
      <MaxWidth id="services" className='px-5 py-20'><Experience /></MaxWidth>
      {/* Projects section */}
      <MaxWidth id="works" className='bg-secondary px-5'><Projects /></MaxWidth>
      {/* Testimonials section */}
      <MaxWidth id="works" className='bg-primary px-5'><Testimonials /></MaxWidth>
    </>
  )
}