import { getPosts } from "@/lib/posts";

export default async function Page() {
    const posts = await getPosts();
console.log(posts)
    return (
        <div>
            {posts
                .sort((a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((post) => (
                    <article key={post.slug}>
                        <a href={`/blog/${post.slug}`}>
                            <p>{post.date}</p>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                        </a>
                    </article>
                ))}
        </div>
    );
}
