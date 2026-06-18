
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { SiCodechef, SiLeetcode } from "react-icons/si";function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-[#07101F]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#58F0B8] uppercase tracking-[4px] font-semibold">
            Contact
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-400">
            Feel free to reach out for opportunities,
            collaborations, or discussions.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:your-email@gmail.com"
            className="
              bg-[#0E1828]
              border border-white/10
              rounded-2xl
              p-8
              flex flex-col items-center
              hover:border-[#58F0B8]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <MdEmail
              size={40}
              className="text-[#58F0B8]"
            />

            <h3 className="mt-4 text-xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-2 text-center">
              your-email@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#0E1828]
              border border-white/10
              rounded-2xl
              p-8
              flex flex-col items-center
              hover:border-[#58F0B8]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <FaLinkedin
              size={40}
              className="text-[#58F0B8]"
            />

            <h3 className="mt-4 text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#0E1828]
              border border-white/10
              rounded-2xl
              p-8
              flex flex-col items-center
              hover:border-[#58F0B8]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <FaGithub
              size={40}
              className="text-[#58F0B8]"
            />

            <h3 className="mt-4 text-xl font-semibold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-2">
              View my repositories
            </p>
          </a>

        </div>

        {/* Coding Profiles */}
        <div className="mt-16">

          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Coding Profiles
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* LeetCode */}
            <a
              href="https://leetcode.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#0E1828]
                border border-white/10
                rounded-2xl
                p-6
                flex items-center gap-5
                hover:border-[#58F0B8]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <SiLeetcode
                size={35}
                className="text-[#58F0B8]"
              />

              <div>
                <h4 className="font-semibold text-lg">
                  LeetCode
                </h4>

                <p className="text-gray-400">
                  Problem Solving & DSA
                </p>
              </div>
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#0E1828]
                border border-white/10
                rounded-2xl
                p-6
                flex items-center gap-5
                hover:border-[#58F0B8]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <SiCodechef
                size={35}
                className="text-[#58F0B8]"
              />

              <div>
                <h4 className="font-semibold text-lg">
                  CodeChef
                </h4>

                <p className="text-gray-400">
                  Competitive Programming
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;