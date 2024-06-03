
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import BlogPostCard from "../ui/cards/BlogPostCards";
import Heading from "../ui/components/Heading";



export const revalidate = 60; // Revalidate data every 60 seconds

const BlogIndexPage = async () => {
    const posts = await getPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));

    return (
        <div className="container mt-10 mb-16  mx-auto p-4">
            <Heading type="h2">Blog Home</Heading>
            {/* Categories Section */}
            <div className="my-16 flex flex-wrap gap-4">
                {categories.map(category => (
                    <div key={category}>
                        <Link href={`/blog/${category.toLowerCase()}`}>
                            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">{category}</span>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Blog Posts Section */}
            <div>
                <Heading type="h3">All Blog Posts</Heading>
                <ul className="flex flex-wrap my-3 -mx-2">
                    {posts.map(post => (
                        <li key={`/blog/`} className="w-full md:w-1/2 lg:w-1/3 py-5 px-5 mb-0">
                            <BlogPostCard {...post} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogIndexPage;
