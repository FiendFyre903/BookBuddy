import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import BookDetails from "./components/BookDetails/BookDetails"; // Import your BookDetails page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-grow">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Hero />} />
            <Route path="/bookdetails" element={<BookDetails />} /> {/* BookDetails route */}
            <Route path="/bookdetails/:bookId" element={<BookDetails />} /> {/* Individual BookDetails route */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
