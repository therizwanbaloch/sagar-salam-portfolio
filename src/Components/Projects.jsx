import React from 'react';
import { HiOutlineFolderOpen, HiArrowUpRight, HiCommandLine } from 'react-icons/hi2';

export default function Projects() {
  // Hardcoded real engineering project logs
  const projects = [
    {
      title: 'Android Modular Learning Apps',
      category: 'Mobile Infrastructure / EdTech',
      description: 'A highly scalable, offline-first educational application designed specifically for seamless performance in low-connectivity regions. The platform features a modular lesson-topic architecture, robust navigation flows, and fallback rendering logic to guarantee a frustration-free user experience. Built using Clean Architecture and SOLID principles, it successfully bridges high-impact EdTech solutions with legacy device optimization.',
      tech: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Clean Architecture', 'SOLID Principles', 'Offline-First UI']
    },
    {
      title: 'AI Surrogate Clone (Digital Twin)',
      category: 'Intelligent Systems / Automation',
      description: 'An intelligent, offline-first React application engineered to act as a personal digital twin. Featuring a mobile-first, WhatsApp-inspired user interface with full light and dark mode flexibility, it is powered by the Google Gemini API with complex system routing instructions. The platform parses natural language into structured JSON payloads to drive a multi-agent system (Chat, Schedule, Docs, Email, Search, Payment, and Finance), dynamically handling multi-modal user input, locally persisting data, and integrating the Web Speech API.',
      tech: ['React 19 (Vite)', 'Google GenAI SDK', 'Tailwind CSS', 'Recharts', 'Web Speech API', 'LocalStorage', 'JSON Intent Routing']
    },
    {
      title: 'AFlix — All-in-One Media & IPTV Streaming',
      category: 'API Aggregation / Network Systems',
      description: 'A comprehensive, ad-filtered streaming and download application engineered with a lightweight, dark-themed user interface. The app integrates and aggregates streaming data from multiple third-party servers to offer an extensive library of content alongside live TV channels. Designed for high availability and low latency, it features a unified cross-server search engine, integrated link-solving caches to bypass ad-shorteners, smart ad-blocking filters, age-verification routing, and an automated background code-updating subsystem.',
      tech: ['Java', 'HTML/CSS', 'WebView Architecture', 'API Aggregation', 'IPTV M3U', 'Core AdBlocker', 'Android TV']
    }
  ];

  return (
    <section id="projects" className="text-white scroll-mt-20">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <HiOutlineFolderOpen size={14} />
            <span>Production Registries</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Engineering Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
            A selective collection of structural layouts, intelligent systems, and scalable code bases built to strict engineering standards.
          </p>
        </div>

        {/* Projects Architecture Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col justify-between p-6 bg-[#090d16]/60 border border-slate-800/80 rounded-2xl transition-all duration-300 hover:border-slate-700/80 hover:bg-[#0c1220]/80 shadow-xl overflow-hidden"
            >
              {/* Top Accent Hover Bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-teal-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Core Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800/40">
                    {project.category}
                  </span>
                  <HiCommandLine size={14} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    {project.title}
                    <HiArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 text-teal-400" />
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Micro Tech Tags Container */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-slate-900/80">
                {project.tech.map((badge, bIdx) => (
                  <span 
                    key={bIdx}
                    className="text-[10px] font-mono px-2 py-0.5 bg-slate-900/90 text-slate-400 rounded border border-slate-800/60 group-hover:border-slate-700/40 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}