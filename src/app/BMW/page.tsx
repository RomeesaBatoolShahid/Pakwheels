'use client'
import Link from 'next/link';
import React from 'react';

const BMWX5 = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Car Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/bmw.jpeg"  // Replace with actual image path
            alt="BMW X5 2019"
            className="w-full object-cover h-80 rounded-lg"
          />
        </div>

        {/* Car Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">BMW X5 2019</h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">$45,000</p>
          <p className="text-gray-600 mb-6">
            A premium luxury SUV with a smooth drive, excellent features, and a powerful engine.
            The BMW X5 provides a sophisticated driving experience with a high-end interior.
          </p>

          {/* Button or Contact Form */}
          <button className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md text-lg">
          <Link href="/Thankyou">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMWX5;
