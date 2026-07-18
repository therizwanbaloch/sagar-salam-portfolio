import React from 'react';
import { HiOutlineFolderOpen, HiArrowUpRight, HiCommandLine } from 'react-icons/hi2';

export default function Projects() {
  // Hardcoded production-ready project logs
  const projects = [
    {
      title: 'Android Modular Learning Apps',
      category: 'Mobile Infrastructure / EdTech',
      description: 'Designed a highly scalable lesson-topic structure engineered specifically for offline-first learning environments. Focused heavily on robust navigation graphs, modular code division, and frustration-free user experiences (UX) with dynamic fallback rendering logic for future-proof system stability.',
      tech: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Clean Architecture']
    },
    {
      title: 'Flutter Gaming App (Tic Tac Toe)',
      category: 'Cross-Platform Game Logic',
      description: 'Developed a clean, interactive multiplayer experience featuring fully responsive UI layouts and ultra-fast local game-state validation. Implemented complete state management cycles, automatic win-detection models, and seamless restart game flows across variable screens.',
      tech: ['Flutter', 'Dart', 'State Management', 'Responsive Design', 'Local Logic']
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
            A selective collection of structural layouts, mobile applications, and system designs built with strict code standards.
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