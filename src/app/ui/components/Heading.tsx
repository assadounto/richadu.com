import React from 'react';
import clsx from 'clsx';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}


interface HeadingProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}

const headingClasses = {
    h1: 'text-5xl font800',
    h2: 'text-4xl font500',
    h3: 'text-3xl font300',
    h4: 'text-2xl font300',
    h5: 'text-lg font300',
    h6: 'text-base font-thin',
};

const Heading: React.FC<HeadingProps> = ({ children, type, className, ...props }) => {
    const defaultClasses = ' text-primary dark:text-white';
    const typeClasses = headingClasses[type];
    const combinedClasses = clsx(defaultClasses, typeClasses, className);

    return React.createElement(type, { className: combinedClasses, ...props }, children);
};

export default Heading;
