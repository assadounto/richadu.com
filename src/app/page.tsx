"use client"
import Image from "next/image";
import { useTheme } from "next-themes"
import NavBar from "./ui/nav/nav";
import Introductions from "./ui/sections/introduction";
import featuredProjects from "./ui/sections/featuredProjects";
import FeaturedProjects from "./ui/sections/featuredProjects";
import FeaturedPosts from "./ui/sections/featuredPosts";
export default function Home() {

  return (
    <>
    <Introductions />
    <FeaturedProjects/>
    <FeaturedPosts/>
 
    </>

  );
}
