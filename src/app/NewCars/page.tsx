'use client'
import { FadeRight } from '@/utility/Animation';
import { motion } from 'framer-motion';
import React from 'react';

const NewCars = () => {
  // Updated list with 6 new cars
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla 2024',
      price: '$22,000',
      description: 'A reliable sedan with modern features and great fuel efficiency.',
      imageUrl: '/toyota.webp', // Add image to your public folder
    },
    {
      id: 2,
      name: 'Honda Civic 2024',
      price: '$24,000',
      description: 'Sporty, stylish, and packed with the latest tech features.',
      imageUrl: '/honda.jpg', // Add image to your public folder
    },
    {
      id: 3,
      name: 'Nissan Altima 2024',
      price: '$23,500',
      description: 'A sleek sedan with premium interior features and a smooth drive.',
      imageUrl: '/nissan.jpg', // Add image to your public folder
    },
    {
      id: 4,
      name: 'Mazda CX-5 2024',
      price: '$26,000',
      description: 'A compact SUV with an elegant design and excellent handling.',
      imageUrl: '/mazda.jpeg', // Add image to your public folder
    },
    {
      id: 5,
      name: 'BMW X5 2024',
      price: '$60,000',
      description: 'Luxury SUV with powerful performance and a high-tech interior.',
      imageUrl: '/bwm-suv.jpeg', // Add image to your public folder
    },
    {
      id: 6,
      name: 'Audi A4 2024',
      price: '$38,000',
      description: 'Premium compact sedan with advanced tech and a smooth, comfortable ride.',
      imageUrl: '/audiA4.jpeg', // Add image to your public folder
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center mb-12">
        <motion.h1
        variants={FadeRight(0.9)}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">New Cars for Sale</motion.h1>
        <p className="text-lg sm:text-xl text-gray-600">Browse through the latest new car models with competitive pricing.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{car.name}</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">{car.price}</p>
              <p className="text-gray-600 mb-6">{car.description}</p>
              <a
                href="#"
                className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md text-lg transition-all"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCars;
