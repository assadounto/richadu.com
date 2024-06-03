// components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
       return (
        <div className="logo dark:bg-white">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" rx="10" ry="10" fill="none" stroke="#ffffff" strokeWidth="5"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                    RA
                </text>
            </svg>
        </div>
    );

};

export default Logo;
