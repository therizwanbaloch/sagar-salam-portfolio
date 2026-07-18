import React from 'react';
import { HiOutlineUser, HiOutlineCpuChip } from 'react-icons/hi2';

export default function SummaryAndSkills({ data }) {
  const { summary, skills } = data || {};

  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      
      {/* Professional Context Card */}
      <div className="p-6 bg-[#090d16]/60 border border-slate-800/80 rounded-2xl space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <HiOutlineUser size={14} />
          <span>Professional Context</span>
        </div>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
          {summary || "Accomplished Software Engineer specializing in mobile ecosystems and clean system architecture."}
        </p>
      </div>

      {/* Core Proficiencies Card */}
      <div className="p-6 bg-[#090d16]/60 border border-slate-800/80 rounded-2xl space-y-6 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <HiOutlineCpuChip size={14} />
          <span>Core Proficiencies</span>
        </div>

        {/* Technical Sub-categories */}
        <div className="space-y-4">
          {skills?.languages && (
            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Languages</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.languages.map((lang, i) => (
                  <span key={i} className="text-xs bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-900">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills?.android && (
            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Android Ecosystem</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.android.map((lib, i) => (
                  <span key={i} className="text-xs bg-slate-950 px-2.5 py-1 rounded-md text-emerald-400/90 border border-slate-900">
                    {lib}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills?.tools && (
            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Development Tools</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.tools.map((tool, i) => (
                  <span key={i} className="text-xs bg-slate-950 px-2.5 py-1 rounded-md text-slate-400 border border-slate-900">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}