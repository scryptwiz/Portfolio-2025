import React, { ReactNode } from "react";

interface FadeInAnimationProps {
	children: ReactNode;
	delay?: string;
}

export default function FadeInAnimation (props: FadeInAnimationProps) {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setVisible(entry.isIntersecting);
				}
			});
		});
		if (domRef.current) {
			observer.observe(domRef.current);
		}
		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
			}
		};
	}, []);

	return (
		<div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${props.delay}` }} ref={domRef}>
			{props.children}
		</div>
	);
}