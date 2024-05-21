import { Heading } from "@/types";

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