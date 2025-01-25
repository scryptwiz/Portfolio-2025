import { Carousel_Project, Experience, Footer, Hero, Introduction, MaxWidth, Navbar, Testimonials } from './components'
import {useEffect, useState} from "react";
import {clsx} from "clsx";

export const App = () => {
    const [hasScroll, setHasScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY>32)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
  return (
    <>
      {/* Navbar Section */}
      <MaxWidth className={clsx('fixed top-0 left-0 w-full bg-primary z-50', hasScroll && 'shadow transition-all duration-500')}><Navbar /></MaxWidth>
      {/* Hero Section */}
      <MaxWidth id="hero"><Hero /></MaxWidth>
      {/* Service Section */}
      <MaxWidth id="services" className='bg-secondary px-5'><Introduction /></MaxWidth>
      {/* Experience Section */}
      <MaxWidth id="experience" className='px-5 py-20'><Experience /></MaxWidth>
      {/* Projects section */}
      <MaxWidth id="works" className='bg-secondary px-5'><Carousel_Project /></MaxWidth>
      {/* Testimonials section */}
{/*   <MaxWidth id="testimonies" className='bg-primary px-5'><Testimonials /></MaxWidth> */}
      {/* Footer section */}
      <MaxWidth id="footer" className='bg-primary px-5'><Footer /></MaxWidth>
    </>
  )
}
