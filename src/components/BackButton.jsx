import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-indigo-600 text-white px-4 py-2 rounded-lg w-fit flex items-center transition duration-300 ease-in-out hover:bg-indigo-300'
      >
        <BsArrowLeft className='text-2xl mr-2' />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
