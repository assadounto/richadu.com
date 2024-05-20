import React, { ReactNode } from 'react';
import TableOfContents from '@/app/ui/components/Toc';

interface BlogLayoutProps {
    children: ReactNode;
    headings: Array<{ text: string; level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, headings }) => {
    return (
        <div className="container mx-auto p-4 flex">
            <div className=" w-full">
                <div className=' sticky top-36 w-full right-30 '>
                    <TableOfContents headings={headings} />
                </div>

            </div>
            <div className="flex-grow pr-6">
                {children}
            </div>
            <div className=" w-full">
                <div className=' sticky top-36 w-full right-30 '>
                    <TableOfContents headings={headings} />
                </div>

            </div>
        </div>
    );
};

export default BlogLayout;
