


import CarFeatures from "@/Components/FeaturesCar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

import React from 'react'

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
     
{/* Hero Section */}
<div className=""><Hero /></div>
{/* Cars */}
<div>
<CarFeatures />
</div>
<div>
  
</div>

    </div>
    
  )
}
