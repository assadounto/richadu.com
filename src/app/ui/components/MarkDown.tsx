import { MDXComponents } from "mdx/types";
import slugify from 'slugify';
import Heading from "./Heading";
import Image from "next/image";
import CopyBtn from "./copy";
import YouTube from "./YouTube";

// Helper function to slugify the id
const createId = (text: any) => slugify(text, { lower: true, strict: true });

export const Markdown: MDXComponents = {
    a: ({ children, ...props }) => {
        return (
            <a
                {...props}
                className="text-blue-600 hover:text-blue-800 duration-100"
                target="_blank"
            >
                {children}
            </a>
        );
    },
    img: ({ src, alt }) => {
        return (
            <Image
                src={src || '/images/metric.png'}
                alt={alt || ''}
                width={600}
                height={300}
                className="max-w-full h-auto my-6" // added margin
            />
        );
    },
    code: ({ children, className, ...props }) => {
        return (
            <div className="relative my-6"> {/* added margin */}
                <CopyBtn codeText={children} />
                <pre className={`p-4 overflow-x-auto rounded bg-gray-800 dark:text-gray-300 text-white ${className}`}>
                    <code {...props}>
                        {children}
                    </code>
                </pre>
            </div>
        );
    },
    iframe: ({ src, title, width, height, ...props }) => {
        return (
            <div className="container my-6"> {/* added margin */}
                <iframe
                    src={src}
                    title={title}
                    className="responsive-iframe"
                    {...props}
                />
            </div>
        );
    },
    h2: ({ children }) => {
        const id = createId(children);
        return <Heading type="h2" id={id} className="my-6 text-gray-700">{children}</Heading>; {/* removed redundant margin */ }
    },
    h3: ({ children }) => {
        const id = createId(children);
        return <Heading type="h3" id={id} className="text-[26px] text-gray-600 my-6">{children}</Heading>;
    },
    p: ({ children }) => {
        return <p className="text-gray-600 dark:text-gray-400 mb-6">{children}</p>; {/* adjusted margin */ }
    },
    ol: ({ children, ...props }) => {
        return (
            <ol {...props} className="list-decimal list-inside text-gray-600 dark:text-gray-400 mb-6 ml-6"> {/* added margin */}
                {children}
            </ol>
        );
    },
    ul: ({ children, ...props }) => {
        return (
            <ul {...props} className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 ml-6"> {/* added margin */}
                {children}
            </ul>
        );
    },
    li: ({ children, ...props }) => {
        return (
            <li {...props} className="mb-2">
                {children}
            </li>
        );
    },
    YouTube: ({ link }) => <YouTube link={link}  />, 
};
