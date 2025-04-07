import React from 'react';

export default function MyLanguagesTools() {
  const tools = [
    { name: 'HTML', icon: 'bxl-html5', color: '#E44D26' },
    { name: 'CSS', icon: 'bxl-css3', color: '#1572B6' },
    { name: 'JavaScript', icon: 'bxl-javascript', color: '#F0DB4F' },
    { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: '#38BDF8' },
    { name: 'Firebase', icon: 'bxl-firebase', color: '#FFA611' },
    { name: 'Git', icon: 'bxl-git', color: '#F05032' },
    { name: 'GitHub', icon: 'bxl-github', color: '#181717' },
    { name: 'jQuery', icon: 'bxl-jquery', color: '#0769AD' },
    { name: 'React', icon: 'bxl-react', color: '#61DBFB' },
    { name: 'Webpack', icon: 'fab fa-webpack', color: '#8DD6F9' },  // Updated to FontAwesome
    { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' },  // Updated to FontAwesome
  ];

  return (
    <div className="p-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">My Languages & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#080808] rounded-3xl hover:bg-gray-800 transition duration-300"
            >
              <i
                className={`${tool.icon} text-5xl`}
                style={{ color: tool.color }}
              ></i>
              <p className="mt-4 text-xl text-white">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
