import React from 'react';
import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di';
import ThemeToggle from '../components/themeToggle';
import Logo from '../components/logo';

const navLinks = [
    { label: 'Portfolio', link: '/projects' },
    { label: 'Blog', link: '/blog' },
    { label: 'Services', link: '#' },
];

const NavBar: React.FC = () => {
    return (
        <nav className="h-[70px] fixed top-0 left-0 w-full flex items-center justify-between bg-white bg-opacity-70 dark:bg-dark dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-600 px-4 z-50">
            <div>
                <Link href="/" passHref>
                    <span className="" id="logo">
                        <Logo />
                    </span >
                   
                </Link>
            </div>
            <div>
                <ul className="flex items-center justify-end space-x-4">
                    {navLinks.map((navlink, id) => (
                        <li key={id}>
                            <Link href={navlink.link} passHref>
                                <span className="text-link dark:text-white font500 hover:text-sky-500 dark:hover:text-sky-400">
                                    {navlink.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                    
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
