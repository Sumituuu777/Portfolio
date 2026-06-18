function ProjectsSection() {
  const projects = [
    {
      name: "Airbnb Backend App",
      description:
        "RESTful backend for an Airbnb-style platform with authentication, listings, reviews, and MongoDB integration.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "https://your-airbnb-app.vercel.app",
    },
    {
      name: "Currency Converter",
      description:
        "Real-time currency conversion using exchange rate APIs with a clean and responsive React interface.",
      tech: ["React", "API", "Tailwind"],
      link: "https://currency-converter-full-stack.vercel.app",
    },
    {
      name: "Weather App",
      description:
        "Responsive weather application that displays live weather conditions and forecasts using external APIs.",
      tech: ["React", "API", "CSS"],
      link: "https://your-weather-app.vercel.app",
    },
    {
      name: "StackMine Game",
      description:
        "Interactive JavaScript game featuring randomized mines, diamonds, health system, and score tracking.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://sumituuu777.github.io/StakeMine/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-8 px-6 bg-[#07101F]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            My Projects
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in
            full-stack development, API integration, responsive
            design, and problem solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="
                group
                bg-[#0E1828]
                border
                border-white/10
                rounded-2xl
                p-8
                hover:border-[#58F0B8]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Project Name */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-[#58F0B8]
                  transition-colors
                "
              >
                {project.name}
              </a>

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      text-sm
                      rounded-lg
                      bg-[#07101F]
                      border
                      border-[#58F0B8]/30
                      text-[#58F0B8]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Visit Button */}
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    px-5
                    py-3
                    bg-[#58F0B8]
                    text-black
                    font-semibold
                    rounded-lg
                    hover:scale-105
                    transition-transform
                  "
                >
                  Visit Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;