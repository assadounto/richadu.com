// pages/projects.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import Heading from '../ui/components/Heading';
import ProjectCard from '../ui/cards/ProjectCard';
import { Project } from '@/types';
import { getProjects } from '@/lib/projects';

interface ProjectsPageProps {
    projects: Project[];
}

const ProjectsPage: React.FC = async() => {
    const projects = await getProjects();
    return (
        <div className="container mx-auto px-4 py-8">
            <Heading type="h1">All Projects</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};


export default ProjectsPage;
