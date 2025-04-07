import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    heading: "Web Development",
    desc: "I create responsive and user-friendly websites using modern technologies like React, Tailwind CSS, Vite, and Webpack. My development approach focuses on performance, scalability, and clean code architecture. Whether it's a landing page or a full-stack web application, I ensure every project is optimized for speed, accessibility, and seamless user experience across all devices.",
    icon:  <i className='bx bx-code text-3xl text-blue-300 m-2'></i>,
    span: "sm:col-span-2",
  },
  {
    id: 2,
    heading: "UI/UX Design",
    desc: "I build intuitive, visually appealing, user-friendly, and fully responsive interfaces that adapt seamlessly across all screen sizes. My designs prioritize usability, accessibility, and aesthetic consistency to deliver a smooth and engaging user experience.",
    icon: <i className='bx bxl-figma text-3xl text-blue-300 m-2'></i>,},
  {
    id: 3,
    heading: "Consultation",
    desc: "I provide consultation services to help businesses improve their online presence and digital strategies.",
 
    icon: <i className='bx bx-chat text-3xl text-blue-300 m-2'></i>,},
  {
    id: 4,
    heading: "Responsive and User Friendly",
    desc: "I build intuitive, visually appealing, user-friendly, and responsive designs that not only look great but also deliver seamless interactions across devices. My focus is on creating interfaces that are both functional and aesthetically balanced, ensuring users enjoy smooth and meaningful experiences.",
    span: "sm:col-span-2 lg:col-span-2",
  
    icon: <i className='bx bxs-paint text-3xl text-blue-300 m-2'></i>,},
]

export default function Services() {
  return (
    <section className="bg-black p-9">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white font-bold text-2xl m-2">Services <span className="text-blue-300">{"{}"}</span></h1>
        <h2 className="text-white text-[27px] m-2">Readability & Efficiency</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {services.map(service => (
            <motion.div
              key={service.id}
            //   whileHover={{ scale: 1.03 }}
            //   whileTap={{ scale: 0.10 }}
              className={`bg-[#080808] text-white rounded-xl p-10 duration-300 ${service.span || ''}`}
            >
              <h3 className="font-bold text-xl text-gray-500 mb-2 flex items-center">
                {service.heading} {service.icon}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
