import React from 'react';
import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di';
import ThemeToggle from '../components/themeToggle';


const navLinks = [
    {
        lable: 'Projects',
        link: '#',
    },
    {
        lable: 'Blog',
        link: '#',
    },
    {
        lable: 'Contact',
        link: '#',
    },
]


const NavBar: React.FC = () => {
    return (
        <nav className="h-[70px] top-0 left-0 fixed w-full items-center backdrop-blur inset-x-0 top-0 px-8 border-b flex justify-between border-gray-200 dark:border-gray-600 dark:bg-gray-800 z-50">
            <div>
                <Link href="#" className="animate-pulse" id="logo">My Logo</Link>
            </div>
            <div>
                <ul className="flex items-center justify-end space-x-4">
                    {
                        navLinks.map((navlink) => {
                            return (
                                <li>
                                    <Link href={navlink.link} className="text-link dark:text-white  font500  hover:text-sky-500 dark:hover:text-sky-400">{navlink.lable}</Link>
                                </li>
                            )
                        })
                    }
                    <li>
                        <DiGithubBadge name='Github Link' role='link' size={28} />
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
