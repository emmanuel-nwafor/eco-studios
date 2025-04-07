import { FloatingNav } from './components/ui/floating-navbar';
import { GridSmallBackgroundDemo } from './components/ui/GridSmallBackgroundDemo';
import About from './my-components/About';
import { Testimonials } from './my-components/Testimonials';
import Services from './my-components/Services';
import StickyScroll from './components/ui/StickyScroll';

const navItems = [
  { name: "Home", link: "#home", icon: "🏠" },
  { name: "About", link: "#about", icon: "ℹ️" },
  { name: "Projects", link: "#projects", icon: "💻" },
];

const movingCardsItems = [
  { title: "Card 1", description: "Description for card 1", content: "Additional content for card 1" },
  { title: "Card 2", description: "Description for card 2", content: "Additional content for card 2" },
  { title: "Card 3", description: "Description for card 3", content: "Additional content for card 3" },
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
          <StickyScroll content={movingCardsItems} contentClassName="custom-class" />
        </div>
      </div>
    </>
  );
}

export default App;
