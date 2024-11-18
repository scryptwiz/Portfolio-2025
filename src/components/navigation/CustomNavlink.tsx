import React from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'

interface CustomNavLinkProps extends NavLinkProps {
	to: string;
	children: React.ReactNode;
}

const CustomNavlink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
	const location = useLocation();

	// Check if the current hash matches the `to` value
	const isActive = location.hash === to;

	return (
		<NavLink to={to} className={`relative text-base font-medium transition-all duration-300 ease-in-out hover:text-active ${isActive ? "text-active scale-105 font-bold" : "text-inherit"}`}>
			<span>
				{isActive && <p className='inline mr-2'>&lt;</p>}
				{children}
				{isActive && <p className='inline ml-2'>&gt;</p>}
			</span>
		</NavLink>
	);
};

export default CustomNavlink