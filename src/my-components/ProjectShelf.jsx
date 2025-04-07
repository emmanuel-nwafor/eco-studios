import React from 'react';

const items = [
  {
    id: 1,
    title: 'Attendance App',
    link: 'https://attendance-system-sable.vercel.app/',
    image: '/src/assets/attendance.jpg',
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
    image: '/src/assets/banking.jpg',
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
    image: '/src/assets/jobbie.jpg',
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
    image: '/src/assets/otto-sons.jpg',
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
    image: '/src/assets/tvh.jpg',
    description:
      'A simple but yet high performance website, where users can search for movies, view the casts and watch trailers of the movie searched.',
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
    image: '/src/assets/la-madison.jpg',
    description:
      'A simple but yet high performance website, where users can search for movies, view the casts and watch trailers of the movie searched.',
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
    image: '/src/assets/jeju.jpg',
    description:
      'An e-commerce website for a store selling products, with a focus on user experience, perfomance and responsiveness.',
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
    </div>
  );
};

export default ProjectShelf;
