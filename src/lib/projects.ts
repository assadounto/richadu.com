import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import {  Project } from "../types";
import { getHeadings } from "@/utils";



export async function getProjects(): Promise<Project[]> {
    const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
    const projects = await fs.readdir(directoryPath);

    return Promise.all(
        projects
            .filter((file) => path.extname(file) === ".mdx")
            .map(async (file) => {
                const filePath = path.join(directoryPath, file);
                const fileContent = await fs.readFile(filePath, "utf8");
                const { data, content } = matter(fileContent);
                const headings = await getHeadings(content);
                console.log(data)
                return { ...data, slug: file.replace('.mdx', ''), body: content, headings, category: data.category.toLowerCase() || "Uncategorized", link: `/projects/${data.category || "Uncategorized"}/${file.replace('.mdx', '')}`, } as Project;
            })
    );
}

export async function getProject(slug: string): Promise<Project | undefined> {
    const  projects = await getProjects();
    return projects.find((project) => project.slug === slug);
}


export async function getProjectsByCategory(category: string) {
    const projects = await getProjects();
    return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
}