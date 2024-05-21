
import { getProjects } from "@/lib/projects";
import Link from "next/link";




const ProjectIndexPage = async () => {

    const projects = await getProjects();
    const categories = Array.from(new Set(projects.map(project => project.category)));

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blog Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link href={`/projects/${category.toLowerCase()}`}>
                             <span className="text-blue-600 hover:underline">{category}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectIndexPage;
