import { AlignJustify, Github, Mail, Twitter, X } from 'lucide-react'
import { Button } from '../ui/button'
import CustomNavlink from './CustomNavlink'
import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [shouldRender, setShouldRender] = useState(false);

	const handleOpen = () => {
		setShouldRender(true);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
		setTimeout(() => setShouldRender(false), 700);
	};

	return (
		<nav className='w-full flex justify-between items-center lg:py-10 py-7 px-5 sticky top-0 bg-primary z-50'>
			<div className='flex justify-between items-center gap-16'>
				<h1 className='text-white text-2xl'><span className='font-bold'>Kelvin</span> Ajayi</h1>
				<div className='lg:flex hidden gap-6 tracking-widest items-center'>
					<CustomNavlink customClass='text-base' to="hero">Home</CustomNavlink>
					<CustomNavlink customClass='text-base' to="services">Service</CustomNavlink>
					<CustomNavlink customClass='text-base' to="works">Works</CustomNavlink>
					<CustomNavlink customClass='text-base' to="testimonies">Testimonies</CustomNavlink>
				</div>
			</div>
			<div className='lg:flex hidden items-center gap-5'>
				<div className='flex gap-2 items-center tracking-widest text-lg'>
					<a href="https://x.com/KelvinAjayi8" target="_blank" rel="noopener noreferrer" className="no-underline" >
						<Button variant="ghost"><Twitter color='white' /> Twitter</Button>
					</a>
					<a href="https://github.com/scryptwiz" target="_blank" rel="noopener noreferrer" className="no-underline">
						<Button variant="ghost"><Github color='white' /> Github</Button>
					</a>
				</div>
				<a href="mailto:kelvide7@gmail.com" className="no-underline">
					<Button variant="secondary" className='rounded-full p-5' size="icon">
						<Mail color='#64f4ac' />
					</Button>
				</a>
			</div>

			{/* Mobile Icon */}
			<div className='lg:hidden block' onClick={handleOpen}>
				<AlignJustify size={32} color="#ffffff" />
			</div>

			{shouldRender &&
				<div className={`w-full h-screen lg:hidden bg-secondary lg:py-10 py-7 px-5 ${isOpen ? 'animate-slideInFromLeft' : 'animate-slideOutFromRight'}`}>
					<div className='flex flex-col justify-between w-full h-full'>
						<div className='flex justify-between items-center'>
							<h1 className='text-white text-2xl'><span className='font-bold'>Kelvin</span> Ajayi</h1>
							<X onClick={handleClose} size={32} color="#ffffff" />
						</div>
						<div className='flex flex-col gap-12 text-center'>
							<CustomNavlink onClick={handleClose} customClass='text-xl' to="hero">Home</CustomNavlink>
							<CustomNavlink onClick={handleClose} customClass='text-xl' to="services">Service</CustomNavlink>
							<CustomNavlink onClick={handleClose} customClass='text-xl' to="works">Works</CustomNavlink>
							<CustomNavlink onClick={handleClose} customClass='text-xl' to="testimonies">Testimonies</CustomNavlink>
						</div>
						<div className='flex justify-between items-center'>
							<a href="https://github.com/scryptwiz" target="_blank" rel="noopener noreferrer" className="no-underline" >
								<Button variant="ghost">Github</Button>
							</a>
							<a href="https://x.com/KelvinAjayi8" target="_blank" rel="noopener noreferrer" className="no-underline">
								<Button variant="ghost">Twitter</Button>
							</a>
							<a href="mailto:kelvide7@gmail.com" className="no-underline" >
								<Button variant="ghost">Mail</Button>
							</a>
						</div>
					</div>
				</div>
			}
		</nav>
	)
}

export default Navbar