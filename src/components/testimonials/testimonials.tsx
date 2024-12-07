import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import React from "react";

const Testimonials = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const testimonials = [
		{
			id: 1,
			rating: 4.5,
			feedback:
				"Kelvin was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish.",
			name: "Benjamin Bryant",
			role: "VP & Co-Founder",
			company: "Wiser",
			avatar: "https://via.placeholder.com/64x64", // Replace with the actual avatar image URL
		},
		{
			id: 2,
			rating: 5.0,
			feedback:
				"Working with Kelvin has been one of the most seamless experiences. His attention to detail and professionalism exceeded expectations.",
			name: "Raaid Hossain",
			role: "Project Management",
			company: "Focuslab",
			avatar: "https://via.placeholder.com/64x64",
		},
		{
			id: 3,
			rating: 4.0,
			feedback:
				"Kelvin delivered exceptional designs with a clear focus on user experience. Highly recommend him for any project.",
			name: "Logan Cee",
			role: "UI/UX Designer",
			company: "LoganCee",
			avatar: "https://via.placeholder.com/64x64",
		},
	];

	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating); // Count of full stars
		const hasHalfStar = rating % 1 !== 0; // Check if there's a half-star
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

		return (
			<>
				{/* Full Stars */}
				{Array.from({ length: fullStars }).map((_, idx) => (
					<span key={`full-${idx}`}>&#9733;</span>
				))}
				{/* Half Star */}
				{hasHalfStar && <span>&#189;</span>}
				{/* Empty Stars */}
				{Array.from({ length: emptyStars }).map((_, idx) => (
					<span key={`empty-${idx}`} className="text-gray-400">
						&#9734;
					</span>
				))}
			</>
		);
	};

	return (
		<section className="py-20 text-gray-300">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
					<p className="text-gray-400 md:text-base text-sm mt-2">What clients say about me</p>
				</div>

				{/* Carousel */}
				<Carousel
					plugins={[plugin.current]}
					className="w-[80%] max-w-4xl mx-auto"
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id}>
								<div className="md:p-4 p-0">
									<Card>
										<CardContent className="p-6 rounded-xl bg-secondary">
											{/* Testimonial Content */}
											<div className="mb-6">
												<div className="flex items-center mb-4 md:text-base text-sm">
													{/* Star Rating */}
													<div className="flex space-x-1 text-green-400">
														{renderStars(testimonial.rating)}
													</div>
													<p className="ml-2 text-sm text-gray-400">
														{testimonial.rating.toFixed(1)} Rating
													</p>
												</div>
												<p className="md:text-lg text-sm text-gray-300 italic">
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
													<h4 className="text-white md:text-base text-xs tracking-wider font-bold">{testimonial.name}</h4>
													<p className="text-gray-400 md:text-sm text-xs">
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
	);
};

export default Testimonials;
