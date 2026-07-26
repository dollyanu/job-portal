import React from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Job<span className="text-purple-500">Portal</span>
            </h1>

            <p className="mt-5 text-sm leading-7 text-gray-900">
              Discover thousands of verified jobs from leading companies.
              Build your career with confidence and connect with top recruiters
              across India.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.linkedin.com/in/anupama-maurya-b64447330/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/its_anushaaa03/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Instagram  size={20} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100093138192390"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Facebook  size={20} />
              </a>

<a
                href="https://github.com/dollyanu"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Github  size={20} />
              </a>              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-purple-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="hover:text-purple-400 transition">
                  Jobs
                </Link>
              </li>

              <li>
                <Link to="/browse" className="hover:text-purple-400 transition">
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-purple-400 transition">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="hover:text-purple-400 transition">
                  Signup
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-5">
              Popular Categories
            </h2>

            <ul className="space-y-3">

              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Full Stack Developer</li>
              <li>UI/UX Designer</li>
              <li>Data Scientist</li>
              <li>Machine Learning</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-5">
              Contact
            </h2>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Mail className="text-blue-500 mt-1" size={18} />
                <span>mauryanupama1411@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <span>Mirzapur, Uttar Pradesh, India</span>
              </div>

            </div>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 gap-4">

          <p>
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-purple-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-purple-400">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-purple-400">
              Help Center
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;