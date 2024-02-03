import React, { useState } from 'react';
import UserButton from './UserButton';
import myLogo from './images/logo.png';
import MyWallpaper from './images/Wallpaper1.jpg'

const Header = () => {
    let Links = [
        { name: "LOGIN", link: "/Login" },
        { name: "SIGN UP", link: "/SignUp" }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <span>
                <img src={MyWallpaper} alt="My Wallpaper" className="w-full h-full left-0 top-0 -z-10 absolute" />
            </span>
            <div className='md:flex item-center justify-between py-4 md:px-10 px-7 relative'>
                <div className='font-bold text-2xl cursor-pointer flex item-center font-[poppins] md:flex md:items-center md:pb-0 pb-12 absolute md:static text-amber-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                    <span className='text-3xl text-amber-700 mr-1 pt-2'>
                        <a href='/'>
                            <img src={myLogo} alt="My Logo" className="w-full h-auto" />
                        </a>
                    </span>
                    <a href='/' className='text-gray-800 hover:text-gray-400 duration-500'>BOOKSTORE</a>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-amber-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
