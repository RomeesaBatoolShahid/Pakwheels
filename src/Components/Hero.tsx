'use client'
import React from 'react'
import { FadeRight, FadeLeft, Fadeup } from '@/utility/Animation';
import { motion } from 'framer-motion'
import { Check } from 'lucide-react';



export default function Hero() {
    return (
        <div className='text-center justify-center py-4 relative z-0'>
            <div className='mt-48'>
                    <motion.img
                     variants={Fadeup(0.5)}
                     initial="hidden"
                     animate="visible" 
                    src="/home.png" alt="cars" className='translate-z-0 w-[54rem] h-full ml-44'/>
                </div>
            <div className='mt-20 w-full h-full'>
                <motion.div
                    variants={Fadeup(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='w-full h-full flex justify-center'>
                  
                </motion.div>
            </div>
            <br /><br />
            <div>
                <div>
                    <motion.h1
                        variants={FadeRight(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='font-bold text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white'>
                        Sell Your Car On PakWheels and Get The Best Price
                    </motion.h1>
                </div>
                <h1 className="bg-white text-xl md:text-3xl lg:text-4xl hidden md:inline-block relative -z-10 top-36 right-2">
    OR
</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div className='border-r-gray-500 my-6 border-r-2 -z-20 border-gray-600 leading-10'>
                        <motion.h2
                            variants={FadeRight(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='text-blue-600 text-lg sm:text-xl'>
                            Post Your Ad On PakWheels
                        </motion.h2>
                        <div className='text-center mx-8 sm:mx-16'>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> Post Your Ad For Free In 3 Easy Steps</p>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> Get Genuine Offers from Verified Buyers</p>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> Sell Your Car Fast At Best Price</p>
                        </div>
                        <motion.button
                            variants={FadeRight(1.3)}
                            initial="hidden"
                            animate="visible"
                            className='bg-red-600 text-white my-5 py-2 px-6 rounded-md'>
                            Post Your Ad
                        </motion.button>
                    </div>
                    <div className='border-r-gray-500 my-6 leading-10'>
                        <motion.h2
                            variants={FadeLeft(1)}
                            initial="hidden"
                            animate="visible"
                            className='text-blue-600 text-lg sm:text-xl'>
                            Try PakWheels Sell it For Me
                        </motion.h2>
                        <div className='text-center mx-8 sm:mx-16'>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> Dedicated Sell Experts To Sell Car</p>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> We Bargain For You</p>
                            <p><i className='relative -z-10 top-2 left-0 inline-block'><Check /></i> We Ensure Safe And Secure Transaction</p>
                        </div>
                        <motion.button
                            variants={FadeRight(1)}
                            initial="hidden"
                            animate="visible"
                            className='bg-blue-400 text-white my-5 py-2 px-6 rounded-md'>
                            Register Your Car
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}
