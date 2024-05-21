import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Heading from '../components/Heading';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import ProjectCard from '../cards/ProjectCard';
import Button from '../components/Button';

const FeaturedProjects: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const projects:any = [
        {
 
            title: 'Hexcape',
            description: 'A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR',
            imageUrl: '/images/metric.png',
            projectLink: '/projects/hexcape',
        },
        {
            title: 'Hexcape',
            description: 'A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR',
            imageUrl: '/images/metric.png',
            projectLink: '/projects/hexcape',
        },
        {
            title: 'Hexcape',
            description: 'A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR',
            imageUrl: '/images/metric.png',
            projectLink: '/projects/hexcape',
        },
        // Add more projects as needed
    ];

    return (
        <motion.section
            ref={ref}
            className={`flex pt-24 lg:pt-[6rem] lg:items-center flex-col bg-blue w-full`}
            id="featured"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="lg:w-2/3 bg-white p-6">
                <Heading type="h2">Featured Projects</Heading>
                <p className="max-w-[650px] my-10 font500 text-[16px] lg:text-base text-body">
                    I&apos;m a software developer! I can help you build a product, feature or website.
                    Look through some of my work and experience! If you like what you see and have a
                    project you need coded, don&apos;t hesitate to contact me.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectLink={project.projectLink}
                            techStackIcons={project.techStackIcons}
                        />
                    ))}
                    <div className="justify-center flex items-center mt-6">
                        <Button>See more →</Button>
                    </div>
                </div>
                
            </div>
        </motion.section>
    );
};

export default FeaturedProjects;
