import React from 'react';
import { BsTags } from "react-icons/bs";

interface TagsProps {
    tags: string;
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className="flex mt-4  gap-2 flex-wrap items-center  mb-4">
            <BsTags className="dark:text-gray-300text-gray-600 mr-2" />
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
