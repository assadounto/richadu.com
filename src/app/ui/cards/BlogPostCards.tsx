import React from 'react';
import Link from 'next/link';

interface BlogPostCardProps {
    href: string;
    imageUrl: string;
    imageAlt: string;
    tags: string[];
    title: string;
    readTime: string;
    views: number;
    date: string;
    description: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
    href,
    imageUrl,
    imageAlt,
    tags,
    title,
    readTime,
    views,
    date,
    description,
}) => {
    return (
        <li className="w-full sm:w-1/2 md:w-3/3 lg:w-2/4 p-2">
            <Link href={href}>
                <article className="block h-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
                    <div className="relative">
                        <figure className="pointer-events-none overflow-hidden rounded-t-md">
                            <div className="relative" style={{ height: '0', paddingTop: '56.25%' }}>
                                <div className="absolute left-0 top-0 w-full h-full">
                                    <img
                                        alt={imageAlt}
                                        title={imageAlt}
                                        src={imageUrl}
                                        className="absolute inset-0 box-border p-0 border-none m-auto block w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </figure>
                        <div className="absolute bottom-0 w-full px-4 py-2 mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-black dark:text-gray-100">
                            {tags.map((tag, index) => (
                                <button
                                    key={index}
                                    className="bg-opacity-80 dark:!bg-opacity-60 inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
                                    tabIndex={-1}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-4">
                        <h4 className="text-gray-800 dark:text-primary text-lg">{title}</h4>
                        <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-primary">
                            <div className="flex items-center gap-1">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="inline-block text-base"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="transition-colors bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-primary">
                                    {readTime}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="inline-block text-base"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                <span className="transition-colors bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-primary">
                                    {views.toLocaleString()} views
                                </span>
                            </div>
                        </div>
                        <p className="mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-bold text-gray-800 dark:text-primary">{date}</span>
                        </p>
                        <p className="text-sm text-gray-700 dark:text-primary">{description}</p>
                    </div>
                </article>
            </Link>
        </li>
    );
};

export default BlogPostCard;
