
'use server'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebase';// Adjust the import path as needed
import { Project } from '../types';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { getHeadings } from '@/utils';
import { getFirebaseProjectData } from '@/services';



export async function getProjects(): Promise<Project[]> {
    const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
    const projects = await fs.readdir(directoryPath);

    return Promise.all(
        projects
            .filter((file) => path.extname(file) === '.mdx')
            .map(async (file) => {
                const filePath = path.join(directoryPath, file);
                const fileContent = await fs.readFile(filePath, 'utf8');
                const { data, content } = matter(fileContent);
                const headings = await getHeadings(content);

                // Get Firebase data
                const slug = file.replace('.mdx', '');
                const firebaseData = await getFirebaseProjectData(slug);

                return {
                    ...data,
                    slug,
                    body: content,
                    headings,
                    category: data.category.toLowerCase() || 'Uncategorized',
                    link: `/projects/${data.category || 'Uncategorized'}/${slug}`,
                    views: firebaseData.views,
                    likes: firebaseData.likes,
                } as Project;
            })
    );
}

export async function getProject(slug: string): Promise<Project | undefined> {
    const projects = await getProjects();
    return projects.find((project) => project.slug === slug);
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
    const projects = await getProjects();
    return projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());
}
