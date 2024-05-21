import React from "react";
import { getPost, getPosts } from "@/lib/posts";
import { Post } from "@/app/ui/components/Post";
import BlogLayout from "@/app/ui/layout/BlogLayout";
import Head from "next/head";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    if (!post) return notFound();
  

    return (
        <>
        <Head>
          <title>{post.title} | Richmond&apos;s Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.cover} />
        <meta property="og:url" content={`https://richadu.com/posts/${post.category}/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': post.title,
            'image': post.cover,
            'author': {
              '@type': 'Person',
              'name': post.author,
            },
            'datePublished': post.date,
            'description': post.description,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `https://richadu.com/posts/${post.category}/${post.slug}`,
            },
          })}
        </script>
      </Head>
            <BlogLayout post={post} >
                <Post>{post.body}</Post>
            </BlogLayout>
        </>
       
    );
}
