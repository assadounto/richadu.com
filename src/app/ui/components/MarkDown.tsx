import { MDXComponents } from "mdx/types";
import slugify from 'slugify';

// Helper function to slugify the id
const createId = (text:any) => slugify(text, { lower: true, strict: true });

export const Markdown: MDXComponents = {
    a: ({ children, ...props }) => {
        return (
            <a
                {...props}
                className="underline hover:text-blue-600 duration-100"
                target="_blank"
            >
                {children}
            </a>
        );
    },
    img: ({ src, alt }) => {
        return (
            <img
                src={src}
                alt={alt}
                className="max-w-full h-auto"
            />
        );
    },
    h2: ({ children }) => {
        const id = createId(children);
        return <h2 id={id} className="text-4xl font-bold">{children}</h2>;
    }
};
