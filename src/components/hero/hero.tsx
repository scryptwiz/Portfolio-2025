import Typist from 'react-typist-component';
import { HeroImage } from "@/assets/images"
import FadeInSection from "../common/fadeInSection"

const Hero = () => {
	return (
		<div className="flex flex-col items-center px-5 my-12">
			<Typist typingDelay={120} cursor={<span className='cursor blink text-active'>|</span>} hideCursorWhenDone={true}>
				<h1 className="text-5xl font-bold">Hi,
					<span className='text-active'> Kelvin </span>
					here
					<Typist.Backspace count={4} />
					here.
				</h1>
			</Typist>
			<FadeInSection>
				<p className="max-w-lg mx-auto text-center font-medium mt-3 tracking-wide text-sm">I design 3D visuals and UIs for apps and websites, and specialize in full-stack development.</p>
				<img src={HeroImage} alt="Kelvin's hero image" className="md:max-w-lg w-full h-auto mt-8" />
			</FadeInSection>
		</div>
	)
}

export default Hero