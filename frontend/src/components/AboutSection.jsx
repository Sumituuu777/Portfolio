function AboutSection() {
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
    ],
    Backend: [
      "Node.js",
      "Express.js",
    ],
    Database: [
      "MongoDB",
      "MySql"
    ],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  };

  return (
    <section
      id="about"
      className="py-6 px-6 bg-[#07101F]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-[#58F0B8] font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Know More About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* About Text */}
          <div>
            <p className="text-gray-300 text-lg leading-9">
              I'm a Full Stack Developer pursuing B.Tech at IIIT Ranchi.
              I enjoy building scalable web applications using React,
              Node.js, Express, and MongoDB. I have experience creating
              projects ranging from currency converters to backend systems
              and continuously learn modern web technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-8">

            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-[#58F0B8] text-xl font-semibold mb-4">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="
                        px-4
                        py-2
                        bg-[#0E1828]
                        border
                        border-[#58F0B8]/30
                        rounded-lg
                        text-white
                        hover:border-[#58F0B8]
                        hover:-translate-y-1
                        transition
                        duration-300
                      "
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;