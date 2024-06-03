// pages/contact.tsx
import React from 'react';
import Quote from '../components/Quote';
import Innovation from '../components/Innovation';


const QuoteSection: React.FC = () => {
    return (
        <section className="p-8 text-gray-900 dark:text-white">
            <div className="container mx-auto">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
                   
                        <Quote text="We can't stop innovating!" author="Richmond Adu-Kyere" />
                        <Innovation
                            title="Revolutionary Project"
                            description="This project leverages cutting-edge technology to solve real-world problems efficiently and effectively by going back in time"
                            imageUrl="/svg/sankofa.svg"
                        />
                    
                  
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
