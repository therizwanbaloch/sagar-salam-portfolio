import React from 'react';
import { HiOutlineCodeBracket, HiOutlineEnvelope } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer({ name }) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full mt-20 border-t border-slate-900 bg-[#02050c]/80 backdrop-blur-md text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Copyright */}
        <div className="flex items-center gap-2 font-mono text-slate-500">
          <HiOutlineCodeBracket className="text-emerald-500" size={14} />
          <span>&copy; {currentYear} {name || "Rizwan Baloch"}. All rights reserved.</span>
        </div>

        {/* Center: Clean Navigation Links */}
        <nav className="flex items-center gap-6 font-medium text-slate-400">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-emerald-400 transition-colors">Top</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#education" onClick={(e) => handleScroll(e, 'education')} className="hover:text-emerald-400 transition-colors">Education</a>
        </nav>

        {/* Right: Social Handshakes */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-emerald-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={16} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={16} />
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className="text-slate-500 hover:text-emerald-400 transition-colors"
            aria-label="Email Developer"
          >
            <HiOutlineEnvelope size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}