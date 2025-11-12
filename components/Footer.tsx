import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              TM<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Senior Software & AI Engineer specializing in cloud solutions,
              machine learning, and data engineering.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <FaMapMarkerAlt className="mr-2 text-accent" />
              <span>Johannesburg, South Africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/tinashe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/tinashe-makamure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:tmakamure32@gmail.com"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-gray-300">
              <a
                href="mailto:tmakamure32@gmail.com"
                className="hover:text-accent transition-colors"
              >
                tmakamure32@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Tinashe Makamure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
