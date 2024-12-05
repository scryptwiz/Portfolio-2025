import Typist from 'react-typist-component';
import { HeroImage2 } from "@/assets/images"
import FadeInAnimation from '../common/FadeInAnimation';

const Hero = () => {
	return (
		<div className="flex flex-col items-center pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-mb:pb-32 px-5">
			<Typist typingDelay={120} cursor={<span className='cursor blink text-active'>|</span>} hideCursorWhenDone={true}>
				<h1 className="text-3xl md:text-5xl font-bold text-center">Hi,
					<span className='text-active'> Kelvin </span>
					here
					<Typist.Backspace count={4} />
					here.
				</h1>
			</Typist>
			<FadeInAnimation>
				<p className="max-w-lg mx-auto text-center font-medium mt-3 tracking-wide text-sm">I design 3D visuals and UIs for web apps and websites, and specialize in full-stack development.</p>
				<img src={HeroImage2} alt="Kelvin's hero image" className="md:max-w-lg w-full h-auto mt-8" />
			</FadeInAnimation>
		</div>
	)
}

export default Hero