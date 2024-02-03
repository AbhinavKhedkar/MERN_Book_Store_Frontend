import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 mt-28 relative'>
      <div className='shadow-md w-full sticky top-0 relative z-20'>
        <Header />
      </div>
      <div className='relative z-10'>
        <Navbar />
      </div>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col bg-gray-100 items-center border-2 border-sky-400 rounded-xl p-8 mx-auto max-w-[600px]'>
        <h3 className='text-2xl mb-6'>Are you sure you want to delete this book?</h3>
        <button
          className='p-4 bg-red-600 text-white w-full rounded hover:bg-red-700 focus:outline-none'
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteBook;
