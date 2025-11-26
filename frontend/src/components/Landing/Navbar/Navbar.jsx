import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nuvora_2 from "../../../assets/Nuvora_2.png";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 lg:hidden z-40 animate-fadeIn"
          aria-hidden="true"
        />
      )}

      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 group"
            >
              <img
                src={Nuvora_2}
                alt="Nuvora"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-xl font-bold tracking-tight">
                SkillSwap
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-[#0DCEDA] text-sm font-medium transition-colors duration-200 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0DCEDA] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-white/90 hover:text-[#0DCEDA] text-sm font-medium transition-colors duration-200 relative group"
                  >
                    How it Works
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0DCEDA] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-white/90 hover:text-[#0DCEDA] text-sm font-medium transition-colors duration-200 relative group"
                  >
                    Support
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0DCEDA] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="px-6 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#0DCEDA] to-cyan-500 text-black rounded-full hover:shadow-glow-cyan transform hover:scale-105 transition-all duration-200">
                    Join
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0DCEDA]/50 transition-all duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 pt-4 space-y-3 glass-dark relative z-50 border-t border-white/10">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Home
            </Link>

            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              How it Works
            </a>

            <a
              href="#support"
              onClick={() => setIsOpen(false)}
              className="block text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Support
            </a>

            <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <button className="w-full px-6 py-3 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-200">
                  Login
                </button>
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <button className="w-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[#0DCEDA] to-cyan-500 text-black rounded-full hover:shadow-glow-cyan transition-all duration-200">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
