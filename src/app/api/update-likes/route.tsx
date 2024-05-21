import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import sanitizeFilename from 'sanitize-filename';

type Data = {
    views?: number;
    likes?: number;
    [key: string]: any;
};

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ message: 'Missing slug parameter' }, { status: 400 });
    }

    const sanitizedSlug = sanitizeFilename(slug);

    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${sanitizedSlug}.mdx`);

    try {
        // Check if the file exists
        try {
            await fs.access(filePath);
        } catch (err) {
            return NextResponse.json({ message: 'File not found' }, { status: 404 });
        }

        // Read the file content
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data }: { data: Data } = matter(fileContent);

        // Respond with the current number of likes
        return NextResponse.json({ likes: data.likes || 0 }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching likes', error: (error as Error).message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ message: 'Missing slug parameter' }, { status: 400 });
    }

    const sanitizedSlug = sanitizeFilename(slug);

    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${sanitizedSlug}.mdx`);

    try {
        // Check if the file exists
        try {
            await fs.access(filePath);
        } catch (err) {
            return NextResponse.json({ message: 'File not found' }, { status: 404 });
        }

        // Read the file content
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content }: { data: Data, content: string } = matter(fileContent);

        // Update likes count
        data.likes = (data.likes || 0) + 1;

        // Serialize updated content
        const updatedContent = matter.stringify(content, data);

        // Write updated content back to the file
        await fs.writeFile(filePath, updatedContent);

        // Respond with updated likes count
        return NextResponse.json({ likes: data.likes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error updating likes', error: (error as Error).message }, { status: 500 });
    }
}
