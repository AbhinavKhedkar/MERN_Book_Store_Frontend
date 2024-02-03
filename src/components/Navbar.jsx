import React from 'react';
import Button from './UserButton';
import { MdWidthFull } from 'react-icons/md';
import myLogo from './images/logo.png';

const Navbar = () => {
    let LinksTo = [
        { name: "home-sharp", link: "/" },
        { name: "add-circle-sharp", link: "/" },
        { name: "cart-sharp", link: "/" },
        { name: "information-circle-sharp", link: "/" },
        { name: "call-sharp", link: "/" },
        { name: "menu-sharp", link: "/" }
    ];
    return (
        <div className='absolute'>
            <ul className='border-2 border-black bg-yellow-100 rounded-full fixed left-10 top-28 p-4 space-y-6'>
                <li>
                    <a href='/'>
                        <img src={myLogo} alt="My Logo" className="w-full h-auto" />
                    </a>
                </li>
                {LinksTo.map((link) => (
                    <li key={link.name} className='md:ml-1 text-5xl my-7'>
                        <a href={link.link} className='text-black hover:text-gray-400 duration-500'>
                            <ion-icon name={link.name}></ion-icon>
                        </a>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default Navbar;
