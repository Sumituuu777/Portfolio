import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

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

      <section id="about" className="min-h-screen">
        {/* About */}
        <AboutSection/>
      </section>

      <section id="education" className="min-h-screen">
        {/* Education */}
      </section>

      <section id="projects" className="min-h-screen">
        {/* Projects */}
      </section>

      <section id="contact" className="min-h-screen">
        {/* Contact */}
      </section>
    </div>
  );
}

export default App;
