import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Features", "How It Works", "Documents", "About", "Contact us"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[999] w-full bg-white/80 backdrop-blur-md border-b border-gray-100 text-[#FF6B35]">
      <div className="flex justify-between items-center py-4 px-5 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)}>
          <div className="logo hover:cursor-pointer">
            <svg
              width="100"
              height="36"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="30"
                fill="currentColor"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="32"
                fontWeight="500"
                letterSpacing="-1.5"
              >
                Docly
              </text>
            </svg>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 lg:gap-10">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              className="text-sm lg:text-base text-[#FF6B35] capitalize font-NeueMontreal hover:opacity-70 duration-200 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#FF6B35] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FF6B35] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FF6B35] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-100 px-5 pb-5 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              onClick={() => setOpen(false)}
              className="text-base text-[#FF6B35] capitalize font-NeueMontreal cursor-pointer py-1"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
