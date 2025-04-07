import { FloatingNav } from './components/ui/floating-navbar';
import { GridSmallBackgroundDemo } from './components/ui/GridSmallBackgroundDemo';
import About from './my-components/About';
import { Testimonials } from './my-components/Testimonials';
import Services from './my-components/Services';
import { PlaceholdersAndVanishInput } from './my-components/PlaceholdersAndVanishInput';
// import { PinContainer } from './my-components/PinContainer';
// import ContactBackgroundBeams from './my-components/ContactBackgroundBeams';

const navItems = [
  { name: "Home", link: "#home", icon: "🏠" },
  { name: "About", link: "#about", icon: "ℹ️" },
  { name: "Projects", link: "#projects", icon: "💻" },
];

const movingCardsItems = [
  { quote: "Working with Emmanuel has been an incredible experience. His technical expertise and problem-solving skills are unparalleled. Whenever we face a challenge, he come up with creative, efficient solutions that not only fix the issue but improve the project overall. His is also a fantastic team player, always willing to help others and explain complex concepts in a way that's easy to understand.", name: "GraceTech Kid", title: "Fullstack Dev." },
  { quote: "Indeed Emmanuel is one with exeptional value and a developer that i would recommend to everyone, because if his honesty, zeal and eagerness to know more.", name: "Blessing Nwankwo", title: "Digital Marketer" },
  { quote: "Emmanuel is an absolute professional and a pleasure to work with. He delivered a high-quality service that exceeded my expectations, and his attention to detail was evident throughout the project. What impressed me most was his ability to listen to my needs and translate them into a seamless, user-friendly application. I would highly recommend Emmanuel to anyone looking for a skilled and reliable developer.", name: "Bright Chibuike", title: "Civil Engineer" },
  // Add more items as needed
];

function App() {
  return (
    <>
      <div>
        <div className="bg-black">
          <FloatingNav navItems={navItems} />
          <GridSmallBackgroundDemo />
          <About />
          <Services />
          <Testimonials items={movingCardsItems} direction="left" speed="normal" pauseOnHover={true} />
          <PlaceholdersAndVanishInput />
          {/* <PinContainer /> */}
          {/* <ContactBackgroundBeams /> */}
        </div>
      </div>
    </>
  );
}

export default App;
