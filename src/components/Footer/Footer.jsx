import { FaLinkedin, FaInstagram, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Abu Shahma</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - With Real Brand Colors */}
        <div className="flex flex-wrap justify-center space-x-6 mt-6">
          {/* GitHub Icon - Dark Gray/Black */}
          <a
            href="https://github.com/AbuShahma05"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-3xl text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn Icon - LinkedIn Blue */}
          <a
            href="https://www.linkedin.com/in/abu-shahma"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-3xl text-blue-600 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* LeetCode Icon - Orange/Yellow */}
          <a
            href="https://leetcode.com/u/abushahmasiddiqui880"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="text-3xl text-orange-500 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          {/* Email Icon - Gmail Red */}
          <a
            href="mailto:abushahmasiddiqui880@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="text-3xl text-red-500 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
          >
            <MdEmail />
          </a>

          {/* Twitter/X Icon - Black/Gray */}
          <a
            href="https://x.com/Abushahma24"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="text-3xl text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaSquareXTwitter />
          </a>

          {/* Instagram Icon - Pink/Gradient */}
          <a
            href="https://www.instagram.com/abu______shahma"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-3xl text-pink-500 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp Icon - WhatsApp Green */}
          <a
            href="https://wa.me/916207028898?text=Hi%20Abu,%20I%20saw%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-3xl text-green-500 hover:text-green-300 transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsappSquare />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Abu Shahma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
