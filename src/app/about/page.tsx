// pages/about.tsx
import React from 'react';
import SocialIcons from '../ui/components/Scials';
import SectionWithBubbles from '../ui/components/sectionBubbles';
import SkillItem from '../ui/components/skilItem';
import AboutMyself from '../ui/sections/aboutMyself';
import Certifications from '../ui/sections/certificates';

const About: React.FC = () => {
    return (
        <section className="p-8 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
               <AboutMyself/>
             
                <div className='border rounded p-4'>
                    <SectionWithBubbles title="Languages">
                        <SkillItem icon="JavaScript" name="JavaScript" />
                        <SkillItem icon="HTML" name="HTML" />
                        <SkillItem icon="CSS" name="CSS" />
                        <SkillItem icon="Mobile" name="Mobile (React Native, Swift)" />
                    </SectionWithBubbles>
                    <SectionWithBubbles title="Frameworks">
                        <SkillItem icon="Node.js" name="Node.js (Express)" />
                        <SkillItem icon="Rails" name="Rails" />
                        <SkillItem icon="Django" name="Django" />
                    </SectionWithBubbles>
                    <SectionWithBubbles title="Skills">
                        <SkillItem icon="Database" name="Database Management" />
                        <SkillItem icon="Scripting" name="Scripting" />
                    </SectionWithBubbles>
                </div>
             
            </div>
            <Certifications />
        </section>
    );
};

export default About;
