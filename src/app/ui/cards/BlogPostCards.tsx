// components/BlogPostCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';

const BlogPostCard: React.FC<Post> = ({
    link,
    cover,
    tags,
    title,
    readTime,
    views,
    date,
    description,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link href={link}>
                <article>
                    <Image src={cover} alt={title} width={600} height={300} className="w-full object-cover" />
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tags?.split(',').map((tag, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex justify-between items-center text-gray-500 text-sm">
                            <span>{readTime}</span>
                            <span>{views} views</span>
                            <span>{date}</span>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default BlogPostCard;
