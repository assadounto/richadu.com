// pages/projects.tsx
import React from 'react';
import Heading from '../ui/components/Heading';
import ProjectCard from '../ui/cards/ProjectCard';
import { Project } from '@/types';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';


const ProjectsPage: React.FC = async() => {
    const projects = await getProjects();
    const categories = Array.from(new Set(projects.map(project => project.category)));

    return (
        <div className="container mx-auto mt-10 mb-16 px-4 py-8">
            <Heading type="h1">All Projects</Heading>
            <div className="my-16 flex flex-wrap gap-4">
                {categories.map(category => (
                    <div key={category}>
                        <Link href={`/projects/${category.toLowerCase()}`}>
                            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">{category}</span>
                        </Link>
                    </div>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};


export default ProjectsPage;
