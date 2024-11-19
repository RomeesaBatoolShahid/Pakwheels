'use client'
import Link from 'next/link';
import React from 'react';

const MercedesBenzGLS = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/mer.jpeg"
            alt="Mercedes-Benz GLS 2022"
            className="w-full object-cover h-80 rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Mercedes-Benz GLS 2022</h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">$105,000</p>
          <p className="text-gray-600 mb-6">
            The Mercedes-Benz GLS 2022 is a luxurious full-size SUV with all the features you had expect,
            including advanced technology, smooth ride quality, and premium materials.
          </p>
          <button className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md text-lg">
            <Link href="/Thankyou">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MercedesBenzGLS;
