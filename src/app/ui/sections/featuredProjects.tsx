
import Heading from '../components/Heading';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import ProjectCard from '../cards/ProjectCard';
import Button from '../components/Button';
import { getProjects } from '@/lib/projects';

const FeaturedProjects: React.FC = async() => {

    const projects=await getProjects()

    return (
        <section
            className={`flex justify-center lg:items-center flex-col pt-8 mt-5 bg-blue w-full`}
            id="featured"
        >
            <div className="lg:w-[90%]  p-4">
                <Heading className='text-link' type="h2">Featured Projects</Heading>
                <p className="max-w-[650px] dark:text-white my-10  text-[16px]  text-gray-600">
                    I&apos;m a software developer! I can help you build a product, feature or website.
                    Look through some of my work and experience! If you like what you see and have a
                    project you need coded, don&apos;t hesitate to contact me.
                </p>
                <ul className="flex flex-wrap -mx-2">
                    {projects.map((project, index) => (
                         <li key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                        <ProjectCard
                            key={index}
                          {...project}

                        />
                        </li>
                    ))}
                </ul>
                <div className=" p-4 self-start flex items-center mt-6">
                    <Button>See more →</Button>
                </div>
                </div>

            
        </section>
    );
};

export default FeaturedProjects;
