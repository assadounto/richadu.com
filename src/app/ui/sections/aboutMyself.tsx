import React from 'react';
import SocialIcons from '../components/Scials';
import Heading from '../components/Heading';
import Button from '../components/Button';

const AboutMyself: React.FC = () => {
    return (
        <div className="mb-8">
            <section className="mb-8">
                <Heading type='h2' className="text-3xl font-bold mb-4">About Myself</Heading >
                <p className="mb-4 text-gray-600">
                    Hey there, I&apos;m a software developer passionate about crafting digital solutions. Whether it&apos;s building a website, an app, or implementing new features, I&apos;m here to help. Take a look at my portfolio and experience, and if you have a project in mind, let&apos;s chat!
                </p>
            </section>

            <section className="mb-8">
                <Heading type='h2' className="text-3xl font-bold mb-4">Experience</Heading>
                <p className="text-gray-600 mb-4">
                    With several years of experience in software development, I&apos;ve worked on a variety of projects spanning web development, mobile apps, and backend systems. From startups to established companies, I&apos;ve collaborated with diverse teams to deliver innovative solutions.
                </p>
            </section>

            <section>
                <Heading type='h2' className="text-3xl font-bold mb-4">Let&apos;s Connect</Heading>
                <SocialIcons />
                <Button href='/resume' className='my-8'>Download my resume</Button>
            </section>
        </div>
    );
};

export default AboutMyself;
