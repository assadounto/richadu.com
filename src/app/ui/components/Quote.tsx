// components/Quote.tsx
import React from 'react';

interface QuoteProps {
    text: string;
    author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    return (
        <div className="bg-gray-100  dark:bg-gray-700 p-6 rounded-lg shadow-md my-4">
            <p className="italic text-lg text-gray-700 dark:text-gray-300">&quot;{text}&quot;</p>
            <p className="text-right mt-2 text-gray-600 dark:text-gray-400">- {author}</p>
        </div>
    );
};

export default Quote;
