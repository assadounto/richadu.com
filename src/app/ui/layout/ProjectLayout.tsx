import React, { ReactNode } from 'react';
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
        <>
            <section>
                <div className="w-full md:w-2/3">
                    <Image src={project.cover} alt={project.title} width={6} height={7} className="w-full h-auto mb-4 md:mb-0" />
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                </div>
            </section>
            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
                <article className="mdx prose mx-auto mt-4 w-full">
                    {children}
                </article>
                <aside className="">
                    <div className="sticky top-36">
                        <TableOfContents headings={project.headings} />
                    </div>
                </aside>
            </section>
        </>
    );
};

export default ProjectLayout;
