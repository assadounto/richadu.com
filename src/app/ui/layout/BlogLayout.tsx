import React, { ReactNode } from 'react';
import TableOfContents from '@/app/ui/components/Toc';
import ViewsAndLikes from '../components/ViewsAndLikes';
import Image from 'next/image';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Post } from '@/types';

interface BlogLayoutProps {
    children: ReactNode;
    post: Post;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, post }) => {
    return (
        <article className='md:px-[50px] mt-8'>
            <section className="rounded-lg shadow-lg flex flex-wrap mb-8">
                <div className="w-full md:w-2/3">
                    <Image src={post.cover} alt={post.title} width={700} height={400} className="w-full h-auto mb-4 md:mb-0" />
                </div>
                <div className="w-full md:w-1/3 flex flex-col justify-between p-4 bg-white">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                        <p className="text-gray-600 mb-4">{post.description}</p>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="text-gray-600 flex items-center">
                                <FaClock className="mr-2" />
                                {post.readTime}mins read
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <ViewsAndLikes slug={post.slug} initialViews={post.views} initialLikes={post.likes} />
                    </div>
                </div>
            </section>
            <section className=" lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
                <article className="mdx prose mx-auto mt-4 w-full">
                    {children}
                </article>
                <aside>
                    <div className="sticky w-[110px] top-36">
                        <TableOfContents headings={post.headings} />
                    </div>
                </aside>
            </section>
        </article>
    );
};

export default BlogLayout;
