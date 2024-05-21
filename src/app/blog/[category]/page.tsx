import { getPostsByCategory, getPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
    const posts = await getPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));

    return categories.map(category => ({ category }));
}

const CategoryPage = async ({ params }:{params:{category:string}}) => {
    const { category } = params;
    const posts = await getPostsByCategory(category);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Category: {category}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link href={`/blog/${category}/${post.slug}`}>
                            <span className="text-blue-600 hover:underline">{post.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
