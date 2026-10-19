import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Architecture", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, []);

  return (
    <header className="sticky top-0 z-[999] w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3.5 px-5 sm:px-8">
        {/* Brand Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FF6B35] flex items-center justify-center text-white font-bold text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Doc<span className="text-[#FF6B35]">ly</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <Link
              to="/ask-docly"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e85b27] transition-colors"
            >
              <span>Go to Chat</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-[#FF6B35] px-3 py-2 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/ask-docly"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e85b27] transition-colors"
              >
                <span>Try Docly Free</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-lg">
          <nav className="flex flex-col gap-2.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            {isLoggedIn ? (
              <Link
                to="/ask-docly"
                onClick={() => setOpen(false)}
                className="text-center text-sm font-semibold text-white bg-[#FF6B35] py-2 rounded-lg"
              >
                Go to Chat
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="text-center text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-2 border border-gray-200 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/ask-docly"
                  onClick={() => setOpen(false)}
                  className="text-center text-sm font-semibold text-white bg-[#FF6B35] py-2 rounded-lg"
                >
                  Try Docly Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
