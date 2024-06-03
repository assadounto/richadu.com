import React from 'react';
import Button from '../components/Button';
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
                <Heading   className='text-right my-10' type="h2">Featured Posts</Heading>
                <ul className="flex flex-wrap -mx-2">
                    {posts.slice(0,3).map((post, index) => (
                        <li key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-10">
                            <BlogCard {...post} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:mr-16 p-4 self-end flex items-center mt-6">
                <Button href='/blog'>See more →</Button>
            </div>
        </section>
    );
};

export default FeaturedPosts;
