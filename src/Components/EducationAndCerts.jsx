import React from 'react';
import { HiOutlineAcademicCap, HiOutlineIdentification, HiCheckCircle } from 'react-icons/hi2';

export default function EducationAndCerts() {
  const education = {
    degree: "Bachelor of Science in Artificial Intelligence",
    institution: "The Islamia University of Bahawalpur",
    location: "Punjab, Pakistan",
    details: "Ranked in the top 1% of the student body (Batch of 2018 & 2019), maintaining a 100/94 equivalent across all core technical modules."
  };

  const certifications = [
    { title: "Android App Development with Kotlin", provider: "Google / Self" },
    { title: "Jetpack Compose Essentials", provider: "Udemy" },
    { title: "Introduction to Python Programming", provider: "Academy" },
    { title: "Machine Learning Basics", provider: "Coursera" },
    { title: "Practical Python for Beginners", provider: "Udemy" },
    { title: "Diploma in Information Technology", provider: "Academy" }
  ];

  return (
    <section id="education" className="text-white scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Left Side: Academic Registry (3/5 Width) */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <HiOutlineAcademicCap size={14} />
            <span>Academic Foundations</span>
          </div>
          
          <div className="p-5 bg-[#090d16]/50 border border-slate-800/60 rounded-xl space-y-3 group hover:border-slate-700/60 transition-colors">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                BS Program
              </span>
              <h3 className="text-base font-bold text-slate-100 mt-2 group-hover:text-emerald-400 transition-colors">
                {education.degree}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {education.institution} • <span className="text-slate-500">{education.location}</span>
              </p>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed pt-2 border-t border-slate-900">
              {education.details}
            </p>
          </div>
        </div>

        {/* Right Side: Professional Verifications (2/5 Width) */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <HiOutlineIdentification size={14} />
            <span>Certifications</span>
          </div>

          <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 custom-scrollbar">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3 bg-[#090d16]/40 border border-slate-900 rounded-lg hover:border-slate-800 transition-colors"
              >
                <HiCheckCircle size={14} className="text-emerald-500/70 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-500">
                    {cert.provider}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}