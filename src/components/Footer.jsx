import React from 'react';
import myLogo from './images/logo.png';
import MyWallpaper from './images/Wallpaper1.jpg';

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <span>
                <img src={MyWallpaper} alt="My Wallpaper" className="absolute" />
            </span>
            <div className='container p-12 left-0 flex justify-between relative'>
                <span className='text-3xl text-amber-700 mr-1 pt-2'>
                    <a href='/'>
                        <img src={myLogo} alt="My Logo" className="w-full h-auto" />
                    </a>
                </span>
                <p className='text-slate-600'>All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
