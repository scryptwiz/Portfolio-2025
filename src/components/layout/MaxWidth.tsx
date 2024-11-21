import React, { ReactNode } from "react";

interface MaxWidthProps {
	className?: string;
	children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ className = "", children }) => {
	return (
		<div className={`app ${className}`}>
			<div className='max-screen-width mx-auto h-full'>
				{children}
			</div>
		</div>
	)
}

export default MaxWidth;