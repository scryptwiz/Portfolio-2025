import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { NavLinkProps, useLocation } from 'react-router-dom'

interface CustomNavLinkProps extends NavLinkProps {
	to: string;
	children: React.ReactNode;
	customClass?: string;
}


const CustomNavlink: React.FC<CustomNavLinkProps> = ({ to, children, customClass }) => {
	const location = useLocation();
	const isActive = location.hash === to;

	return (
		<LinkScroll to={to} offset={-100} spy smooth className={`relative font-medium transition-all duration-700 ease-in-out cursor-pointer hover:text-active ${isActive ? "text-active scale-110 font-bold" : "text-inherit"} ${customClass}`}>
			<span>
				{isActive && <p className='inline mr-1'>&lt;</p>}
				{children}
				{isActive && <p className='inline ml-1'>&gt;</p>}
			</span>
		</LinkScroll>
	);
};

export default CustomNavlink