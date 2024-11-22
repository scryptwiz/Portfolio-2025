import Card from "./card"

const Introduction = () => {
	return (
		<div className='flex md:flex-row flex-col-reverse justify-between items-center py-12 gap-10'>
			<div className='md:w-1/2 w-full flex flex-col gap-3 shadow-xl'>
				<Card />
				<Card />
				<Card />
			</div>
			<div className='md:w-1/2 w-full flex flex-col gap-7'>
				<p className='tracking-wider text-sm'>Introduce</p>
				<h1 className='font-medium text-5xl tracking-wider'>Hello! I'm Kelvin Ajayi</h1>
				<p className='text-2xl italic tracking-wider'>Every great design with an even better story</p>
				<p className='text-sm tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia eius officiis impedit iste reprehenderit modi, delectus ipsam! Consequuntur corrupti ut quam nostrum quas perferendis aut necessitatibus iusto consectetur eius.</p>
			</div>
		</div>
	)
}

export default Introduction