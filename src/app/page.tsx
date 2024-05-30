import Introductions from "./ui/sections/introduction";
import FeaturedProjects from "./ui/sections/featuredProjects";
import FeaturedPosts from "./ui/sections/featuredPosts";
import { getPosts } from "@/lib/posts";
import QuoteSection from "./ui/sections/quotesSection";
export default async function Home () {
  const posts = await getPosts()


  return (
    <>
    <Introductions />
    <FeaturedProjects/>
    <FeaturedPosts posts={posts}/>
    <QuoteSection/>

 
    </>

  );
}
