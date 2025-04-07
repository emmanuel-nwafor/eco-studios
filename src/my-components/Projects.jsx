import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'Creative UI',
    image: '/src/assets/colourful.png',
  },
  {
    id: 2,
    title: 'Frontend Magic',
    image: 'https://source.unsplash.com/random/300x300?code',
  },
  {
    id: 3,
    title: 'Sleek Design',
    image: 'https://source.unsplash.com/random/300x300?design',
  },
  {
    id: 4,
    title: 'Modern Stack',
    image: 'https://source.unsplash.com/random/300x300?technology',
  },
]

export default function Projects() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 p-4 rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
