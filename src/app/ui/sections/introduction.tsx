// components/Introductions.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Button from "../components/Button";
import Heading from "../components/Heading";
import SocialIcons from "../components/Scials";

const Introductions: React.FC = () => {
    return (
        <article className="layout mb-[-100px]  min-h-screen lg:mt-[0px] flex flex-col md:items-center items-start  justify-center p-4">
            <Heading type="h3" className="text-2xl md:text-4xl 2xl:text-5xl" data-fade="1">Hi!</Heading>
            <Heading type="h1" className="mt-1 text-3xl md:text-5xl 2xl:text-6xl" data-fade="2">
                You can call me <span className="transition-colors bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 dark:from-primary-300 dark:text-link dark:bg-clip-text dark:text-primay">Richmond</span>
            </Heading>
            <p className="mt-2 max-w-4xl eading-relaxed text-gray-700 font800 dark:text-gray-200 md:mt-3 text-sm md:text-base 2xl:text-lg" data-fade="2">
                Software and Electrical Engineer.
            </p>
            <p className="mt-4 max-w-4xl text-gray-600 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl" data-fade="3">
                I work with modern web technologies and embedded systems, striving to create efficient and scalable solutions.
            </p>
            <p className="mt-3 max-w-4xl  text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl" data-fade="4">
                Do not forget to check out my portfolio!
            </p>
            <div data-fade="5" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
                <div className="group relative">
                    <Button href="/projects">View Projects</Button>
                </div>

                <Button href="/about">About me</Button>
            </div>
            <div data-fade="6" className="mt-6 flex flex-wrap gap-4 gap-y-2 md:mt-8">
                <SocialIcons />
            </div>
        </article>
    );
}

export default Introductions;
