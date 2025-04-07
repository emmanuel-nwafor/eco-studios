import React, { useState } from 'react';
import { HoverBorderGradient2 } from '../components/ui/hover-border-gradient2';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const items = [
  {
    id: 1,
    title: 'Attendance App',
    link: 'https://attendance-system-sable.vercel.app/',
    image: '/src/assets/attendance.png',
    description:
      'A facial recognition system for marking student attendance with Firebase support.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 2,
    title: 'Banking Finance App',
    link: 'https://banking-app-tawny-pi.vercel.app/',
    image: '/src/assets/banking.png',
    description:
      'A modern banking interface for handling transactions, savings, and user analytics.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 3,
    title: 'Jobbie',
    link: 'https://jobbie-six.vercel.app/',
    image: '/src/assets/jobbie.png',
    description:
      'A job portal where recruiters post jobs and seekers apply with a simple interface.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 4,
    title: 'Otto-Sons',
    link: 'https://otto-sons-web-app.vercel.app/',
    image: '/src/assets/otto-sons.png',
    description:
      'A car rental, repair, and selling web app using local storage for data persistence.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="bg-black text-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      {/* Carousel Section */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-48 sm:h-72 object-cover rounded-lg transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold">{items[currentIndex].title}</h3>
          </div>
        </div>

        {/* Nav Buttons */}
        <button
          onClick={prevItem}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>
        <button
          onClick={nextItem}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto mt-8">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-zinc-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-300 mb-3">{item.description}</p>
              <div className="flex gap-3 pointer-events-none">
                {item.techStack.map((tech, idx) => (
                  <i
                    key={idx}
                    className={`bx ${tech.icon} text-2xl`}
                    style={{ color: tech.color }}
                  ></i>
                ))}
              </div>
            </div>
          </a>
        ))}
        {/* Updated HoverBorderGradient2 to navigate to the "project-shelf" page */}
        <Link to="/project-shelf">
          <HoverBorderGradient2 />
        </Link>
      </div>
    </div>
  );
}
