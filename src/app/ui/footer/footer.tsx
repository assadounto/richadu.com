// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import SocialIcons from '../components/Scials';
import Logo from '../components/logo';

const Footer: React.FC = () => {
    return (
        <footer className=" text-gray-800 py-8 border-t border-gray-200">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Link href="/">
                        <span className="text-2xl font-bold hover:text-gray-600 cursor-pointer"><Logo/></span>
                    </Link>
                </div>
                <div className="mb-4 md:mb-0">
                    <nav className="flex dark:text-white space-x-4">
                        <Link href="/about">
                            <span className="hover:text-gray-600  cursor-pointer">About</span>
                        </Link>
                        <Link href="/blog">
                            <span className="hover:text-gray-600 cursor-pointer">Blog</span>
                        </Link>
                        <Link href="/projects">
                            <span className="hover:text-gray-600 cursor-pointer">Portfolio</span>
                        </Link>
                        <Link href="/resume.pdf">
                            <span className="hover:text-gray-600 cursor-pointer">Resume</span>
                        </Link>
                    </nav>
                </div>
                <SocialIcons />
            </div>
            <div className="mt-8 dark:text-white text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Made with love <span className="text-red-500 uppercase">❤</span> by {'Richmond Adu-kyere'}
            </div>
        </footer>
    );
};

export default Footer;
