import { AlignJustify, Github, Mail, Twitter, X } from 'lucide-react'
import { Button } from '../ui/button'
import CustomNavlink from './CustomNavlink'
import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className='w-full flex justify-between items-center lg:py-10 py-7 px-5'>
			<div className='flex justify-between items-center gap-16'>
				<h1 className='text-white text-2xl'><span className='font-bold'>Kelvin</span> Ajayi</h1>
				<div className='lg:flex hidden gap-6 tracking-widest items-center'>
					<CustomNavlink customClass='text-base' to="#services">Service</CustomNavlink>
					<CustomNavlink customClass='text-base' to="#works">Works</CustomNavlink>
					<CustomNavlink customClass='text-base' to="#testimonies">Testimonies</CustomNavlink>
					<CustomNavlink customClass='text-base' to="#contacts">Contacts</CustomNavlink>
				</div>
			</div>
			<div className='lg:flex hidden items-center gap-5'>
				<div className='flex gap-2 items-center tracking-widest text-lg'>
					<Button variant="ghost"><Twitter color='white' /> Twitter</Button>
					<Button variant="ghost"><Github color='white' /> Github</Button>
				</div>
				<Button variant="secondary" className='rounded-full p-5' size="icon">
					<Mail color='#64f4ac' />
				</Button>
			</div>

			{/* Mobile Icon */}
			<div className='lg:hidden block' onClick={() => setIsOpen(!isOpen)}>
				<AlignJustify size={32} color="#ffffff" />
			</div>

			{isOpen &&
				<div className='fixed top-0 left-0 w-full h-screen lg:hidden bg-secondary lg:py-10 py-7 px-5'>
					<div className='flex flex-col justify-between w-full h-full'>
						<div className='flex justify-between items-center'>
							<h1 className='text-white text-2xl'><span className='font-bold'>Kelvin</span> Ajayi</h1>
							<X onClick={() => setIsOpen(!isOpen)} size={32} color="#ffffff" />
						</div>
						<div className='flex flex-col gap-12 text-center'>
							<CustomNavlink customClass='text-xl' to="#services">Service</CustomNavlink>
							<CustomNavlink customClass='text-xl' to="#works">Works</CustomNavlink>
							<CustomNavlink customClass='text-xl' to="#testimonies">Testimonies</CustomNavlink>
							<CustomNavlink customClass='text-xl' to="#contacts">Contacts</CustomNavlink>
						</div>
						<div className='flex justify-between items-center'>
							<Button variant="ghost">Facebook</Button>
							<Button variant="ghost">Instagram</Button>
							<Button variant="ghost">Twitter</Button>
						</div>
					</div>
				</div>
			}
		</nav>
	)
}

export default Navbar