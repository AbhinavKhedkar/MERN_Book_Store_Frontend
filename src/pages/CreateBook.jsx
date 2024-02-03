import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [amount, setAmount]=useState('');
  const [quantity, setQuantity]=useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      amount,
      quantity,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col bg-gray-100 border-2 border-indigo-400 rounded-xl p-4 mx-auto max-w-md'>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Amount</label>
          <input
            type='text'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Quantity</label>
          <input
            type='text'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <button
          className='p-2 bg-indigo-600 text-white rounded hover:bg-blue-600 focus:outline-none'
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBook;
