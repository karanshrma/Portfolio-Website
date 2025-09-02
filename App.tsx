
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import type { Experience as ExperienceType, Project, SkillCategory, Certification } from './types';

// Data definitions
const portfolioData = {
  name: "Karan Sharma",
  title: "Flutter & Android Developer",
  contact: {
    email: "ks2275863@gmail.com",
    phone: "+91 78142 52797",
    linkedin: "https://linkedin.com/in/karanshrma",
    github: "https://github.com/karanshrma"
  },
  about: "I am a Computer Science & Engineering graduate specializing in Flutter and Android development. I build scalable apps with modern architectures like MVVM, Bloc, and Clean Architecture.",
  experiences: [
    {
      role: "Android Developer Intern",
      company: "AppsAIT",
      period: "Aug 2024 – Dec 2024",
      location: "Remote",
      description: [
        "Built Android apps with Firebase, MVVM, real-time messaging, Google Maps API, location tracking, and responsive UI.",
        "Deployed apps on Vercel with Firebase backend.",
      ],
    },
  ] as ExperienceType[],
  projects: [
    {
      title: "E-Commerce App (Amazon Clone)",
      description: "A feature-rich e-commerce application mirroring core Amazon functionalities.",
      tech: ["Flutter", "Dart", "Node.js", "MongoDB", "Provider", "GPay"],
    },
    {
      title: "AI Q&A App (Perplexity Clone)",
      description: "An intelligent question-answering app powered by the Gemini API.",
      tech: ["Flutter", "Dart", "FastAPI", "Python", "Gemini API"],
    },
    {
      title: "Flutter Clean Architecture Blog App",
      description: "A robust blogging platform built using clean architecture principles for scalability.",
      tech: ["Flutter", "Dart", "Bloc", "Supabase", "Hive"],
    },
    {
      title: "Social Media App",
      description: "A social networking app with real-time features and robust backend services.",
      tech: ["Kotlin", "Firebase", "Zego", "Supabase"],
    },
  ] as Project[],
  skills: [
    {
      title: "Languages",
      skills: ["Dart", "Kotlin", "JavaScript", "Python"],
    },
    {
      title: "Frameworks",
      skills: ["Flutter", "Provider", "Bloc", "Node.js", "FastAPI"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Firebase", "Supabase", "GitHub", "Android Studio", "Postman"],
    },
  ] as SkillCategory[],
  certifications: [
    { name: "Flutter & Dart", issuer: "Udemy", year: 2024 },
    { name: "Android Development Bootcamp", issuer: "Harnoor Singh", year: 2024 },
    { name: "IoT", issuer: "IIT Kharagpur", year: 2023 },
  ] as Certification[],
};

const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation
        setIsVisible(true);
    }, []);
    
  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <main className="container mx-auto max-w-5xl px-6">
        <Hero data={portfolioData} />
        <About about={portfolioData.about} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Certifications certifications={portfolioData.certifications} />
      </main>
      <Footer contact={portfolioData.contact} />
    </div>
  );
};

export default App;
