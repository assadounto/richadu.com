// components/SocialIcons.tsx
import React from 'react';
import { RiTwitterXLine,RiGithubLine,RiLinkedinLine,RiMailLine } from "react-icons/ri";

const SocialIcons: React.FC = () => {
    return (
        <div className="flex dark:text-white space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <RiGithubLine size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <RiLinkedinLine size={24} />
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <RiTwitterXLine size={24} />
            </a>
            <a href="mailto:someone@example.com" aria-label="Email">
                <RiMailLine size={24} />
            </a>
        </div>
    );
};

export default SocialIcons;
