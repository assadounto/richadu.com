import BlogPostCard from "@/app/ui/cards/BlogPostCards";
import Heading from "@/app/ui/components/Heading";
import BlogLayout from "@/app/ui/layout/BlogLayout";
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
        <div className="w-[90%]  mx-auto mt-10 mb-16">
            <Heading type="h2" className="text-3xl font-bold my-20">{category.toUpperCase()} HOME</Heading>
            <ul className="flex flex-wrap my-6 -mx-2">
                {posts.map(post => (
                    <li key={post.slug} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                       <BlogPostCard {...post}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
