import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import React from "react";

const Testimonials = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	);

	const testimonials = [
		{
			id: 1,
			rating: 5.0,
			feedback:
				"Daniel was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish.",
			name: "Benjamin Bryant",
			role: "VP & Co-Founder",
			company: "Wiser",
			avatar: "https://via.placeholder.com/64x64", // Replace with the actual avatar image URL
		},
		{
			id: 2,
			rating: 5.0,
			feedback:
				"Working with Daniel has been one of the most seamless experiences. His attention to detail and professionalism exceeded expectations.",
			name: "Raaid Hossain",
			role: "Project Management",
			company: "Focuslab",
			avatar: "https://via.placeholder.com/64x64", // Replace with the actual avatar image URL
		},
		{
			id: 3,
			rating: 5.0,
			feedback:
				"Daniel delivered exceptional designs with a clear focus on user experience. Highly recommend him for any project.",
			name: "Logan Cee",
			role: "UI/UX Designer",
			company: "LoganCee",
			avatar: "https://via.placeholder.com/64x64", // Replace with the actual avatar image URL
		},
	];
	return (
		<section className="py-20 text-gray-300">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
					<p className="text-gray-400 mt-2">What clients say about me</p>
				</div>

				{/* Carousel */}
				<Carousel
					plugins={[plugin.current]}
					className="w-full max-w-4xl mx-auto"
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id}>
								<div className="p-4">
									<Card>
										<CardContent className="p-6 rounded-xl bg-secondary">
											{/* Testimonial Content */}
											<div className="mb-6">
												<div className="flex items-center mb-4">
													{/* Star Rating */}
													<div className="flex space-x-1 text-green-400">
														{Array.from({ length: testimonial.rating }).map((_, idx) => (
															<span key={idx}>&#9733;</span> // Star Icon
														))}
													</div>
													<p className="ml-2 text-sm text-gray-400">
														{testimonial.rating.toFixed(1)} Rating
													</p>
												</div>
												<p className="text-lg text-gray-300 italic">
													"{testimonial.feedback}"
												</p>
											</div>

											{/* Avatar and User Info */}
											<div className="flex items-center">
												<img
													src={testimonial.avatar}
													alt={testimonial.name}
													className="w-12 h-12 rounded-full mr-4"
												/>
												<div>
													<h4 className="text-white font-bold">{testimonial.name}</h4>
													<p className="text-gray-400 text-sm">
														{testimonial.role},{" "}
														<span className="text-green-400">{testimonial.company}</span>
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Carousel Controls */}
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}

export default Testimonials