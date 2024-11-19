'use client'
import { FadeRight } from '@/utility/Animation';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Simulate form submission (you can replace this with an API call)
    try {
      setFormStatus('success');  // Simulate success

      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('error');  // If there's an error, set error state
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 py-16 px-6 md:px-12">
      {/* Hero Section */}
      <div className="container mx-auto text-center mb-12">
        <motion.h1 
           variants={FadeRight(0.9)}
           initial="hidden"
           animate="visible"
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">Get in Touch with Us</motion.h1>
        <p className="text-lg sm:text-xl text-gray-600">We are here to help you with any questions or concerns.</p>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600 mb-6">
            Reach out to us for assistance with buying or selling cars. We're always ready to help.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Email:</strong> support@pakwheels.com
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Phone:</strong> +92 300 1234567
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="youremail@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Feedback Message */}
          {formStatus && (
            <div className={`mt-6 text-center text-lg ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {formStatus === 'success'
                ? 'Your message has been sent successfully! 🎉'
                : 'Oops! There was an error. Please try again. 🙁'}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm">© 2024 Romeesa Batool Shahid. All rights reserved.</p>
      </div>
    </div>
  );
}
