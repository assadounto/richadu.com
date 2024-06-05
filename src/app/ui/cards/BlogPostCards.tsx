import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';
import Tags from '../components/Tags';
import { FaRegClock, FaRegEye } from 'react-icons/fa';
import Heading from '../components/Heading';
import { formatDate } from '@/utils';

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
        <div className="dark:bg-gray-900 dark:border shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <Link href={link}>
                <div className="cursor-pointer">
                    <article>
                        <div className="relative  h-[200px]">
                            <Image src={cover} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                        </div>
                        <div className="p-4">
                            <Tags tags={tags} />
                            <Heading type='h3' className="text-lg text-blue-600 mb-2">{title}</Heading>
                            <p className="dark:text-gray-300 text-gray-600 mb-4 overflow-hidden overflow-ellipsis">{description}</p>
                            <div className="flex justify-between items-center text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <FaRegClock className="mr-1 dark:text-white text-blue-600" />
                                    <span className='font500 text-blue-600'>{readTime} min</span>
                                </div>
                                <div className="flex items-center">
                                    <FaRegEye className="mr-1 dark:text-white text-blue-600" />
                                    <span className='font500  text-blue-600'>{views} views</span>
                                </div>
                                <span className='font500 dark:text-gray-300 text-blue-600'>{formatDate(date)}</span>
                            </div>
                        </div>
                    </article>
                </div>
            </Link>
        </div>
    );
};

export default BlogPostCard;
