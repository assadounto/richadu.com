


 type Post = {
    title: string;
    slug: string;
    date: string;
    description: string;
    body: string;
    headings: Heading[];
    cover: string;
    category: string;
    views: number;
    likes: number;
    author: string;
};

type Heading = {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type Project = {
    title: string;
    slug: string;
    date: string;
    description: string;
    body: string;
    headings: Heading[];
    cover: string;
    category: string;
    views: number;
    likes: number; 
    author: string;
}


export type {Post, Heading,Project};