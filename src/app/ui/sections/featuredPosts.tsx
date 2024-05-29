import React from 'react';
import { getPosts } from "@/lib/posts";
import Heading from '../components/Heading';
import BlogCard from '../cards/BlogPostCards';
import { Post } from '@/types';

interface FeaturedPostsProps {
    posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {

   
    return (
        <section className="flex justify-center lg:items-center flex-col pt-8 mt-5 bg-blue w-full" id="head">
            <div className="lg:w-[90%] p-4">
                <Heading   className='text-right my-10 text-primary' type="h2">Featured Posts</Heading>
                <ul className="flex flex-wrap -mx-2">
                    {posts.map((post, index) => (
                        <li key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                            <BlogCard {...post} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FeaturedPosts;
