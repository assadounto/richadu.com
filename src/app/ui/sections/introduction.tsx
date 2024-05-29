// components/Introductions.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Introductions: React.FC = () => {
    return (
        <article className="layout min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl" data-fade="1">Hi!</h2>
            <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl" data-fade="2">
                You can call me <span className="transition-colors bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 dark:from-primary-300 dark:text-link dark:bg-clip-text dark:text-transparent">Richmond</span>
            </h1>
            <p className="mt-2 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-3 text-sm md:text-base 2xl:text-lg" data-fade="2">
                Software and Electrical Engineer.
            </p>
            <p className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl" data-fade="3">
                I work with modern web technologies and embedded systems, striving to create efficient and scalable solutions.
            </p>
            <p className="mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl" data-fade="4">
                Don't forget to check out my
                <Link href="/portfolio">
                    <div className="animated-underline custom-link inline-flex items-center font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 border-b border-dotted border-dark hover:border-black/0">
                        <span className="dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent"> portfolio</span>
                    </div>
                </Link>
                !
            </p>
            <div data-fade="5" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
                <div className="group relative">
                    <div className="absolute -inset-0.5 animate-tilt rounded blur bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-200 dark:via-primary-300 opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                    <Link href="/#projects">
                        <div className="inline-flex rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow bg-white text-gray-800 disabled:bg-gray-200 dark:bg-dark dark:text-gray-100 dark:disabled:bg-gray-700">
                            View Projects
                        </div>
                    </Link>
                </div>
                <Link href="/about">
                    <div className="inline-flex rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow bg-white text-gray-800 disabled:bg-gray-200 dark:bg-dark dark:text-gray-100 dark:disabled:bg-gray-700">
                        Learn more about me
                    </div>
                </Link>
            </div>
            <div data-fade="6" className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/your-github" className="inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab">
                    <FaGithub size={24} />
                    <span>Github</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/your-twitter" className="inline-flex items-center gap-1 text-sm font-medium md:text-base group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab">
                    <FaTwitter size={24} className="transition-colors group-hover:text-[#1da1f2]" />
                    <span>@your-twitter</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/your-linkedin" className="inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab">
                    <FaLinkedin size={24} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </article>
    );
}

export default Introductions;
