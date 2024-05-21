import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "./MarkDown";
import Toc from "./Toc";


export function Project({ children }: { children: string }) {


    return (
        <>
            <MDXRemote
                source={children}
                options={{
                    mdxOptions: {},
                }}
                components={Markdown} /></>
    );
}
