// components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
    return (
        <svg width="150" height="40" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="80" className="fill-current text-white dark:text-gray-800" />
            <text x="20" y="50" className="fill-current text-gray-800 dark:text-white" font-family="Arial, sans-serif" font-size="40" font-weight="bold">Richadu</text>
            <path d="M20,55 L280,55" className="stroke-current text-gray-800 dark:text-white" stroke-width="2" id="animated-path" />
            <circle cx="20" cy="55" r="5" className="fill-current text-gray-800 dark:text-white">
                <animateMotion path="M0,0 L260,0" begin="0s" dur="2s" repeatCount="indefinite" />
            </circle>
            <style>
                {`
                    #animated-path {
                        stroke-dasharray: 260;
                        stroke-dashoffset: 260;
                        animation: dash 2s linear infinite;
                    }
                    @keyframes dash {
                        from {
                            stroke-dashoffset: 260;
                        }
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>
        </svg>
    );
};

export default Logo;
