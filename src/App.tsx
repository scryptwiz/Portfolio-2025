import { Carousel_Project, Experience, Footer, Hero, Introduction, MaxWidth, Navbar, Testimonials } from './components'

export const App = () => {
  return (
    <>
      {/* Navbar Section */}
      <MaxWidth className='fixed top-0 left-0 w-full bg-primary z-50'><Navbar /></MaxWidth>
      {/* Hero Section */}
      <MaxWidth><Hero /></MaxWidth>
      {/* Service Section */}
      <MaxWidth id="services" className='bg-secondary px-5'><Introduction /></MaxWidth>
      {/* Experience Section */}
      <MaxWidth id="services" className='px-5 py-20'><Experience /></MaxWidth>
      {/* Projects section */}
      {/* <MaxWidth id="works" className='bg-secondary px-5'><Projects /></MaxWidth> */}
      <MaxWidth id="works" className='bg-secondary px-5'><Carousel_Project /></MaxWidth>
      {/* Testimonials section */}
      <MaxWidth id="testimonies" className='bg-primary px-5'><Testimonials /></MaxWidth>
      {/* Footer section */}
      <MaxWidth id="footer" className='bg-primary px-5'><Footer /></MaxWidth>
    </>
  )
}