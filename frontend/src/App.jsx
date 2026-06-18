import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-[#07101F] text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
      >
        <div
          className="absolute top-0 right-[10%] h-full w-[30%] -skew-x-12"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        />

        <div className="relative z-10">
          {/* Hero Content */}
          <HeroSection/>
        </div>
      </section>

      <section id="about" className="m-0 p-0">
        <AboutSection/>
      </section>

      <section id="education">
        <EducationSection/>
      </section>

      <section id="projects">
        <ProjectsSection/>
      </section>

      <section id="contact">
        <ContactSection/>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-gray-400">
        © 2026 Sumit Kumar • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
