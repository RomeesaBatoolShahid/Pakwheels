import React from 'react'
import Image from 'next/image'

export default function Car() {
  return (
    <div>
        
        {/* Image */}
        <div className='mt-48'>
                    <Image width={1980} height={1080} className='translate-z-0 w-[54rem] h-full' src="/home.png" alt="home" />
                </div>
    </div>
  )
}
