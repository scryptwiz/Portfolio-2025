import React, {ReactNode} from "react";
import {Element} from "react-scroll";

interface MaxWidthProps {
    className?: string;
    id: string;
    children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({className = "", children, id}) => {
    return (
        <Element name={id}>
            <div id={`${id}`} className={`app ${className}`}>
                <div className='max-screen-width mx-auto h-full'>
                    {children}
                </div>
            </div>
        </Element>
    )
}

export default MaxWidth;