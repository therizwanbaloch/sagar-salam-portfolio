import React from 'react';
import { HiOutlineEnvelope, HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';

export default function Contact({ email }) {
  const targetEmail = email || "sagarsalam531@gmail.com";

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#090d16]/90 to-[#05080f]/90 border border-slate-800/80 text-center space-y-6 relative overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/[0.03] rounded-full blur-[80px] pointer-events-none"></div>

        <div className="space-y-2 relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full font-mono text-[11px] text-emerald-400 mb-2">
            <HiOutlineChatBubbleBottomCenterText size={12} />
            <span>Available for Opportunities</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Let’s Build Something Together
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Whether you are looking to hire a full-time engineer, collaborate on an production system, or just chat architecture.
          </p>
        </div>

        <div className="relative pt-2">
          <a 
            href={`mailto:${targetEmail}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl text-xs font-mono transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/10"
          >
            <HiOutlineEnvelope size={14} />
            <span>Initiate Direct Handshake</span>
          </a>
        </div>

      </div>
    </section>
  );
}