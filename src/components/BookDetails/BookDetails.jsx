import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { books } = location.state || { books: [] };

  return (
    <div className="bg-[#3F4E4F] py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#DCD7C9]">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-[#A27B5C] shadow-md rounded-md p-4">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#2C3639]">{book.volumeInfo.title}</h3>
            <p className="text-[#DCD7C9]">Author: {book.volumeInfo.authors?.join(', ')}</p>
            <p className="text-[#DCD7C9]">Pages: {book.volumeInfo.pageCount}</p>
            <p className="text-[#DCD7C9]">Published: {book.volumeInfo.publishedDate}</p>
            <p className="text-[#DCD7C9]">Category: {book.volumeInfo.categories?.join(', ')}</p>
            <button
              onClick={() => navigate(`/bookdetails/${book.id}`, { state: { book } })}
              className="mt-2 px-2 py-1 rounded-md font-bold bg-[#3F4E4F] hover:bg-[#A27B5C] transition text-[#DCD7C9]"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
