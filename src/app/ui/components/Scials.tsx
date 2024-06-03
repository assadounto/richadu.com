// components/SocialIcons.tsx
import React from 'react';
import { RiTwitterXLine, RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

const SocialIcons: React.FC = () => {
    return (
        <div className="flex dark:text-white space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiGithubLine size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiLinkedinLine size={24} />
            </a>
            <a href="https://twitter.com/adukyerer" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiTwitterXLine size={24} />
            </a>
            <a href="mailto:adukyerer@gamil.com" aria-label="Email" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiMailLine size={24} />
            </a>
        </div>
    );
};

export default SocialIcons;
