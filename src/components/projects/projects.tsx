import FadeInAnimation from "../common/FadeInAnimation";

const projects = () => {
	const projectsData = [
		{
			title: "ECLA",
			description: "ECLA Website",
			techStack: "React.Js | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=ECLA+Project",
			altText: "ECLA Project",
			redirectUrl: "https://eclanft.netlify.app/"
		},
		{
			title: "CyberQueens",
			description: "CyberQueens Website",
			techStack: "React | TailwindCSS | Contentful",
			image: "https://via.placeholder.com/400x200?text=CyberQueens+Project",
			altText: "CyberQueens Project",
			redirectUrl: "https://cyberqueensnfts.netlify.app/"
		},
		{
			title: "Pubbles",
			description: "Pubbles Website",
			techStack: "React | TailwindCSS | Contentful",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Pubbles Project",
			redirectUrl: "https://pubblesnft.netlify.app/"
		},
		{
			title: "Apein",
			description: "Apein Website",
			techStack: "React | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Apein Project",
			redirectUrl: "https://apein.netlify.app/"
		},
		{
			title: "Twitter",
			description: "Twitter Clone",
			techStack: "React | TailwindCSS | Sanity.io",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Twitter Clone",
			redirectUrl: "https://kelvtwitter.netlify.app"
		},
		{
			title: "Medium Clone",
			description: "Medium Clone",
			techStack: "Next.Js | TailwindCSS | Sanity.io",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Twitter Clone",
			redirectUrl: "https://kelvin-medium-blog.vercel.app/"
		},
		{
			title: "Scientific Calculator",
			description: "Scientific Calculator",
			techStack: "Javascript | CSS | HTML",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Scientific Calculator",
			redirectUrl: "https://kelv-calculator-scientific-version.vercel.app/"
		},
		{
			title: "Task Tracker",
			description: "Task Tracker",
			techStack: "React.Js | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Task Tracker",
			redirectUrl: "https://to-do-tasktracker.netlify.app/"
		},
		{
			title: "Tic Tac Toe",
			description: "Tic Tac Toe",
			techStack: "JavaScript | CSS | HTML",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			altText: "Tic Tac Toe",
			redirectUrl: "https://tic-tac-toe-game-js-rust.vercel.app/"
		},
	];

	return (
		<section className="py-20">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-white text-3xl md:text-4xl font-bold">Latest Works</h2>
					{/* <p className="text-gray-400 mt-2">Perfect solutions for digital experience</p> */}
				</div>

				{/* Projects Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projectsData.map((project, index) => (
						<FadeInAnimation delay={`${index + 1}00ms`}>
							<div className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition">
								<a
									href={project.redirectUrl}
									key={index}
									target="_blank"
									rel="noopener noreferrer"
								>
									{/* Project Image */}
									<img
										src={project.image}
										alt={project.altText}
										className="w-full h-48 object-cover rounded-xl"
									/>

									{/* Project Info */}
									<div className="mt-4">
										<h3 className="text-white text-xl font-semibold">{project.title}</h3>
										<p className="text-gray-400 text-sm mt-1">{project.techStack}</p>
									</div>

									{/* Overlay Description */}
									<div className="absolute inset-0 bg-black duration-700 bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition rounded-xl">
										<p className="text-white text-center text-lg mb-3">{project.description}</p>
									</div>
								</a>
							</div>
						</FadeInAnimation>
					))}
				</div>

				{/* Footer */}
				<div className="text-center mt-12">
					<a
						href="/projects"
						className="text-green-400 font-bold hover:underline text-lg"
					>
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