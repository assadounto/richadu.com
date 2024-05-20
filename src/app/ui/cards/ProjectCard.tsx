import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../components/Heading';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
    techStackIcons: JSX.Element[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink, techStackIcons }) => {
    return (
        <motion.li
            className="project-card rounded-md w-full border dark:border-gray-600 scale-100 hover:scale-105 active:scale-95 motion-safe:transform-gpu transition duration-300 motion-reduce:hover:scale-100 animate-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                className="flex h-[400px] flex-col items-start rounded-md p-5 focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                href={projectLink}
            >
                <Heading type='h3'>{title}</Heading>
                <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">{description}</p>
                <div className="mt-2">
                    <ul className="flex gap-2">
                        {techStackIcons.map((icon, index) => (
                            <li key={index} className="text-xl text-gray-700 dark:text-gray-200">
                                {icon}
                            </li>
                        ))}
                    </ul>
                </div>
                <figure className="pointer-events-none mt-3 w-full overflow-hidden rounded shadow dark:shadow-none">
                    <div className="relative h-0" style={{ paddingTop: '55%' }}>
                        <Image
                            className="absolute left-0 top-0 w-full h-full object-cover rounded"
                            src={imageUrl}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </figure>

                <p className="animated-underline mt-2 inline-block font-medium">see more →</p>
            </Link>
        </motion.li>
    );
};

export default ProjectCard;
