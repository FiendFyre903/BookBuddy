import React from 'react';
import { NavbarMenu } from '../../Data/data';

const Navbar = () => {
  return (
    <div className="shadow-lg bg-[#3F4E4F]">
      <nav className="flex justify-between p-4 container mx-auto">
        <h1 className="text-2xl text-left text-[#DCD7C9]">
          <a href="#" className="hover:text-[#A27B5C]">BookSite</a>
        </h1>
        <div className="md:block">
          <ul className="flex gap-6 items-center text-[#DCD7C9] font-bold">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block py-1 hover:text-[#A27B5C] font-semibold"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
