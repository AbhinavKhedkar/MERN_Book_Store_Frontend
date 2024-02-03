import React from 'react';

const Spinner = () => {
  return (
    <div style={{
      width: '100%',
      height: '80vh',
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'flex'
    }}>
      <div className='flex justify-center items-center animate-ping w-16 h-16 m-8 rounded-full border-t-4 border-sky-600 border-solid m-auto'>
        <div className='w-12 h-12 bg-sky-600 rounded-full'></div>
      </div>
    </div>
  );
}

export default Spinner;
