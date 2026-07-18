import React from 'react';
import { Code2, Smartphone, Terminal, ShieldAlert } from 'lucide-react';

export default function SummaryAndSkills({ data = {} }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Executive Bio */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100">
          Professional Context
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed text-justify">
          {data?.summary}
        </p>
      </section>

      {/* Tech Pipelines */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          Core Proficiencies
        </h2>
        
        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase mb-2 flex items-center gap-1.5">
              <Code2 size={14} className="text-emerald-500" /> Languages
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {data?.skills?.languages?.map((lang, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase mb-2 flex items-center gap-1.5">
              <Smartphone size={14} className="text-emerald-500" /> Android Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {data?.skills?.android?.map((lib, idx) => (
                <span key={idx} className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                  {lib}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase mb-2 flex items-center gap-1.5">
              <Terminal size={14} className="text-emerald-500" /> Environment & Tools
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {data?.skills?.tools?.map((tool, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Traits */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          Professional Strengths
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {data?.skills?.professional?.map((strength, idx) => (
            <span key={idx} className="border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50/50">
              {strength}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}