// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard: React.FC<Project> = ({
    title,
    description,
    cover,
    tags,
    link,
    demoUrl,
    githubUrl,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <Link href={link}>
                    <span>
                        <Image src={cover} alt={title} width={600} height={300} className="w-full object-cover" />
                    </span>
                </Link>
                {demoUrl && (
                    <a href={demoUrl} className="absolute hidden hover:flex top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg">
                        <FaExternalLinkAlt />
                    </a>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="text-blue-600 hover:underline">{title}</span>
                    </Link>
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags?.split(',').map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    {githubUrl && (
                        <a href={githubUrl} className="text-blue-600 hover:underline">
                            <FaGithub /> GitHub
                        </a>
                    )}
                    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="text-blue-600 hover:underline">
                            <FaExternalLinkAlt /> See More
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
