import React, { ReactNode } from 'react';
import TableOfContents from '@/app/ui/components/Toc';
import ViewsAndLikes from '../components/ViewsAndLikes';
import Image from 'next/image';
import { FaCalendarAlt, FaEye, FaClock } from 'react-icons/fa';
import { Post } from '@/types';
import { WiTime7 } from "react-icons/wi";
import { TbEye } from "react-icons/tb";

import Tags from '../components/Tags';
import Heading from '../components/Heading';
import { formatDate } from '@/utils';

interface BlogLayoutProps {
    children: ReactNode;
    post: Post;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, post }) => {
    return (
        <article className='md:px-[50px] pb-16 dark:text-white mt-8'>
            <section className="flex-wrap mb-8">

                <div className="w-full">
                    <Image src={post.cover} alt={post.title} width={600} height={400} className="w-full h-[400px] mb-4 md:mb-0" />
                </div>
                <div className="w-full border-b flex mt-5 flex-col p-4 ">
                    <div className=''>
                        <Heading type='h2' className="text-gray-800 mb-2">{post.title}</Heading>
                        <p className="text-gray-600 dark:text-white ">Written by {post.author} on {formatDate(post.date)}</p>
                        <div className="flex dark:text-white items-center space-x-4">
                            <span className="text-gray-600 dark:text-white flex items-center">
                                <WiTime7 className="mr-2 dark:text-white text-gray-600" />
                                {post.readTime}mins read
                            </span>
                            <Tags tags={post.tags} />
                            <TbEye className="dark:text-white text-sm" />
                            <span className="text-sm">{post.views}</span>
                        </div>
                    </div>

                </div>
            </section>
            <section className=" lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
                <article className="mdx prose mx-auto mt-4 w-full">
                    {children}
                </article>
                <aside>
                    <div className="sticky top-36">
                        <TableOfContents headings={post.headings} />
                    </div>
                </aside>
            </section>
        </article>
    );
};

export default BlogLayout;
