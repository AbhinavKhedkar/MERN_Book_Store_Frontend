import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-gray-600 bg-yellow-100 rounded-md p-2'>No.</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md p-2'>Title</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md max-md:hidden p-2'>Author</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md max-md:hidden p-2'>Publish Year</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md max-md:hidden p-2'>Amount</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md max-md:hidden p-2'>Quantity</th>
          <th className='border border-gray-600 bg-yellow-100 rounded-md p-2'>Operation</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center'>{index + 1}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center'>{book.title}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center max-md:hidden'>{book.author}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center max-md:hidden'>{book.amount}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center max-md:hidden'>{book.quantity}</td>
            <td className='border border-gray-700 bg-yellow-100 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`} className='text-green-800 hover:text-green-600'>
                  <BsInfoCircle className='text-2xl' />
                </Link>
                <Link to={`/books/edit/${book._id}`} className='text-yellow-600 hover:text-yellow-400'>
                  <AiOutlineEdit className='text-2xl' />
                </Link>
                <Link to={`/books/delete/${book._id}`} className='text-red-600 hover:text-red-400'>
                  <MdOutlineDelete className='text-2xl' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
