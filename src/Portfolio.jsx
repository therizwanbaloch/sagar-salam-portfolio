import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import SummaryAndSkills from './components/SummaryAndSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import EducationAndCerts from './components/EducationAndCerts';
import Footer from './components/Footer';

const RESUME_DATA = {
  name: "SAGAR SALAM",
  title: "Software Developer | Kotlin Specialist",
  contact: {
    phone: "+92 3243435065",
    email: "sagarsalam531@gmail.com",
    linkedin: "https://linkedin.com/in/sagar-salam-72ba71348/",
    location: "Bahawalpur, Punjab, Pakistan"
  },
  summary: "Accomplished Software Engineer specializing in high-performance Android development and modular educational architectures. Expert in Kotlin, Java, Python, and C++, with a proven track record of engineering scalable applications and resolving complex cross-version compatibility issues. Dedicated to implementing Clean Architecture and SOLID principles to ensure system reliability while optimizing the Android SDK for seamless user experiences. Proactive collaborator and adaptive learner focused on bridging the gap between intelligent mobile environments and intuitive, high-impact EdTech solutions.",
  skills: {
    languages: ["Kotlin", "Java", "Python", "C++", "CSS", "XML"],
    android: ["Jetpack Compose", "Room", "Firebase", "Material UI", "Glide"],
    tools: ["Android Studio", "Git", "VS Code", "Jupyter", "Google Colab"],
    professional: ["Leadership", "Collaborative", "Adaptive Learning", "Problem-Solving", "Critical Thinking", "Time Management"]
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 antialiased font-sans scroll-smooth">
      
      <Navbar data={RESUME_DATA} />
      <Hero data={RESUME_DATA} />
      <Experience data={RESUME_DATA} />

      <div className="bg-[#030712] border-b border-slate-900/60 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Projects data={RESUME_DATA} />
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-1">
          <SummaryAndSkills data={RESUME_DATA} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-16">
          <Achievements data={RESUME_DATA} />
          <EducationAndCerts data={RESUME_DATA} />
        </div>
        
      </main>


      <Footer name={RESUME_DATA.name} />
    </div>
  );
}