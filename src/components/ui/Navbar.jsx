import React from 'react';
import { getNavConfig } from '../../utils/navConfig';

const NavBar = ({ type }) => {
  const navConfig = getNavConfig(type);

  return (
    <nav className="bg-[#0c0c0c] shadow-lg  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-white">🍁 Portfore</div>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-1 ">
            <ul className="flex items-center space-x-1  ">
              {navConfig.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="px-4 py-2  text-white font-sm text-sm lg:text-base  "
                  >
                    {link.label}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-4/5 group-hover:left-1/10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Button Section */}
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm lg:text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {navConfig.button.label}
            </button>
            
            {/* Mobile menu button */}
            
          </div>
        </div>

        {/* Mobile Menu - Hidden by default */}
   
      
      </div>
    </nav>
  );
};

export default NavBar;