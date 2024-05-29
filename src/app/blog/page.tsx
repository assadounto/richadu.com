// app/blog/page.tsx
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import BlogPostCard from "../ui/cards/BlogPostCards";
import Heading from "../ui/components/Heading";


export const revalidate = 60; // Revalidate data every 60 seconds

const BlogIndexPage = async () => {
    const posts=await getPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));

    return (
        <div className="container mx-auto p-4">
            <Heading type="h2">Blog Home</Heading>

            {/* Categories Section */}
            <div className="mb-6 flex flex-wrap gap-4">
                {categories.map(category => (
                    <div key={category} className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600 transition-colors">
                        <Link href={`/blog/${category.toLowerCase()}`}>
                            <span className="text-lg font-semibold">{category}</span>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Blog Posts Section */}
            <div>
                <Heading type="h3">All Blog Posts</Heading>
                <ul className="flex flex-wrap -mx-2">
                    {posts.map(post => (
                        <li key={`/blog/`} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                            <BlogPostCard {...post} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogIndexPage;
