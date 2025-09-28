import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For the new X (Twitter) icon

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-white text-lg font-semibold">
            {/* Replace with your actual logo if needed */}
            <span className="w-6 h-6 rounded-full bg-white inline-block" />
            Portfore
          </div>
          <p className="text-sm">&copy; Copyright Pomocrea 2024</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>Our Mission</li>
            <li>Our Vision</li>
            <li>Our Story</li>
            <li>Meet Our Team</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Time Management</li>
            <li>Productivity Enhancement</li>
            <li>Remote Collaboration</li>
            <li>Progress Tracking</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>eBooks</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-start md:justify-end">
          <a
            href="#"
            className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800"
          >
            <FaXTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center hover:bg-gray-800"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-end gap-6 text-sm text-gray-400">
        <a href="#">Privacy Policy</a>
        <a href="#">Legal</a>
        <a href="#">Term of Services</a>
      </div>
    </footer>
  );
};

export default Footer;
