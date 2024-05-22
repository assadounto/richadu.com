import React from 'react';
import Heading from '../components/Heading';
import BlogPostCard from '../cards/BlogPostCards';
const FeaturedPosts: React.FC = () => {
    const blogPosts = [
        {
            href: '/blog/advanced-react-patterns',
            imageUrl: 'https://res.cloudinary.com/theodorusclarence/image/upload/q_auto,f_auto,c_fill,ar_5:2,w_1200/theodorusclarence/banner/robert-horvick-1R4uPYipCFM-unsplash',
            imageAlt: 'Photo taken from unsplash',
            tags: ['nextjs', 'react'],
            title: 'Advanced React Patterns',
            readTime: '10 min read',
            views: 1535,
            date: 'March 03, 2024',
            description: 'List of react advanced patterns complete with examples.',
        },
        {
            href: '/blog/advanced-react-patterns',
            imageUrl: 'https://res.cloudinary.com/theodorusclarence/image/upload/q_auto,f_auto,c_fill,ar_5:2,w_1200/theodorusclarence/banner/robert-horvick-1R4uPYipCFM-unsplash',
            imageAlt: 'Photo taken from unsplash',
            tags: ['nextjs', 'react'],
            title: 'Advanced React Patterns',
            readTime: '10 min read',
            views: 1535,
            date: 'March 03, 2024',
            description: 'List of react advanced patterns complete with examples.',
        },
        // Add more blog posts as needed
    ];
    return (
        <section className="flex justify-center lg:items-center flex-col pt-8 mt-5 bg-blue w-full" id="head">
            <div className="lg:w-2/3  p-6">
                <Heading type="h2">Featured Posts</Heading>
                <ul className="flex flex-wrap -mx-2">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} {...post} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FeaturedPosts;
