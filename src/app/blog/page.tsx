import { getPosts } from "@/lib/posts";
import Link from "next/link";




const BlogIndexPage = async () => {

    const posts = await getPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blog Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link href={`/blog/${category.toLowerCase()}`}>
                            <span className="text-blue-600 hover:underline">{category}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogIndexPage;
