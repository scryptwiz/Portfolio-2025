import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { NavLinkProps } from 'react-router-dom'

interface CustomNavLinkProps extends NavLinkProps {
	to: string;
	children: React.ReactNode;
	customClass?: string;
}


const CustomNavlink: React.FC<CustomNavLinkProps> = ({ to, children, customClass }) => {

	return (
		<LinkScroll to={to} offset={-100} activeClass="active-nav" spy smooth className={`relative font-medium transition-all duration-500 ease-in-out cursor-pointer hover:text-active ${customClass}`}>
			<span>
				{children}
			</span>
		</LinkScroll>
	);
};

export default CustomNavlink