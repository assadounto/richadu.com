import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/posts';
import type { Post } from '../../../types';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const sortBy = searchParams.get('sortBy');

    const allPosts =await getPosts();
    let filteredPosts = allPosts;

    if (query) {
        filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.body.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (category) {
        filteredPosts = filteredPosts.filter(post =>
            post.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (tag) {
        filteredPosts = filteredPosts.filter(post =>
            post.tags.includes(tag)
        );
    }

    if (sortBy === 'newest') {
        filteredPosts = filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
        filteredPosts = filteredPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return NextResponse.json(filteredPosts);
}
