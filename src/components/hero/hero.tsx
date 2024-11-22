import { HeroImage } from "@/assets/images"

const Hero = () => {
	return (
		<div className="flex flex-col items-center px-5 my-12">
			<h1 className="text-5xl font-bold">Hi, I'm Kelvin</h1>
			<p className="max-w-lg mx-auto text-center font-medium mt-3 tracking-wide text-sm">I design 3D visuals and UIs for apps and websites, and specialize in full-stack development.</p>
			<img src={HeroImage} alt="Kelvin's hero image" className="md:max-w-lg w-full h-auto mt-8" />
		</div>
	)
}

export default Hero