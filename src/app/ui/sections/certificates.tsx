import React from 'react';
import Certification from '../components/certification';
import Heading from '../components/Heading';

const Certifications: React.FC = () => {
    const certifications = [
        { name: 'HTML & CSS Certification', provider: 'Microverse', imageSrc: '/images/html-css.png' },
        { name: 'React and Redux', provider: 'Microverse', imageSrc: '/images/html-css.png' },
        { name: 'Ruby on Rails', provider: 'Microverse', imageSrc: '/images/rails.png' },
        { name: 'Ruby', provider: 'Microverse', imageSrc: '/images/ruby.png' },
        { name: 'Javascript', provider: 'Microverse', imageSrc: '/images/js.png' },
        { name: 'AWS Certified Cloud Practitioner', provider: 'Amazon Web Services', imageSrc: '/images/aws-certified-cloud-practitioner.png' },
        { name: 'AWS Restart Graduate', provider: 'Amazon Web Services', imageSrc: '/images/aws-re-start-graduate.png' },

        // Add more certifications as needed
    ];

    return (
        <section className="mb-8">
            <Heading type='h2' className=" my-8">Certifications</Heading>
           <div className='flex flex-wrap gap-10'>
                {certifications.map((cert, index) => (
                    <Certification key={index} name={cert.name} provider={cert.provider} imageSrc={cert.imageSrc} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
