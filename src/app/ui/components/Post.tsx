import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "./MarkDown";
import YouTube from "@/app/ui/components/YouTube";

export function Post({ children }: { children: string }) {
   
   
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
