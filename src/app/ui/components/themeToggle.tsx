'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
        name='Theme'
        role='option'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2"
        >
            {theme === 'dark' ? <CiLight size={25} /> : <CiDark size={25} />}
        </button>
    );
};

export default ThemeToggle;
