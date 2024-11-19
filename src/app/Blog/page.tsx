// pages/blog.js
'use client'
import React from 'react';
// import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeRight } from '@/utility/Animation';

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'How to Sell Your Car in Pakistan',
      summary: 'A step-by-step guide on how to sell your car quickly and for the best price in Pakistan.',
      date: '2024-10-01',
      slug: 'how-to-sell-your-car-in-pakistan',
    },
    {
      id: 2,
      title: 'The Best Cars for Families in 2024',
      summary: 'Discover the top cars for families that offer comfort, safety, and reliability.',
      date: '2024-09-25',
      slug: 'best-cars-for-families-2024',
    },
    {
      id: 3,
      title: 'Top 5 Tips for Maintaining Your Car',
      summary: 'Learn about essential maintenance tips to keep your car running smoothly and efficiently.',
      date: '2024-09-18',
      slug: 'top-5-tips-for-maintaining-your-car',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center mb-12">
        <motion.h1 
        variants={FadeRight(0.9)}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Latest Blog Posts</motion.h1>
        <p className="text-lg sm:text-xl text-gray-600">Stay updated with the latest tips and news from the automotive world.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              {/* <Link href={`/blog/${post.slug}`}> */}
                <a className="text-blue-600 hover:text-blue-800 cursor-pointer transition-all font-semibold">Read More →</a>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
