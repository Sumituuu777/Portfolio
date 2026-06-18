function EducationSection() {
  const education = [
    {
      institute:
        "Indian Institute of Information Technology, Ranchi, Jharkhand",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      score: "Current CGPA: 8.56",
      year: "Aug 2024 - 2028",
    },
    {
      institute:
        "SVP Shikshan Awan Anusandhan Sansthan, Palsana, Rajasthan",
      degree: "12th - CBSE Board",
      field: "",
      score: "Overall Percentage: 89%",
      year: "Passed in 2023",
    },
    {
      institute:
        "JD Memorial Public School, Bheror, Alwar, Rajasthan",
      degree: "10th - CBSE Board",
      field: "",
      score: "Overall Percentage: 91.2%",
      year: "Passed in 2021",
    },
  ];

  return (
    <section
      id="education"
      className="px-6 py-20 bg-[#07101F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#58F0B8] uppercase tracking-[4px] font-semibold">
            Education
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Academic Journey
          </h2>

          <p className="mt-4 text-gray-400">
            My educational background and academic achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#58F0B8]/40 ml-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-10 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-[#58F0B8]"></div>

              {/* Card */}
              <div
                className="
                  bg-[#0E1828]
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-[#58F0B8]
                  transition-all
                  duration-300
                "
              >
                <span className="text-[#58F0B8] text-sm font-semibold">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.institute}
                </h3>

                <p className="mt-2 text-gray-300">
                  {item.degree}
                </p>

                {item.field && (
                  <p className="text-gray-400">
                    {item.field}
                  </p>
                )}

                <p className="mt-3 font-medium text-[#58F0B8]">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;