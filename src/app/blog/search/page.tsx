'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import Search from '@/app/ui/components/Search';
import BlogPostCard from '@/app/ui/cards/BlogPostCards';
import type { Post } from '@/types';

export default function Home() {
    const [results, setResults] = useState<Post[]>([]);
    const searchParams = useSearchParams()
    const query= searchParams.get('query')
    const sortBy = searchParams.get('sortBy')
;

    return (
         <Suspense>
            <h1>Welcome to My Blog</h1>
           
            <Search results={results} setResults={setResults} initsortBy={sortBy||''} initialQuery={query as string || ''} />
        
            <ul className="flex flex-wrap my-6 -mx-2">
                {results.map(post => (
                    <li key={`/blog/${post.slug}`} className="w-full md:w-1/2 lg:w-1/3 py-5 px-5 mb-4">
                        <BlogPostCard {...post} />
                    </li>
                ))}
            </ul>
        </Suspense>
    );
}
