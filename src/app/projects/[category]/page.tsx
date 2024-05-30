import ProjectCard from "@/app/ui/cards/ProjectCard";
import { Project } from "@/app/ui/components/Project";
import { getProjectsByCategory } from "@/lib/projects";
import { getProjects } from "@/lib/projects";
import Link from "next/link";
import Heading from "@/app/ui/components/Heading";

export async function generateStaticParams() {
    const posts = await getProjects();
    const categories = Array.from(new Set(posts.map(Project => Project.category)));

    return categories.map(category => ({ category }));
}

const CategoryPage = async ({ params }:{params:{category:string}}) => {
    const { category } = params;
    const projects = await getProjectsByCategory(category);

    return (
        <div className = "w-[90%]  mx-auto mt-10 mb-16" >
            <Heading type="h2" className="text-3xl font-bold my-20">{category.toUpperCase()} HOME</Heading>
            <ul className="flex flex-wrap my-6 -mx-2">
                {projects.map(project => (
                    <li key={project.slug} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                       <ProjectCard {...project}/>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default CategoryPage;
