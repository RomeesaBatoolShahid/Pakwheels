'use client'
import React, { useState } from 'react';
import { AlignJustify, ChevronDown } from 'lucide-react';
import { MdPhoneIphone } from "react-icons/md";
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header role="banner" className="fixed w-full top-0 left-0 bg-black text-white h-32">
      <nav role="navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with App link and Sign Up buttons */}
        <div className="flex justify-between items-center py-4 border-b-2">
          <div className="flex gap-3 items-center">
            <i><MdPhoneIphone /></i>
            <p>Download Via App</p>
          </div>
          <div className="flex items-center">
            <button className="mx-3 py-1 px-1">Sign Up</button>
            <button className="py-1 px-1">Log In</button>
          </div>
        </div>

        {/* Logo and Main Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl">
            PakWheels <span className="text-red-500 text-[48px]">.</span>
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-white">
            <AlignJustify size={24} />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-sm uppercase font-medium ">
            <li><Link href="/About" className="hover:text-gray-300">About</Link></li>
            <li className="relative">
              <Link href="/NewCars" className="hover:text-gray-300 flex">
                New Cars <ChevronDown size={16} color="#ffffff" />
              </Link>
            </li>
            <li className="relative">
              <Link href="/UsedCars" className="hover:text-gray-300 flex">
                Used Cars <ChevronDown size={16} color="#ffffff" />
              </Link>
            </li>
            <li><Link href="/Blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link href="/servicesand" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/Contact" className="hover:text-gray-300">Contact Us</Link></li>
            <li>
              <button className="bg-red-700 px-3 py-1 flex">
                Post an Ad <ChevronDown size={16} color="#ffffff" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (When Open) */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute w-full z-40 bg-black text-white p-4`}>
        <ul className="space-y-4 text-lg">
          <li><Link href="/About" className="block hover:text-gray-300">About</Link></li>
          <li><Link href="/NewCars" className="block hover:text-gray-300">New Cars</Link></li>
          <li><Link href="/UsedCars" className="block hover:text-gray-300">Used Cars</Link></li>
          <li><Link href="/Blog" className="block hover:text-gray-300">Blog</Link></li>
          <li><Link href="/servicesand" className="block hover:text-gray-300">Services</Link></li>
          <li><Link href="/Contact" className="block hover:text-gray-300">Contact Us</Link></li>
          <li>
            <button className="bg-red-700 px-3 py-1 flex">
              Post an Ad <ChevronDown size={16} color="#ffffff" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
