// components/Logo.tsx
import React from 'react';
import Image from 'next/image';
const Logo: React.FC = () => {
       return (
        <div className="logo">
           <Image src="/svg/logo.svg" alt="logo" width={200} height={200} />
        </div>
    );

};

export default Logo;
