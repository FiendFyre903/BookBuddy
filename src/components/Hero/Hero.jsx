import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // For page navigation

const Hero = () => {
  const [searchText, setSearchText] = useState("");
  const [trendingBooks, setTrendingBooks] = useState([]);
  const navigate = useNavigate(); // To navigate to a new page

  useEffect(() => {
    // Fetch trending books data from Google Books API
    const fetchTrendingBooks = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=top books`);
        const data = await response.json();
        if (data.items) {
          setTrendingBooks(data.items);
        } else {
          console.error('No trending books found in the response');
        }
      } catch (error) {
        console.error('Error fetching trending books data:', error);
      }
    };

    fetchTrendingBooks();
  }, []);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    if (searchText.trim() === "") return;

    try {
      // Fetch book data from Google Books API
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=30`);
      const data = await response.json();
      
      if (data.items) {
        navigate(`/bookdetails`, { state: { books: data.items } });
      } else {
        console.error('No items found in the response');
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
    }

    setSearchText(""); // Clear the search bar
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#2C3639] text-[#DCD7C9] text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Your Personal Reading Hub</h1>
        <p className="text-lg mb-6">Discover and track your favorite books effortlessly</p>
        
        {/* Search Bar */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="py-2 rounded-md bg-[#DCD7C9] flex items-center gap-2 px-2">
            <input
              type="text"
              placeholder="Search for books..."
              value={searchText}
              onChange={handleInputChange}
              className="text-[#2C3639] focus:outline-none flex-grow bg-transparent"
            />
            <button
              onClick={handleSearch}
              className="font-bold text-[#2C3639] hover:text-[#A27B5C] transition"
            >
              <IoSearchOutline size={24} />
            </button>
          </div>
          <button className="px-2 py-2 rounded-md font-bold bg-[#3F4E4F] hover:bg-[#A27B5C] transition text-[#DCD7C9]">
            Filters
          </button>
        </div>
      </div>

      {/* Trending Books Section */}
      <div className="bg-[#3F4E4F] py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#DCD7C9]">Trending Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendingBooks.map((book) => {
            const imageUrl = book.volumeInfo.imageLinks?.extraLarge ||
                             book.volumeInfo.imageLinks?.large ||
                             book.volumeInfo.imageLinks?.medium ||
                             book.volumeInfo.imageLinks?.small ||
                             book.volumeInfo.imageLinks?.thumbnail ||
                             book.volumeInfo.imageLinks?.smallThumbnail;

            return (
              <div key={book.id} className="bg-[#A27B5C] shadow-md rounded-md p-4">
                <img src={imageUrl} alt={book.volumeInfo.title} className="w-full h-48 object-cover mb-4" />
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
