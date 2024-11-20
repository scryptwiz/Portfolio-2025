import React, { ReactNode } from "react";

interface MaxWidthProps {
	bgColor?: string;
	children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ bgColor = "", children }) => {
	return (
		<div className={`app ${bgColor}`}>
			<div className='max-screen-width mx-auto'>
				{children}
			</div>
		</div>
	)
}

export default MaxWidth