import myPhoto from "../assets/my_image.jpeg";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
              HI, I'M
              <br />
              <span className="text-white">
                SUMIT KUMAR
              </span>
            </h2>

            <h3 className="mt-4 text-2xl md:text-4xl font-bold">
              <span className="text-[#58F0B8]">
                FULL STACK DEVELOPER
              </span>
            </h3>

            <p className="mt-8 text-gray-300 text-lg max-w-xl leading-relaxed">
              Building scalable web applications and solving
              real-world problems through code. Passionate
              about React, Node.js, and creating modern
              user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="/Sumit_resume_internship.pdf"
                download
                className="bg-[#58F0B8] text-black font-semibold px-8 py-4 hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="/Sumit_resume_internship.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#58F0B8] text-[#58F0B8] px-8 py-4 hover:bg-[#58F0B8] hover:text-black transition"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#58F0B8]/15 blur-[100px] scale-110"></div>

              {/* Photo Container */}
              <div className="relative w-[320px] md:w-105">

                {/* Top Left Corner */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-8 border-t-8 border-[#58F0B8] rounded-tl-[40px] z-20"></div>

                {/* Top Right Corner */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-r-8 border-t-8 border-[#58F0B8] rounded-tr-[40px] z-20"></div>

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-8 border-b-8 border-[#58F0B8] rounded-bl-[40px] z-20"></div>

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-8 border-b-8 border-[#58F0B8] rounded-br-[40px] z-20"></div>

                {/* Image */}
                <img
                  src={myPhoto}
                  alt="Sumit Kumar"
                  className="
                  w-full
                  h-100
                  md:h-137.5
                  object-cover
                  rounded-[30px]
                  shadow-2xl
                  relative
                  z-10
                "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;