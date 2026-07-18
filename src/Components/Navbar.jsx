import React, { useState, useEffect } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

export default function Navbar({ data = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 border-b border-slate-800 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        
        {/* Developer Initials / Logo */}
        <a 
          href="#about" 
          className="text-xl font-black tracking-wider text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5"
        >
          <span className="bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-lg text-sm font-bold">
            SS
          </span>
          {data?.name || "SAGAR SALAM"}
        </a>

        {/* Desktop Anchor Navigation Grid */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Platform Quick-Connect Triggers */}
          <div className="flex items-center gap-4 border-l border-slate-800 pl-6 text-slate-400">
            <a
              href={data?.contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${data?.contact?.email || 'sagarsalam531@gmail.com'}`}
              className="hover:text-emerald-400 hover:scale-110 transition-all"
              title="Email Contact"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>

        {/* Mobile View Menu Toggle Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-emerald-400 p-1.5 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {/* Responsive Mobile Drawer Panel Overlays */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'opacity-100 max-h-[400px] py-6 shadow-2xl' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-base font-semibold text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          <hr className="border-slate-800 my-2" />
          
          {/* Quick Connect Shortcuts inside Mobile Drawer */}
          <div className="flex items-center gap-6 py-2 text-slate-400">
            <a
              href={data?.contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
            >
              <FaLinkedinIn size={18} /> LinkedIn
            </a>
            <a
              href={`mailto:${data?.contact?.email || 'sagarsalam531@gmail.com'}`}
              className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
            >
              <FaEnvelope size={18} /> Email
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}