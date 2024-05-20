import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type Post = {
    title: string;
    slug: string;
    date: string;
    description: string;
    body: string;
    headings: Heading[];
};

export type Heading = {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export async function getHeadings(source: string): Promise<Heading[]> {
    // Split the content into lines and filter out non-heading lines
    const headingLines = source.split("\n").filter((line) => line.match(/^#{1,6}\s/));

    // Map the filtered lines to Heading objects
    return headingLines.map((raw) => {
        const text = raw.replace(/^#{1,6}\s/, "");
        const levelMatch = raw.match(/^(#{1,6})\s/);
        let level: Heading['level'] = 'h2'; // Default to 'h2' if something goes wrong
        if (levelMatch) {
            switch (levelMatch[1].length) {
                case 1:
                    level = 'h1';
                    break;
                case 2:
                    level = 'h2';
                    break;
                case 3:
                    level = 'h3';
                    break;
                case 4:
                    level = 'h4';
                    break;
                case 5:
                    level = 'h5';
                    break;
                case 6:
                    level = 'h6';
                    break;
            }
        }

        return { text, level };
    });
}

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
                console.log(headings)
                return { ...data, slug: file.replace('.mdx', ''), body: content, headings } as Post;
            })
    );
}

export async function getPost(slug: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}
