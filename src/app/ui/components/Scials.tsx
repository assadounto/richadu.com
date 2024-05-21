// components/SocialIcons.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaHandPeace, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-4 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Peace">
                <FaHandPeace size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
            </a>
            <a href="mailto:someone@example.com" aria-label="Email">
                <FaEnvelope size={24} />
            </a>
        </div>
    );
};

export default SocialIcons;
