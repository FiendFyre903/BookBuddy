import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#3F4E4F] text-[#DCD7C9] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center p-6 container mx-auto">
        {/* Footer Logo */}
        <h1 className="text-xl font-bold mb-4 md:mb-0">
          <a href="#" className="hover:text-[#A27B5C]">BookSite</a>
        </h1>

        {/* Footer Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#A27B5C]">About Us</a>
          <a href="#contact" className="hover:text-[#A27B5C]">Contact</a>
          <a href="#privacy" className="hover:text-[#A27B5C]">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#A27B5C]">Terms of Service</a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A27B5C]">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A27B5C]">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A27B5C]">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
