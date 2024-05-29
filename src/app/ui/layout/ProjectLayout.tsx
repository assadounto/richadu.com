import React, { ReactNode } from 'react';
import { FaCalendarAlt, FaClock, FaLink, FaTags, FaEye, FaThumbsUp, FaGithub } from 'react-icons/fa';
import TableOfContents from '@/app/ui/components/Toc';
import ViewsAndLikes from '../components/ViewsAndLikes';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectLayoutProps {
    children: ReactNode;
    project: Project;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, project }) => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <section className="flex flex-col md:flex-row mb-8">
                <div className="w-full md:w-2/3">
                    <Image
                        src={project.cover}
                        alt={project.title}
                        width={700}
                        height={400}
                        className="w-full h-auto mb-4 md:mb-0 rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/3 md:pl-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="flex items-center text-gray-600">
                                <FaCalendarAlt className="mr-2" />
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center text-gray-600">
                                <FaClock className="mr-2" />
                                {project.category}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center space-x-2 mb-4">
                            <FaTags className="text-gray-600 mr-2" />
                            {project.tags?.split(',').map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            {project.githubUrl&& (
                                <a href={project.githubUrl} className="text-blue-600 hover:underline flex items-center">
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </a>
                            )}
                            {project.demoUrl&& (
                                <a href={project.demoUrl} className="text-blue-600 hover:underline flex items-center">
                                    <FaLink className="mr-2" />
                                    Live
                                </a>
                            )}
                        </div>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Author:</span> {project.author}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Company:</span> {project.company}
                        </p>
                    </div>
                    <div className="mt-4">
                        <ViewsAndLikes
                            slug={project.slug}
                            initialViews={project.views}
                            initialLikes={project.likes}
                        />
                    </div>
                </div>
            </section>
            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
                <article className="mdx prose mx-auto mt-4 w-full">{children}</article>
                <aside className="">
                    <div className="sticky top-36">
                        <TableOfContents headings={project.headings} />
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default ProjectLayout;
