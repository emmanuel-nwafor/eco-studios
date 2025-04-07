import React from 'react';
import image from "../assets/moji-png2.png";
import image2 from "../assets/colourful.png";
import { ContainerTextFlip2 } from '../components/ui/container-text-flip2';
// import { GlareCard } from '../components/ui/glare-card'

export default function About() {
  return (
    <>
      <div className="bg-black p-9 text-white" id="about">
        <h1 className="text-white font-bold text-2xl m-2">About Me <span className="text-blue-300">{"</>"}</span></h1>
        <h1 className="text-white text-[27px] m-2">Strategies & Principles</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          <div className="p-0 bg-[#080808] m-2 rounded-2xl bg-[url()]">
            <img src={image} alt="profile" className="relative z-10 rounded-xl transition-all duration-300 filter grayscale hover:grayscale-0" />
          </div>

          <div className="p-6 bg-[#080808] m-2 rounded-2xl">
            <ContainerTextFlip2 /> 

            <p className="mt-5">
              Frontend developer with 3 years of experience building clean, responsive, and user-friendly web interfaces. <br /> <br />
              I specialize in React, Tailwind CSS, and modern tools like Vite — focused on crafting fast and intuitive user experiences that solve real problems. <br /> <br />
              My approach to development is practical, design-conscious, and performance-driven. Whether I’m building dashboards, landing pages, or dynamic single-page apps, I always aim for that sweet spot where functionality meets simplicity.
              I’m also passionate about exploring rare and emerging frontend tools like Svelte, Elm, and WebAssembly with Rust — because I believe the best interfaces are born at the edge of innovation.
            </p>

            
        {/* CV Download Button */}
          <div className="mt-6 text-">
            <a href="src/my-cv/My Frontend CV - Resume.pdf" download>
              <button className="px-6 py-3 bg-blue-300 text-black hover:bg-blue-500 transition-all hover:text-white font-light">
                Download My CV
              </button>
            </a>
          </div>

          </div>

          <div className="p-6 bg-zinc-900 m-2 rounded-2xl">
            <h1 className="text-gray-500 text-xl font-bold">Hobbies:</h1>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li><i className="bx bx-image-alt mr-2"></i>Browsing modern UI/UX designs for inspiration</li>
              <li><i className="bx bx-palette mr-2"></i>Experimenting with animations and micro-interactions</li>
              <li><i className="bx bx-music mr-2"></i>Listening to music or ambient soundscapes to unwind</li>
            </ul>
          </div>

          <div className="bg-zinc-300 m-2 rounded-2xl overflow-hidden">
            <img 
              src={image2} 
              alt="" 
              className="transition-transform duration-500 transform hover:scale-110 hover:rotate-3d"
            />
          </div>

        </div>
      </div>
    </>
  );
}
