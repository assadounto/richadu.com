// components/Innovation.tsx
import React from 'react';
import Image from 'next/image';

interface InnovationProps {
    title: string;
    description: string;
    imageUrl?: string;
}

const Innovation: React.FC<InnovationProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md my-4 flex flex-col md:flex-row">
            {imageUrl && (
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                    <Image src={imageUrl} alt={title} width={300} height={400} className="w-full  h-full rounded-lg object-cover" />
                </div>
            )}
            <div className="w-full">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default Innovation;
