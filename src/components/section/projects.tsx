const projects = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-white text-3xl md:text-4xl font-bold">Latest Works</h2>
					<p className="text-gray-400 mt-2">Perfect solutions for digital experience</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition">
						<img src="https://via.placeholder.com/400x200?text=Lewis+Project" className="w-full h-40 object-cover rounded-xl" />
						<div className="mt-4">
							<h3 className="text-white text-xl font-semibold">Lewis</h3>
							<p className="text-gray-400 text-sm mt-1">Javascript | PHP</p>
						</div>
						<div className="absolute inset-0 bg-black duration-700 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition rounded-xl ">
							<p className="text-white text-center text-lg">Lewis Creativity Studio</p>
						</div>
					</div>

					<div className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition">
						<img src="https://via.placeholder.com/400x200?text=Finaco+Project" alt="Finaco Project" className="w-full h-40 object-cover rounded-xl" />
						<div className="mt-4">
							<h3 className="text-white text-xl font-semibold">Finaco</h3>
							<p className="text-gray-400 text-sm mt-1">GatsbyJS | React | HTML</p>
						</div>
						<div className="absolute inset-0 bg-black duration-700 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition rounded-xl ">
							<p className="text-white text-center text-lg">Finaco Dashboard</p>
						</div>
					</div>

					<div className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition">
						<img src="https://via.placeholder.com/400x200?text=Focus+Project" alt="Focus Project" className="w-full h-40 object-cover rounded-xl" />
						<div className="mt-4">
							<h3 className="text-white text-xl font-semibold">Focus</h3>
							<p className="text-gray-400 text-sm mt-1">React | HTML</p>
						</div>
						<div className="absolute inset-0 bg-black duration-700 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition rounded-xl ">
							<p className="text-white text-center text-lg">Focus Task Manager</p>
						</div>
					</div>
				</div>

				<div className="text-center mt-12">
					<a href="/projects" className="text-green-400 font-bold hover:underline text-lg">
						ALL PROJECTS
					</a>
					<p className="text-gray-400 mt-2 text-sm">
						* Some projects are not published due to NDA. Contact me for more.
					</p>
				</div>
			</div>
		</section>
	)
}

export default projects