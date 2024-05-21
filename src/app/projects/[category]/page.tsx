import { Project } from "@/app/ui/components/Project";
import { getProjectsByCategory } from "@/lib/projects";
import { getProjects } from "@/lib/projects";
import Link from "next/link";

export async function generateStaticParams() {
    const posts = await getProjects();
    const categories = Array.from(new Set(posts.map(Project => Project.category)));

    return categories.map(category => ({ category }));
}

const CategoryPage = async ({ params }:{params:{category:string}}) => {
    const { category } = params;
    const projects = await getProjectsByCategory(category);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Category: {category}</h1>
            <ul>
                {projects.map(post => (
                    <li key={post.slug}>
                        <Link href={`/projects/${category}/${post.slug}`}>
                            <span className="text-blue-600 hover:underline">{post.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
