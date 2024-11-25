import React, { ReactNode } from "react";

interface MaxWidthProps {
	className?: string;
	id?: string;
	children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ className = "", children, id }) => {
	return (
		<div id={`${id}`} className={`app ${className}`}>
			<div className='max-screen-width mx-auto h-full'>
				{children}
			</div>
		</div>
	)
}

export default MaxWidth;