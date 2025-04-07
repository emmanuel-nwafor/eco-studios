import React from 'react';

// Import images properly for Vite/CRA to bundle them
import attendanceImg from '../assets/attendance.jpg';
import bankingImg from '../assets/banking.jpg';
import jobbieImg from '../assets/jobbie.jpg';
import ottoSonsImg from '../assets/otto-sons.jpg';
import tvhImg from '../assets/tvh.jpg';
import laMadisonImg from '../assets/la-madison.jpg';
import jejuImg from '../assets/jeju.jpg';
import Footer from './Footer';

const items = [
  {
    id: 1,
    title: 'Attendance App',
    link: 'https://attendance-system-sable.vercel.app/',
    image: attendanceImg,
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
    image: bankingImg,
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
    image: jobbieImg,
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
    image: ottoSonsImg,
    description:
      'A car rental, repair, and selling web app using local storage for data persistence.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 5,
    title: 'TV Hub',
    link: 'https://tvh-woad.vercel.app/',
    image: tvhImg,
    description:
      'A high-performance website where users can search movies, view cast, and watch trailers.',
    techStack: [
      { icon: 'bxl-html5', color: '#E44D26' },
      { icon: 'bxl-css3', color: '#1572B6' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 6,
    title: 'La Madison Agency',
    link: 'https://emmanuel-nwafor.github.io/La-Madison-Agency/',
    image: laMadisonImg,
    description:
      'A modern agency site showcasing features, services, and client engagement tools.',
    techStack: [
      { icon: 'bxl-html5', color: '#E44D26' },
      { icon: 'bxl-css3', color: '#1572B6' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    id: 7,
    title: 'Jeju Store',
    link: 'https://emmanuel-nwafor.github.io/La-Madison-Agency/',
    image: jejuImg,
    description:
      'An e-commerce website focusing on user experience, performance, and responsiveness.',
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-css3', color: '#1572B6' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
];

const ProjectShelf = () => {
  return (
    <div className="bg-black text-white p-9">
      <h2 className="text-3xl font-bold mb-8 text-center">{'<>'}Project Shelf{'</>'}</h2>
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
      </div>
      <Footer />
    </div>
  );
};

export default ProjectShelf;
