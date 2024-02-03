import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct import for Route
import Home from './pages/Home';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
};

export default App;
