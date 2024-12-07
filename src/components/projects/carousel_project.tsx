import React from "react";
import FadeInAnimation from "../common/FadeInAnimation";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

// Define a TypeScript type for project data
interface Project {
	title: string;
	description: string;
	techStack: string;
	image: string;
	images: string[];
	altText: string;
	redirectUrl: string;
}

const Carousel_Project: React.FC = () => {
	const projectsData: Project[] = [
		{
			title: "ECLA",
			description: "ECLA Website",
			techStack: "React.Js | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=ECLA+Project",
			images: [
				"https://via.placeholder.com/800x400?text=ECLA+Image1",
				"https://via.placeholder.com/800x400?text=ECLA+Image2",
			],
			altText: "ECLA Project",
			redirectUrl: "https://eclanft.netlify.app/",
		},
		{
			title: "CyberQueens",
			description: "CyberQueens Website",
			techStack: "React | TailwindCSS | Contentful",
			image: "https://via.placeholder.com/400x200?text=CyberQueens+Project",
			images: [
				"https://via.placeholder.com/800x400?text=CyberQueens+Image1",
				"https://via.placeholder.com/800x400?text=CyberQueens+Image2",
			],
			altText: "CyberQueens Project",
			redirectUrl: "https://cyberqueennft.netlify.app/",
		},
		{
			title: "Pubbles",
			description: "Pubbles Website",
			techStack: "React | TailwindCSS | Contentful",
			image: "https://via.placeholder.com/400x200?text=Pubbles+Project",
			images: [
				"https://via.placeholder.com/800x400?text=Pubbles+Image1",
				"https://via.placeholder.com/800x400?text=Pubbles+Image2",
			],
			altText: "Pubbles Project",
			redirectUrl: "https://pubblesnft.netlify.app/",
		},
		{
			title: "Apein",
			description: "Apein Website",
			techStack: "React | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=Apein+Project",
			images: [
				"https://via.placeholder.com/800x400?text=Apein+Image1",
				"https://via.placeholder.com/800x400?text=Apein+Image2",
			],
			altText: "Apein Project",
			redirectUrl: "https://apein.netlify.app/",
		},
		{
			title: "Twitter",
			description: "Twitter Clone",
			techStack: "React | TailwindCSS | Sanity.io",
			image: "https://via.placeholder.com/400x200?text=Twitter+Clone",
			images: [
				"https://via.placeholder.com/800x400?text=TwitterClone+Image1",
				"https://via.placeholder.com/800x400?text=TwitterClone+Image2",
			],
			altText: "Twitter Clone",
			redirectUrl: "https://kelvtwitter.netlify.app",
		},
		{
			title: "Medium Clone",
			description: "Medium Clone",
			techStack: "Next.Js | TailwindCSS | Sanity.io",
			image: "https://via.placeholder.com/400x200?text=Medium+Clone",
			images: [
				"https://via.placeholder.com/800x400?text=MediumClone+Image1",
				"https://via.placeholder.com/800x400?text=MediumClone+Image2",
			],
			altText: "Medium Clone",
			redirectUrl: "https://kelvin-medium-blog.vercel.app/",
		},
		{
			title: "Scientific Calculator",
			description: "Scientific Calculator",
			techStack: "Javascript | CSS | HTML",
			image: "https://via.placeholder.com/400x200?text=Calculator+Project",
			images: [
				"https://via.placeholder.com/800x400?text=CalculatorImage1",
				"https://via.placeholder.com/800x400?text=CalculatorImage2",
			],
			altText: "Scientific Calculator",
			redirectUrl: "https://kelv-calculator-scientific-version.vercel.app/",
		},
		{
			title: "Task Tracker",
			description: "Task Tracker",
			techStack: "React.Js | TailwindCSS",
			image: "https://via.placeholder.com/400x200?text=Task+Tracker",
			images: [
				"https://via.placeholder.com/800x400?text=TaskTrackerImage1",
				"https://via.placeholder.com/800x400?text=TaskTrackerImage2",
			],
			altText: "Task Tracker",
			redirectUrl: "https://to-do-tasktracker.netlify.app/",
		},
		{
			title: "Tic Tac Toe",
			description: "Tic Tac Toe",
			techStack: "JavaScript | CSS | HTML",
			image: "https://via.placeholder.com/400x200?text=Tic+Tac+Toe",
			images: [
				"https://via.placeholder.com/800x400?text=TicTacToeImage1",
				"https://via.placeholder.com/800x400?text=TicTacToeImage2",
			],
			altText: "Tic Tac Toe",
			redirectUrl: "https://tic-tac-toe-game-js-rust.vercel.app/",
		},
	];


	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: false })
	);

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<section className="py-20">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-white text-3xl md:text-4xl font-bold">Latest Works</h2>
				</div>

				{/* Projects Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projectsData.map((project, index) => (
						<FadeInAnimation key={index} delay={`${index + 1}00ms`}>
							<Dialog>
								<DialogTrigger asChild>
									<div className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition cursor-pointer">
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
											<p className="text-white text-center text-lg mb-3">
												{project.description}
											</p>
										</div>
									</div>
								</DialogTrigger>

								{/* Dialog Content */}
								<DialogContent className="bg-black rounded-xl border-primary border-2 p-7">
									<DialogHeader>
										<DialogTitle>{project.title}</DialogTitle>
										<DialogDescription className="text-gray-400 font-semibold">{project.description}</DialogDescription>
									</DialogHeader>
									{/* Carousel */}
									<Carousel
										setApi={setApi}
										plugins={[plugin.current]}
										className="max-w-4xl mx-auto mt-4"
										onMouseLeave={plugin.current.reset}
									>
										<CarouselContent>
											{project.images.map((image, i) => (
												<CarouselItem key={i}>
													<img src={image} alt={`${project.title} Image ${i + 1}`} className="w-full rounded-[7px]" />
												</CarouselItem>
											))}
										</CarouselContent>

										{/* Carousel Controls */}
										{/* <CarouselPrevious /> */}
										{/* <CarouselNext /> */}
									</Carousel>
									<div className="py-2 text-center text-sm text-muted-foreground">
										Slide {current} of {count}
									</div>

									{/* Redirect Button */}
									<DialogFooter>
										<div className="flex justify-end mt-4">
											<a href={project.redirectUrl} target="_blank" rel="noopener noreferrer" className="underline-none">
												<Button variant="secondary" className='rounded-[7px] p-5'><Link /> Link</Button>
											</a>
										</div>
									</DialogFooter>
								</DialogContent>
							</Dialog>
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

export default Carousel_Project