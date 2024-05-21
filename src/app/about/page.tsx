// pages/about.tsx
import React from 'react';
import Image from 'next/image';
import SocialIcons from '../ui/components/Scials';

const About: React.FC = () => {
    return (
        <section className="p-8 grid grid-cols-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white lg:gap-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">About Myself</h2>
                <p className="mb-4">
                    Hello, I'm a software developer! I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
                </p>
                <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
                <SocialIcons />
                <button type="button" className="btn bg-blue-500 text-white px-4 py-2 rounded">Get my resume</button>
                
            </div>
            <aside className="">
                <div className='sticky top-36 '>
                    <div className=''>
                        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded">
                                <Image src="/logos/javascript.png" alt="JavaScript" width={24} height={24} />
                                <p>JavaScript</p>
                            </li>
                            <li className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded">
                                <Image src="/logos/html.png" alt="HTML" width={24} height={24} />
                                <p>HTML</p>
                            </li>
                            <li className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded">
                                <Image src="/logos/css.png" alt="CSS" width={24} height={24} />
                                <p>CSS</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Frameworks</h2>
                        <ul className="space-y-2">
                            {/* Add your frameworks here */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                        <ul className="space-y-2">
                            {/* Add your skills here */}
                        </ul>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default About;
