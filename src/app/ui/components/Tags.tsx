import React from 'react';
import { FaTags } from 'react-icons/fa';

interface TagsProps {
    tags: string;
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className="flex mt-4 flex-wrap items-center space-x-2 mb-4">
            <FaTags className="text-gray-600 mr-2" />
            {tags?.split(',').map((tag: string) => (
                <span
                    key={tag.trim()}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                >
                    {tag.trim()}
                </span>
            ))}
        </div>
    );
};

export default Tags;
