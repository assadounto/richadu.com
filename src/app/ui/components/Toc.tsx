"use client"
import React, { useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import slugify from 'slugify';

interface HeadingObject {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface HeadingProps {
    headings: HeadingObject[];
}

const slugifyText = (text: string) => slugify(text, { lower: true, strict: true });

const TableOfContents: React.FC<HeadingProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>('');
    const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            headingElementsRef.current = entries.reduce((map, entry) => {
                map[entry.target.id] = entry;
                return map;
            }, headingElementsRef.current);

            const visibleHeadings: IntersectionObserverEntry[] = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const entry = headingElementsRef.current[key];
                if (entry.isIntersecting) {
                    visibleHeadings.push(entry);
                }
            });

            const getIndexFromId = (id: string) =>
                headings.findIndex((heading) => slugifyText(heading.text) === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        const elements = document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]');
        elements.forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, [headings]);

    return (
        <div className=''>
            <Heading type="h3">Table of Contents:</Heading>
            {headings.map((heading) => {
                const anchor = slugifyText(heading.text);
                return (
                    <a
                        key={heading.text}
                        href={`#${anchor}`}
                        className={activeId === anchor ? 'text-blue-600' : ''}
                    >
                        {heading.text}
                    </a>
                );
            })}
        </div>
    );
};

export default TableOfContents;
