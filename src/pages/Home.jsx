import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MyWallpaper from "../components/images/Wallpaper6.jpeg";



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='mt-28'>
      <div className='shadow-md w-full sticky top-0 z-20'>
        <Header />
      </div>
      <div className="container mx-auto px-12 py-4">
        <span>
          <img src={MyWallpaper} alt="My Wallpaper" className="bg-cover w-full h-full left-0 top-0 -z-10 absolute" />
        </span>
        <div className='grid grid-cols-12 relative'>
          <div className='col-span-1 left-5 z-10 '>
            <Navbar />
          </div>
          <div className='col-span-10'>
            <div className='flex justify-center items-center gap-x-4'>
              <button
                className={`${showType === 'table' ? 'bg-yellow-300' : 'bg-yellow-100'
                  } hover:bg-yellow-300 px-4 py-1 rounded-lg`}
                onClick={() => setShowType('table')}
              >
                Table
              </button>
              <button
                className={`${showType === 'card' ? 'bg-yellow-300' : 'bg-yellow-100'
                  } hover:bg-yellow-300 px-4 py-1 rounded-lg`}
                onClick={() => setShowType('card')}
              >
                Card
              </button>
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl my-8'>Books List</h1>
              <Link to={`/books/create`}>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
              </Link>
            </div>
            {loading ? (
              <Spinner />
            ) : showType === 'table' ? (
              <BooksTable books={books} />
            ) : (
              <BooksCard books={books} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;