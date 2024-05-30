'use client'

import React, { SyntheticEvent, useState } from "react";
import { MdOutlineContentCopy } from 'react-icons/md';

interface Props {
    codeText: any;
}

const CopyBtn: React.FC<Props> = ({ codeText }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = (e: SyntheticEvent) => {
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <span
                className="text-white absolute top-2 right-2 hover:cursor-pointer transition-transform transform hover:scale-125"
                onClick={handleClick}
            >
                <MdOutlineContentCopy size={24} />
            </span>
            {copied && (
                <span className="absolute top-2 right-10 text-xs text-green-500">
                    Copied!
                </span>
            )}
        </div>
    );
};

export default CopyBtn;
