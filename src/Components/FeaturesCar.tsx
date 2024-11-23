'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeRight, FadeLeft } from '@/utility/Animation';
import Image from 'next/image';  // Import the Image component from next/image

const HomePage = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <motion.h1 
        variants={FadeRight(1)}
        initial="hidden"
        animate="visible"
        className="text-3xl text-center font-bold text-gray-800 mb-8"
      >
        Featured Cars
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Audi Q5 */}
        <motion.div 
          variants={FadeRight(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/audi.jpeg"
            alt="Audi Q5"
            width={500}  // Set appropriate width for the image
            height={300} // Set appropriate height for the image
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Audi Q5 2020</h2>
          <p className="text-blue-600">$35,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/Audi">
            View Details
          </Link>
        </motion.div>

        {/* BMW X5 */}
        <motion.div 
          variants={FadeRight(1)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/bmw.jpeg"
            alt="BMW X5"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">BMW X5 2019</h2>
          <p className="text-blue-600">$45,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/BMW">
            View Details
          </Link>
        </motion.div>

        {/* Tesla Model X */}
        <motion.div
          variants={FadeRight(1.5)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/tesla.jpeg"
            alt="Tesla Model X"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Tesla Model X 2022</h2>
          <p className="text-blue-600">$90,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/Tesla">
            View Details
          </Link>
        </motion.div>

        {/* Porsche 911 */}
        <motion.div
          variants={FadeLeft(1.5)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/por.jpeg"
            alt="Porsche 911"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Porsche 911 2021</h2>
          <p className="text-blue-600">$120,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/Porsche">
            View Details
          </Link>
        </motion.div>

        {/* Range Rover Velar */}
        <motion.div 
          variants={FadeLeft(1)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/rang.webp"
            alt="Range Rover Velar"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Range Rover Velar 2021</h2>
          <p className="text-blue-600">$85,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/rang">
            View Details
          </Link>
        </motion.div>

        {/* Mercedes Benz GLS */}
        <motion.div 
          variants={FadeLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Image
            src="/mer.jpeg"
            alt="Mercedes Benz GLS"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Mercedes Benz GLS 2022</h2>
          <p className="text-blue-600">$105,000</p>
          <Link className="inline-block text-white bg-blue-600 hover:bg-blue-800 mt-4 px-6 py-2 rounded-md text-lg transition-all" href="/mercedes">
            View Details
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
