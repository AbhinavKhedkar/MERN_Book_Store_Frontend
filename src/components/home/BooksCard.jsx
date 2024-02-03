import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {books.map((item) => (
                <div key={item._id} className="border-2 border-gray-300 p-4 bg-yellow-100 rounded-lg transition-transform transform hover:scale-105">
                    <BookSingleCard book={item} />
                </div>
            ))}
        </div>
    );
}

export default BooksCard;
