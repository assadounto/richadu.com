'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
interface SearchProps {
    setResults: (results: Post[]) => void;
    results: Post[],
    initialQuery: string;
    initsortBy:string
}

export default function Search({
    setResults,
    initialQuery,
    initsortBy,
    results
}: SearchProps) {
    const [query, setQuery] = useState<string>(initialQuery);
    const [sortBy, setSortBy] = useState<string>('newest'); // Default sorting
    const router = useRouter();
    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
    
        // Filter and sort posts locally
        const filteredPosts = filterAndSortPosts(results, query, sortBy);
        setResults(filteredPosts);
    };

    const filterAndSortPosts = (posts: Post[], query: string, sortBy: string): Post[] => {
        let filteredPosts = [...posts];
        if (query) {
            filteredPosts = filteredPosts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.body.toLowerCase().includes(query.toLowerCase())
            );
        }
        // Sort locally based on sortBy
        if (sortBy === 'newest') {
            filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortBy === 'oldest') {
            filteredPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        return filteredPosts;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if(e.target.value===''){
            router.push(`/blog/search`)
            setResults([])
            return
        }

        router.push(`/blog/search?query=${e.target.value}&sortBy=${sortBy||'newest'}`)

    };

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedSortBy = e.target.value;
        setSortBy(selectedSortBy);
      
        router.push(`/blog/search?query=${query}&sortBy=${selectedSortBy}`);
        // Filter and sort posts locally
        const filteredPosts = filterAndSortPosts(results, query, selectedSortBy);
        setResults(filteredPosts);
    };

    useEffect(() => {
        setQuery(initialQuery);
        setSortBy(initsortBy)
        // Fetch all posts without sorting from backend
        fetchAllPosts();
    }, [initialQuery, initsortBy]);

    const fetchAllPosts = async () => {
        router.push(`/blog/search?query=${query}&sortBy=${query}`);
        const res = await fetch(`/api/search?sortBy=none`);
        const data: Post[] = await res.json();
        const filteredPosts = filterAndSortPosts(data, query, sortBy);
        setResults(filteredPosts);
       
    };

   

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search posts"
            />
            <select value={sortBy} onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
}
