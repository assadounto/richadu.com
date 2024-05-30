import React from 'react';
import Heading from './Heading';

interface SectionWithBubblesProps {
    title: string;
    children: React.ReactNode
}

const SectionWithBubbles: React.FC<SectionWithBubblesProps> = ({ title, children }) => {
    return (
        <div className="mb-8">
            <Heading type='h3' className="text-gray-600  mb-2">{title}</Heading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    );
};

export default SectionWithBubbles;
