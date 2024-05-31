// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Tags from '../components/Tags';
import Heading from '../components/Heading';

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
        <div className="dark:border-[0.5px] dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <Link href={link}>
                    <span>
                        <Image src={cover} alt={title} width={600} height={300} className="w-full object-cover" />
                    </span>
                </Link>
                {demoUrl && (
                    <Link href={demoUrl} className="absolute hidden hover:flex top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg">
                        <FaExternalLinkAlt />
                    </Link>
                )}
            </div>
            <div className="p-4">
                <Heading type='h3' className="text-lg  mb-2">
                    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="text-blue-600 dark:text-white hover:underline">{title}</span>
                    </Link>
                </Heading>
                <p className="dark:text-gray-300 text-gray-600 mb-4">{description}</p>
                <Tags tags={tags} />
                <div className="flex justify-between items-center mt-4">
                    {githubUrl && (
                        <Link href={githubUrl} className="text-blue-600 dark:text-white hover:underline">
                            <FaGithub size={20} />
                        </Link>
                    )}
                    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="inline dark:text-gray-300 text-blue-600 hover:underline">
                            See More
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
