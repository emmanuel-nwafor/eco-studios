import React from 'react'
import { GridSmallBackgroundDemo } from '../components/ui/GridSmallBackgroundDemo'
import { FloatingNav } from '../components/ui/floating-navbar'
import About from './About';
import Services from './Services';
import { Testimonials } from './Testimonials';
import Projects from './Projects';
import { ContactPage } from './ContactPage';

// Temp nav contents
const navItems = [
    { name: "Home", link: "#home", icon: "🏠" },
    { name: "About", link: "#about", icon: "ℹ️" },
    { name: "Projects", link: "#projects", icon: "💻" },
  ];

//   Temp testimonials
const movingCardsItems = [
    { quote: "Working with Emmanuel has been an incredible experience. His technical expertise and problem-solving skills are unparalleled. Whenever we face a challenge, he come up with creative, efficient solutions that not only fix the issue but improve the project overall. His is also a fantastic team player, always willing to help others and explain complex concepts in a way that's easy to understand.", name: "GraceTech Kid", title: "Fullstack Dev." },
    { quote: "Indeed Emmanuel is one with exeptional value and a developer that i would recommend to everyone, because if his honesty, zeal and eagerness to know more.", name: "Blessing Nwankwo", title: "Digital Marketer" },
    { quote: "Emmanuel is an absolute professional and a pleasure to work with. He delivered a high-quality service that exceeded my expectations, and his attention to detail was evident throughout the project. What impressed me most was his ability to listen to my needs and translate them into a seamless, user-friendly application. I would highly recommend Emmanuel to anyone looking for a skilled and reliable developer.", name: "Bright Chibuike", title: "Civil Engineer" },
    // Add more items as needed
  ];

export default function Rendering() {
  return (
    <>
    <FloatingNav navItems={navItems} />
      <GridSmallBackgroundDemo />
      <About />
      <Services />
      <Testimonials items={movingCardsItems} direction="left" speed="normal" pauseOnHover={true} />
       <Projects />
       <ContactPage />
    </>
  )
}
