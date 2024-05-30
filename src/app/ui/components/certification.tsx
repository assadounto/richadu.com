import React from 'react';
import Image from 'next/image';
interface Certification {
    name: string;
    provider: string;
    imageSrc: string;
}

const Certification: React.FC<Certification> = ({ name, provider, imageSrc }) => {
    return (
        <div className="mb-8 flex items-center">
            <div className="mr-4">
                <Image width={50} height={50} src={imageSrc} alt={name} className="w-24 h-24 object-contain rounded-lg shadow-md" />
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">{provider}</p>
            </div>
        </div>
    );
};

export default Certification;
