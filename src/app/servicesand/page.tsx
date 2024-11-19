'use client'
import React from 'react';
import { CheckCircle } from 'lucide-react'; // You can import icons from lucide-react or heroicons
import { motion } from 'framer-motion';
import { FadeRight } from '@/utility/Animation';

const services = [
  {
    id: 1,
    title: 'Sell Your Car',
    description: 'Easily list your car for sale and get genuine offers from verified buyers.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Buy a Car',
    description: 'Browse through a wide range of cars for sale and find the best deals.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Vehicle Inspection',
    description: 'Get your car inspected by experts to ensure that it is in top condition before buying or selling.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Car Financing',
    description: 'Find affordable financing options and payment plans for your next car purchase.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 5,
    title: 'Car Insurance',
    description: 'Get reliable car insurance coverage to keep you and your vehicle protected on the road.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 6,
    title: 'Car Documentation',
    description: 'We help you with the documentation and paperwork for a hassle-free buying or selling experience.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Page Header */}
      <div className="container mx-auto text-center mb-12">
        <motion.h1
         variants={FadeRight(0.9)}
         initial="hidden"
         animate="visible"
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Our Services</motion.h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We offer a wide range of services to make your car buying and selling experience seamless and enjoyable.
        </p>
      </div>

      {/* Services List */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 text-center">
              <a
                href="#"
                className="inline-block text-white bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md text-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
