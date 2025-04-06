import React from 'react'

export default function Services() {
  return (
    <>
        <div className="bg-black p-9 text-white">
            <h1 className="text-white font-bold text-2xl m-2">Services {"{}"}</h1>
            <h1 className="text-white text-[27px] m-2">Readability & Efficeincy</h1>
    
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            <div className="p-6 bg-[#080808] m-2 rounded-2xl">
                <h1 className="text-gray-500 text-xl font-bold">Web Development</h1>
                <p className="mt-5">
                I create responsive and user-friendly websites using modern technologies like React, Tailwind CSS, and Vite.
                </p>
            </div>
    
            <div className="p-6 bg-[#080808] m-2 rounded-2xl">
                <h1 className="text-gray-500 text-xl font-bold">UI/UX Design</h1>
                <p className="mt-5">
                I design intuitive and visually appealing user interfaces that enhance user experience.
                </p>
            </div>
    
            <div className="p-6 bg-[#080808] m-2 rounded-2xl">
                <h1 className="text-gray-500 text-xl font-bold">Consultation</h1>
                <p className="mt-5">
                I provide consultation services to help businesses improve their online presence and digital strategies.
                </p>
            </div> 
            </div>
        </div>
    </>
  )
}
