// import { BentoGrid } from './components/ui/bento-grid';
// import { ContainerScroll } from './components/ui/container-scroll-animation';
// import { DirectionAwareHover } from './components/ui/direction-aware-hover';
// import Height from './components/ui/Height'

// import { Modal } from './components/ui/animated-modal';
// import { AnimatedTestimonials } from './components/ui/animated-testimonials';
import { FloatingNav } from './components/ui/floating-navbar'
import { GridSmallBackgroundDemo } from './components/ui/GridSmallBackgroundDemo';
import About from './my-components/About';
// import { LampDemo } from './components/ui/lamp'

const navItems = [
  { name: "Home", link: "#home", icon: "🏠" },
  { name: "About", link: "#about", icon: "ℹ️" },
  { name: "Projects", link: "#projects", icon: "💻" },
];

function App() {
  return (
    <>
      <div>
        <div className="bg-black">
          <FloatingNav navItems={navItems} />
          <GridSmallBackgroundDemo />
          <About />
          
          {/* <LampDemo /> */}
          {/* <AnimatedTestimonials /> */}
          {/* <Modal /> */}
          {/* <ContainerScroll /> */}
          {/* <DirectionAwareHover /> */}
          {/* <Height /> */}
          {/* <BentoGrid /> */}
        </div>
      </div>
    </>
  )
}

export default App
