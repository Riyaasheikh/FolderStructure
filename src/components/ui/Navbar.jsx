// Navbar.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getNavConfig } from "../../utils/navConfig";
import Buttons from "../global/Buttons";

const NavBar = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navConfig = getNavConfig(type);

  // Improved function to check if current path is active
  const isActive = (path) => {
    // Exact match for home page
    if (path === "/" && location.pathname === "/") return true;
    
    // For other pages, check if current path starts with the link path
    // but also ensure we don't get false positives (e.g., /work vs /works)
    if (path !== "/") {
      // Exact match
      if (location.pathname === path) return true;
      // Subroute match (e.g., /work/123 still highlights work)
      if (location.pathname.startsWith(path + '/')) return true;
    }
    
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0c0c0c] shadow-lg relative pt-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-white text-2xl font-semibold">
              <img 
                className="invert h-6 w-6" 
                src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png" 
                alt="" 
              />
              Portfore
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navConfig.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm lg:text-base transition-colors ${
                      isActive(link.href) 
                        ? "text-[#D63E18]" 
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {link.label}
                    {!isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-4">
           <Buttons 
            button1={navConfig.button.label}
            className={"px-3 py-2 bg-[#141414] text-white text-sm sm:text-base"} 
          />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isMenuOpen ? (
    
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
   
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>


        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0c0c0c] border-t border-gray-800 shadow-xl z-50">
            <div className="px-4 py-6 space-y-4">
              <ul className="space-y-3">
                {navConfig.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive(link.href) 
                          ? "text-[#D63E18]" 
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-gray-800">
                <button className="w-full bg-transparent text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 transform hover:scale-105 shadow-lg">
                  {navConfig.button.label}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;