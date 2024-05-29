import React from 'react';
import { motion } from 'framer-motion';
import { FaTags } from 'react-icons/fa';

const Tags: React.FC = ({tags=''}) => {
    return (
        <div className="flex flex-wrap items-center space-x-2 mb-4">
            <FaTags className="text-gray-600 mr-2" />
            {tags?.split(',').map((tag:string) => (
                <span
                    key={tag}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    )
};

export default Tags;
