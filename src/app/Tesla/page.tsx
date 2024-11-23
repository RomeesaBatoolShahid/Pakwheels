'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

const TeslaModelX = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Car Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <div className="relative w-full h-80">
            <Image
              src="/tesla.jpeg"  
              alt="Tesla Model X 2022"
              layout="fill"
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Car Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Tesla Model X 2022</h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">$90,000</p>
          <p className="text-gray-600 mb-6">
            The Tesla Model X 2022 is a high-performance all-electric SUV with amazing features like 
            self-driving capabilities, cutting-edge technology, and an impressive range.
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

export default TeslaModelX;
