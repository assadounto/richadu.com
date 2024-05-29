import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { Post } from "../types";
import { getHeadings } from "@/utils";

export async function getPosts(): Promise<Post[]> {
    const directoryPath = path.join(process.cwd(), 'src', 'content', 'blog');
    const posts = await fs.readdir(directoryPath);

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === ".mdx")
            .map(async (file) => {
                const filePath = path.join(directoryPath, file);
                const fileContent = await fs.readFile(filePath, "utf8");
                const { data, content } = matter(fileContent);
                const headings = await getHeadings(content);
                console.log(data)
                return { 
                    ...data,
                     slug: file.replace('.mdx', ''), 
                     body: content, headings, 
                     category: data.category || "Uncategorized",
                     link: `/blog/${data.category || "Uncategorized"}/${file.replace('.mdx', '') }`,
        
                } as Post;
                    
            })
    );
}



export async function getPost(slug: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}


export async function getPostsByCategory(category: string) {
    const posts = await getPosts();
    return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}