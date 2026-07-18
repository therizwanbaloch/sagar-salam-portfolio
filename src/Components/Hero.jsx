import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaDownload } from 'react-icons/fa6';
import { HiMapPin, HiCommandLine, HiArrowRight } from 'react-icons/hi2'; 
import sagar from "../assets/sagar.jpeg";

export default function Hero({ data = {} }) {
  return (
    <header id="about" className="bg-[#030712] text-white pt-36 pb-24 px-6 border-b border-slate-900 relative overflow-hidden">
      {/* Structural Visual Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean typography & High-Impact Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-emerald-400 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            Available for Core Infrastructure Deployment
          </div>
          
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">System Architect</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              {data?.name || "SAGAR SALAM"}
            </h1>
            <h2 className="text-xl md:text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold tracking-wide">
              {data?.title || "Software Developer | Kotlin Specialist"}
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-normal">
            {data?.summary || "Accomplished Software Engineer specializing in high-performance application architectures and clean, structured engineering paradigms. Dedicated to implementing Clean Architecture and SOLID principles to build robust, scalable products."}
          </p>

          {/* Action Links & Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm shadow-lg shadow-emerald-500/10"
            >
              <span>Connect System</span>
              <HiArrowRight size={14} />
            </a>

            <a 
              href={sagar} 
              download="Sagar_Salam_Resume.jpg"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-300 font-medium px-5 py-2.5 rounded-xl border border-slate-800/80 hover:border-slate-700/80 active:scale-[0.98] transition-all text-sm"
            >
              <FaDownload className="text-emerald-400" size={12} />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Premium Cyber-Glass IDE Window */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[360px] aspect-square group">
            
            {/* Vibrant Outer Neon Glow Edge */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 transition-all duration-700"></div>
            
            {/* Mock Editor IDE Outer Container */}
            <div className="absolute inset-0 bg-[#0b0f19]/90 border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
              
              {/* Window Controls Tab */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#070a12]/90 border-b border-slate-900 text-slate-500 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70"></span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <HiCommandLine size={12} className="text-slate-500" />
                  <span>Profile.kt</span>
                </div>
                <span className="opacity-0">•••</span>
              </div>

              {/* Picture Viewport Canvas Area */}
              <div className="relative flex-1 p-4 flex items-center justify-center bg-gradient-to-b from-[#0b0f19] to-[#04060d]">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-800/60">
                  
                  {/* Subtle code watermark behind portrait */}
                  <div className="absolute inset-x-3 top-3 font-mono text-[10px] text-slate-800 select-none leading-normal opacity-40 pointer-events-none hidden sm:block">
                    <div><span className="text-teal-600">class</span> <span className="text-emerald-500">Developer</span> {"{"}</div>
                    <div className="pl-3"><span className="text-slate-600">val</span> name = <span className="text-emerald-600">"Sagar"</span></div>
                    <div className="pl-3"><span className="text-slate-600">val</span> status = <span className="text-emerald-600">"Active"</span></div>
                    <div>{"}"}</div>
                  </div>

                  <img
                    src={sagar}
                    alt={data?.name || "Sagar Salam"} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Digital Vignette Shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}