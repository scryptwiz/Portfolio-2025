import { Github, Mail, Twitter } from 'lucide-react'
import { Button } from '../ui/button'
import CustomNavlink from './CustomNavlink'

const Navbar = () => {
	return (
		<nav className='w-full flex justify-between items-center py-10 px-5'>
			<div className='flex justify-between items-center gap-16'>
				<h1 className='text-white text-2xl'><span className='font-bold'>Kelvin</span> Ajayi</h1>
				<div className='flex gap-6 tracking-widest items-center'>
					<CustomNavlink to="#services">Service</CustomNavlink>
					<CustomNavlink to="#works">Works</CustomNavlink>
					<CustomNavlink to="#testimonies">Testimonies</CustomNavlink>
					<CustomNavlink to="#contacts">Contacts</CustomNavlink>
				</div>
			</div>
			<div className='flex items-center gap-5'>
				<div className='flex gap-2 items-center tracking-widest text-lg'>
					<Button variant="ghost"><Twitter color='white' /> Twitter</Button>
					<Button variant="ghost"><Github color='white' /> Github</Button>
				</div>
				<Button variant="secondary" className='rounded-full p-5' size="icon">
					<Mail color='#64f4ac' />
				</Button>
			</div>
		</nav>
	)
}

export default Navbar