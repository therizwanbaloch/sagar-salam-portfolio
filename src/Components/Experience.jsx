import React from 'react';
import { HiCalendarDays, HiCpuChip, HiOutlineBriefcase } from 'react-icons/hi2';

export default function Experience() {
  // Career history forcefully hardcoded into the component structure
  const experiences = [
    {
      role: 'Android Developer',
      company: 'Astola Studio',
      period: '2021 - 2025',
      description: 'Engineered a modular, offline-first learning application optimized for low-connectivity regions. Designed and supported custom branding and layout systems for global educational platforms. Spearheaded architectural migrations using Clean Architecture and SOLID methodologies to eliminate 25% of inherited technical debt, streamlining future-proof application performance.',
      technologies: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Clean Architecture', 'Modularization', 'Offline-First Apps']
    },
    {
      role: 'Freelance Tutor & Developer',
      company: 'Self-Employed',
      period: '2020 - 2022',
      description: 'Instructed college-level students in core computer science fundamentals and advanced object-oriented programming paradigms during and post-pandemic. Engineered small-scale interactive business applications and cross-platform layouts while meticulously scaling social media engagement profiles.',
      technologies: ['Java', 'Python', 'C++', 'App Development', 'Technical Tutoring', 'Git Configuration']
    }
  ];

  return (
    <section id="experience" className="bg-[#030712] text-white py-24 px-6 border-b border-slate-900 relative scroll-mt-16">
      {/* Background Micro Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Sticky Section Header & Engineering Metrics (4 Columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <HiOutlineBriefcase size={14} />
              <span>History Log</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Engineering <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            A chronological breakdown of production systems built, high-scale codebases maintained, and products delivered using modular architecture.
          </p>

          {/* Premium Tech Stats Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <HiCpuChip className="text-emerald-400" size={16} />
              <span>SYSTEM ARCHITECTURE STANDARDS</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <p className="text-2xl font-black text-white font-mono">100%</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider">SOLID Design</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400 font-mono">Modular</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider">Core systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Minimalist Timeline Stack (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative p-6 md:p-8 bg-[#090d16]/70 border border-slate-800/60 rounded-2xl transition-all duration-300 hover:border-slate-700/80 hover:bg-[#0c1220]/80 shadow-xl"
            >
              {/* Subtle top indicator hover line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">
                    {exp.company}
                  </p>
                </div>
                
                {/* Vintage Tech-Badge Calendar Stamp */}
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 bg-slate-900 border border-slate-800 rounded-md font-mono text-xs text-slate-400">
                  <HiCalendarDays size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Job Summary Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Micro Technology Badges Panel */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
                {exp.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[11px] font-mono font-medium px-2.5 py-1 bg-slate-900/90 text-slate-300 rounded-md border border-slate-800/80 group-hover:border-slate-700/50 transition-colors"
                  >
                    {tech}
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