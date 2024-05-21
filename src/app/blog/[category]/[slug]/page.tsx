import { getPost, getPosts } from "@/lib/posts";
import { Post } from "@/app/ui/components/Post";
import { notFound } from "next/navigation";
import BlogLayout from "@/app/ui/layout/BlogLayout";



export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    if (!post) return notFound();

    return (
        <BlogLayout headings={post.headings}>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <Post>{post.body}</Post>
        </BlogLayout>
    );
}
