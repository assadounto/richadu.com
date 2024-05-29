import { MDXComponents } from "mdx/types";
import slugify from 'slugify';
import Heading from "./Heading";
import Image from "next/image";
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
            <Image
                src={src||'/images/metric.png'}
                alt={alt||''}
                width={600}
                 height={300} 
   
                className="max-w-full h-auto"
            />
        );
    },
    h2: ({ children }) => {
        const id = createId(children);
        return <Heading type="h2" id={id} className="my-3">{children}</Heading>;
    },
    
    h3: ({ children }) => {
        const id = createId(children);
        return <Heading type="h3" id={id} className="my-3">{children}</Heading>;
    },
    p: ({ children }) => {
     
        return <p className="ml-5 text-gray-600 mb-4">{children}</p>;
    },
    

};
