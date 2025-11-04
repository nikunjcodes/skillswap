import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nuvora_2 from "../../../assets/Nuvora_2.png";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* backdrop for mobile menu */}
      {isOpen && (
        <button
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 lg:hidden"
        />
      )}

      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <img src={Nuvora_2} alt="Nuvora" className="h-8 w-auto" />
            <span className="text-white text-lg font-extrabold tracking-tight">
              Nuvora
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-medium hover:text-[#0DCEDA] transition"
              >
                Home
              </Link>

              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-[#0DCEDA] transition"
              >
                How it Works
              </a>

              <a
                href="#support"
                className="text-sm font-medium hover:text-[#0DCEDA] transition"
              >
                Support
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="px-4 py-1 text-sm font-semibold bg-white text-black rounded-full hover:opacity-95 transition"
                >
                  Login
                </HoverBorderGradient>
              </Link>

              <Link to="/register">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="px-4 py-1 text-sm font-semibold bg-[#0DCEDA] text-black rounded-full hover:opacity-95 transition"
                >
                  Join
                </HoverBorderGradient>
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0DCEDA]"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden bg-black transition-max-height duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 pt-4 pb-6 flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white text-base font-medium py-2 px-3 rounded-md hover:bg-white/5"
            >
              Home
            </Link>

            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-white text-base font-medium py-2 px-3 rounded-md hover:bg-white/5"
            >
              How it Works
            </a>

            <a
              href="#support"
              onClick={() => setIsOpen(false)}
              className="text-white text-base font-medium py-2 px-3 rounded-md hover:bg-white/5"
            >
              Support
            </a>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="w-full px-4 py-2 text-sm font-semibold bg-white text-black rounded-full"
                >
                  Login
                </HoverBorderGradient>
              </Link>

              <Link to="/register" onClick={() => setIsOpen(false)}>
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="w-full px-4 py-2 text-sm font-semibold bg-[#0DCEDA] text-black rounded-full"
                >
                  Join
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
