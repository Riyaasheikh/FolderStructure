import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Layout - Only shows on mobile */}
        <div className="block md:hidden ">
          {/* Logo */}
          <div className="text-left ml-15 mb-6 mt-0 ">
            <div className="flex  gap-2 text-white text-lg font-semibold">
              <img
                className="invert h-6 w-6"
                src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
                alt="Portfore Logo"
              />
              Portfore
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8  mb-5">
            <div>
              <h4 className="text-white font-semibold mb-3 text-center">
                Main
              </h4>
              <ul className="space-y-2 text-sm text-center">
                <li>
                  <a
                    href="/"
                    className={`hover:text-white transition-colors ${
                      isActive("/") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    className={`hover:text-white transition-colors ${
                      isActive("/work") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-center">
                More
              </h4>
              <ul className="space-y-2 text-sm text-center">
                <li>
                  <a
                    href="/404"
                    className={`hover:text-white transition-colors ${
                      isActive("/404") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    404
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className={`hover:text-white transition-colors ${
                      isActive("/contact") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-left ml-17 mb-5">
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Term and Conditions
              </a>
            </div>
          </div>
          <div className="text-left ml-15 pt-6 mb-4">
            <p className="text-sm">&copy; Copyright Portfore 2024</p>
          </div>
          <div className="flex gap-2 ml-16">
            <a
              href="#"
              className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <FaXTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>
        <div className="hidden md:block ">
          <div className="grid grid-cols-5 gap-8 lg:gap-65 mb-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-white text-lg font-semibold">
                <img
                  className="invert h-6 w-6"
                  src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
                  alt="Portfore Logo"
                />
                Portfore
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Main</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    className={`hover:text-white transition-colors ${
                      isActive("/") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    className={`hover:text-white transition-colors ${
                      isActive("/work") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">More</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/404"
                    className={`hover:text-white transition-colors ${
                      isActive("/404") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    404
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className={`hover:text-white transition-colors ${
                      isActive("/contact") ? "text-[#D63E18]" : "text-gray-300"
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <div className="flex flex-col gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Term and Conditions
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-4 pt-8">
            <p className="text-sm">&copy; Copyright Portfore 2024</p>

            <div className="flex gap-2">
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaXTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
