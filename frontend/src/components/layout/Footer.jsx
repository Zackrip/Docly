import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#F9FAFB] relative overflow-hidden">
      {/* Top section - Links */}
      <div className="px-6 sm:px-10 pt-12 sm:pt-14 pb-16 sm:pb-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Explore */}
        <div>
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Explore</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors">Features</a></li>
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors">How It Works</a></li>
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors">Documents</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Connect</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors underline underline-offset-2">LinkedIn</a></li>
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors underline underline-offset-2">X / Twitter</a></li>
            <li><a href="#" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors underline underline-offset-2">GitHub</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Contact</p>
          <a href="mailto:hello@docly.ai" className="text-sm text-[#1F2937] hover:text-[#FF6B35] transition-colors underline underline-offset-2">
            Reach out
          </a>
          <p className="text-sm text-gray-500 mt-6 leading-relaxed">
            Built with RAG<br />
            Retrieval-Augmented Generation
          </p>
        </div>
      </div>

      {/* Big brand text - faded ghost style */}
      <div className="pb-6 relative overflow-hidden">
        <div className="relative" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }}>
          <h1 className="text-[18vw] font-bold text-[#FF6B35] tracking-tighter leading-[0.85] uppercase select-none text-center">
            Docly
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 border-t border-gray-200">
        <div className="flex gap-6">
          <a href="#" className="text-xs text-gray-400 hover:text-[#1F2937] transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-400 hover:text-[#1F2937] transition-colors">Terms</a>
        </div>
        <p className="text-xs text-gray-400">© 2026 Docly</p>
      </div>
    </footer>
  );
}

export default Footer;
