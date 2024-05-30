import React from 'react';
import { IconType } from 'react-icons';
import { RiHtml5Line, RiCss3Line, RiNodejsLine, RiRunLine, RiReactjsLine, RiGiftLine, RiDatabaseLine, RiSipLine, RiMovieLine } from 'react-icons/ri';

interface SkillItemProps {
    icon: string;
    name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
    const iconMap: { [key: string]: IconType } = {
        JavaScript: RiReactjsLine,
        HTML: RiHtml5Line,
        CSS: RiCss3Line,
        Nodejs: RiNodejsLine,
        Rails: RiRunLine,
        Django: RiRunLine,
        Database: RiDatabaseLine,
        Scripting: RiSipLine,
        Mobile: RiMovieLine,
    };

    const IconComponent = iconMap[icon] || RiReactjsLine;

    return (
        <div className="flex items-center space-x-2">
            <IconComponent className="text-blue-500" size={24} />
            <p>{name}</p>
        </div>
    );
};

export default SkillItem;
