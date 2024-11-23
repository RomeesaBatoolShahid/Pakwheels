'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

const rang = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <div className="relative w-full h-80">
            <Image
              src="/rang.webp"
              alt="Range Rover Velar 2021"
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Range Rover Velar 2021</h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">$85,000</p>
          <p className="text-gray-600 mb-6">
            The Range Rover Velar is a luxury SUV with a sleek design, top performance, and advanced features.
            It offers a comfortable and powerful driving experience both on and off-road.
          </p>
          <button className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md text-lg">
            <Link href="/Thankyou">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default rang;
