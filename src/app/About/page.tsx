// About.js
import React from 'react';
import Image from 'next/image'; // Import Image component for optimized images

export default function About() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12">
      {/* Section 1: Hero Section */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          About PakWheels
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Your trusted platform for buying and selling cars in Pakistan.
        </p>
      </div>

      {/* Section 2: Company Info */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600">
            PakWheels is Pakistan&apos;s #1 platform for buying and selling cars. We
            bring together a community of car enthusiasts, buyers, and sellers.
            Our mission is to create a seamless, secure, and transparent
            experience for everyone in the car-selling process. Whether you are
            looking to sell your car or find the car of your dreams, we make the
            process easy and hassle-free.
          </p>
          <p className="text-lg text-gray-600">
            With a commitment to innovation, we strive to offer the best
            features and services for both buyers and sellers. From price
            analysis tools to expert advice, our platform is designed to meet
            all your car-selling and buying needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="/9-1.jpg" // Replace with your image path
            alt="PakWheels Team"
            layout="responsive" // Ensures responsive image sizing
            width={800} // Adjust width to match the aspect ratio of your image
            height={600} // Adjust height to match the aspect ratio of your image
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 3: Our Mission */}
      <div className="container mx-auto text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to simplify the car selling and buying process, making
          it accessible and secure for everyone in Pakistan. We want to bring
          transparency and trust to the auto industry and ensure that our users
          get the best possible deals. With thousands of cars listed and a
          growing user base, PakWheels is changing the way people buy and sell
          cars in Pakistan.
        </p>
      </div>

      {/* Section 4: Testimonials or Features */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Platform</h3>
          <p className="text-gray-600">
            We are trusted by thousands of buyers and sellers across Pakistan
            for a seamless experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Transactions</h3>
          <p className="text-gray-600">
            Our platform ensures that all transactions are secure and that both
            buyers and sellers are protected.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Advice</h3>
          <p className="text-gray-600">
            We offer expert guidance and advice to help you make the best
            decision when selling or buying a car.
          </p>
        </div>
      </div>

      {/* Section 5: Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Romeesa Batool Shahid. All rights reserved.
        </p>
      </div>
    </div>
  );
}
