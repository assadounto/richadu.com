import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="h-[50px] fixed w-full items-center p-8 border-b flex justify-between border-gray-400">
            <div>
                <a href="#" className="" id="logo">My Logo</a>
            </div>
            <div>
                <ul className="flex justify-end space-x-4">
                    <li>
                        <a href="#" className="">Portfolio</a>
                    </li>
                    <li>
                        <a href="#" className="">Abobut</a>
                    </li>
                    <li>
                        <a href="#" className="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
