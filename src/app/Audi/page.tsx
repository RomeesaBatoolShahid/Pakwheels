'use client'
import Link from 'next/link';
import React from 'react';

const AudiQ5 = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Car Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/audi.jpeg"  // Replace with actual image path
            alt="Audi Q5 2020"
            className="w-full object-cover h-80 rounded-lg"
          />
        </div>

        {/* Car Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Audi Q5 2020</h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">$35,000</p>
          <p className="text-gray-600 mb-6">
            The Audi Q5 2020 is a luxurious SUV with top-notch features and powerful performance. 
            It offers excellent handling and a comfortable ride with ample space for passengers.
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

export default AudiQ5;
