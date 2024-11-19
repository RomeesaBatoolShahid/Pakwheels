'use client'
import React from 'react'


    function ThankYouPage() {
        return (
            <div className="bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center h-screen">
                <div className="text-center p-8 bg-white shadow-lg rounded-lg border border-gray-200 max-w-md mx-auto">
                    <h1 className="text-4xl font-bold text-indigo-600 mb-4">Thank You for Shopping!</h1>
                    <p className="text-lg text-gray-700">
                        Your order will be delivered in <span className="font-semibold">three business days</span>.
                    </p>
                </div>
            </div>
        );
    }
    
    export default ThankYouPage;
  
