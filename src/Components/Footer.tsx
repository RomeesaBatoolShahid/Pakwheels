'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="/About" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/Contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: support@pakwheels.com</p>
            <p className="text-sm mb-4">Phone: +92 300 1234567</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/romeesa-batool-shahid-b0965b300/" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm mb-4">
              PakWheels is Pakistans #1 platform to buy and sell cars. Our mission is to provide a seamless
              car selling experience, connecting buyers and sellers with ease.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Romeesa Batool Shahid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
