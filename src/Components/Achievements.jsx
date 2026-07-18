import React from 'react';
import { HiOutlineTrophy, HiCheckCircle } from 'react-icons/hi2';

export default function Achievements() {
  // Hardcoded production achievements & verified milestones
  const achievements = [
    {
      title: "Android SDK Internal Architecture Milestone",
      details: "Successfully resolved long-standing complex cross-version SDK compatibility errors across production codebases, securing backward compatibility for legacy devices."
    },
    {
      title: "Clean Code Migration Lead",
      details: "Enforced strict SOLID design principles and Clean Architecture paradigms across modular structures to streamline cross-team development velocity."
    }
  ];

  return (
    <section id="achievements" className="text-white scroll-mt-20">
      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <HiOutlineTrophy size={14} />
            <span>Key Milestones</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Engineering{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </div>

        {/* Dense Stack Layout */}
        <div className="space-y-4">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="group relative flex gap-4 p-5 bg-[#090d16]/50 border border-slate-800/60 rounded-xl transition-all duration-300 hover:border-slate-700/60 hover:bg-[#0c1220]/60"
            >
              {/* Left Accent Status Dot Pillar */}
              <div className="flex flex-col items-center pt-0.5">
                <HiCheckCircle size={16} className="text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />
                <div className="w-[1px] flex-1 bg-slate-800 group-hover:bg-slate-700 dynamic-line mt-2"></div>
              </div>

              {/* Text Registry content */}
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}