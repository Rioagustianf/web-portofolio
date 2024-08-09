import Footer from "./components/Footer";
import ScrollToTopButton from "./components/helper/scrollToTop";
import About from "./components/homepage/about";
import Experinece from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/project";
import Skill from "./components/homepage/skill";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <HeroSection />
        <About />
        <Experinece />
        <Skill />
        <Projects />
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
