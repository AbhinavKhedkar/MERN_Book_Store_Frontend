import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 mt-28 relative'>
      <div className='shadow-md w-full sticky top-0 relative z-20'>
        <Header />
      </div>
      <div className='relative z-10'>
        <Navbar />
      </div>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col bg-gray-100 border-2 border-sky-400 rounded-xl max-w-[800px] p-4 mx-auto'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Id:</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Title:</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Author:</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Amount:</span>
            <span>{book.amount}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Quantity:</span>
            <span>{book.quantity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Create Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold'>Last Updated Time:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ShowBook;
