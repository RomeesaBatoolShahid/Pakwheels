'use client'
import { FadeRight } from '@/utility/Animation';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const usedCars = [
  {
    id: 1,
    name: 'Honda Accord 2018',
    price: '$18,000',
    description: 'Well-maintained sedan with low mileage and great fuel efficiency.',
    imageUrl: '/honda2.jpeg', 
  },
  {
    id: 2,
    name: 'Toyota Camry 2017',
    price: '$16,500',
    description: 'A reliable and smooth driving car with a spacious interior.',
    imageUrl: '/t.jpeg', 
  },
  {
    id: 3,
    name: 'Nissan Altima 2019',
    price: '$20,000',
    description: 'Stylish sedan with advanced safety features and good fuel economy.',
    imageUrl: '/n.jpeg', 
  },
  {
    id: 4,
    name: 'Mazda 3 2020',
    price: '$22,000',
    description: 'Sporty hatchback with an efficient engine and modern features.',
    imageUrl: '/m.jpeg', 
  },
  {
    id: 5,
    name: 'Ford Focus 2016',
    price: '$14,000',
    description: 'Compact car with excellent handling and a comfortable ride.',
    imageUrl: '/f.jpeg', 
  },
  {
    id: 6,
    name: 'Chevrolet Malibu 2018',
    price: '$17,500',
    description: 'Spacious sedan with a smooth drive and modern technology features.',
    imageUrl: '/c.jpeg', 
  },
];

const UsedCars = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Page Header */}
      <div className="container mx-auto text-center mb-12">
        <motion.h1 
           variants={FadeRight(0.9)}
           initial="hidden"
           animate="visible"
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Used Cars for Sale</motion.h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Browse through our wide selection of used cars. Find the perfect car for your needs at a great price.
        </p>
      </div>

     
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {usedCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={car.imageUrl}
                alt={car.name}
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
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

export default UsedCars;
