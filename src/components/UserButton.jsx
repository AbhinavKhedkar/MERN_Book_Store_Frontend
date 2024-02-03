import React, { useState } from 'react';

const UserButton = (props) => {
  let Links = [
    { name: "LOGIN", link: "/" },
    { name: "SIGN UP", link: "/" },
  ]
  const [open, setOpen] = useState(false);
  return (
    <div className='py-2 px-6 rounded md:ml-8 cursor-pointer'>
      <div onClick={() => setOpen(!open)} className='text-4xl'>
        <ion-icon name={open ? 'close' : 'person-circle-sharp'}></ion-icon>
      </div>
      {open && (
        <div className='absolute right-8 top-16 bg-white border border-gray-300 rounded-md shadow-lg'>
          <ul className='text-xl py-2 px-4'>
            {Links.map((link) => (
              <li key={link.name} className='cursor-pointer hover:bg-gray-100'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserButton;
