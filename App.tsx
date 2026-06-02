import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import type { 
  Experience as ExperienceType, 
  Project, 
  SkillCategory, 
  Certification, 
  Education as EducationType 
} from './types';

// Structured data directly from Karan Sharma's resume
const portfolioData = {
  name: "Karan Sharma",
  title: "Flutter & Android Developer",
  contact: {
    email: "ks2275863@gmail.com",
    phone: "+91 78142 52797",
    linkedin: "https://linkedin.com/in/karanshrma",
    github: "https://github.com/karanshrma"
  },
  about: "I am a Computer Science & Engineering graduate specializing in Flutter and Android development. I build scalable, high-performance cross-platform and native mobile applications with robust, backend-integrated services. Deeply experienced in modern architectural patterns like MVVM, Bloc, and Clean Architecture for building secure, scalable, and maintainable software.",
  experiences: [
    {
      role: "Flutter Developer",
      company: "Coretegra Technologies",
      period: "Nov 2025 – Present",
      location: "Zirakpur, IN",
      link: "https://play.google.com/store/apps",
      description: [
        "Developed and enhanced a Flutter-based health and wellness application with features including authentication, reminders, sleep tracking, step monitoring, mood analytics, and curated wellness content.",
        "Implemented Google Sign-In, session management, backend integrations, and onboarding workflows, improving application security and overall user experience.",
        "Built and maintained core modules such as reminders, sleep tracking, and step counting using Flutter Background Services, Kotlin integrations, local data persistence, notification scheduling, and reliable background processing.",
        "Improved application performance and stability by optimizing asynchronous operations, resolving production issues, and developing additional features such as mood tracking, calendar views, music playback/downloads, and responsive UI components."
      ]
    }
  ] as ExperienceType[],
  projects: [
    {
      title: "E-Commerce Mobile App (Amazon Clone)",
      description: "A comprehensive cross-platform shopping application built with Flutter & Dart, integrated backend on Node.js + Express.js and MongoDB database, replica of core Amazon features (search, categorization, cart, ratings, deal-of-the-day). Features secure auth, real-time order tracking, an admin panel for order management, integrated GPay for checkout, and an admin analytics dashboard displaying charts for total sales.",
      tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Mongoose", "Provider", "GPay"],
      link: "https://github.com/karanshrma"
    },
    {
      title: "AI Q&A App (Perplexity Clone)",
      description: "An intelligent question-answering mobile application incorporating Retrieval-Augmented Generation (RAG) to scan and integrate search engines / database queries before delivering accurate answers. Implemented clean Flutter rendering on the Android client, fetching and caching answers from a custom FastAPI pipeline integrating the Gemini API.",
      tech: ["Flutter", "Dart", "FastAPI", "Python", "Gemini API", "REST API", "RAG"],
      link: "https://github.com/karanshrma"
    },
    {
      title: "Flutter Clean Architecture Blog App",
      description: "A modular, full-stack blogging application applying Clean Architecture (Data, Domain, Presentation layers) adhering strictly to SOLID development principles. Realised signup/login/session persistence with Supabase authentication, Bloc state management, dependency injections with GetIt, and caching via Hive local storage as well as network connection checking for an offline-first experience.",
      tech: ["Flutter", "Dart", "Bloc", "Supabase", "Hive", "GetIt", "SOLID"],
      link: "https://github.com/karanshrma"
    }
  ] as Project[],
  skills: [
    {
      title: "Languages",
      skills: ["Dart", "JavaScript", "Python", "Kotlin"]
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Flutter", "Provider", "BLoC", "FastAPI", "Node.js", "Express.js", "REST API", "RAG"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL"]
    },
    {
      title: "Mobile Development",
      skills: ["Android (Kotlin)", "Material Design 3", "State Management (Provider, BLoC)"]
    },
    {
      title: "Core Concepts",
      skills: ["Object-Oriented Programming (OOP)", "API Integration", "State Management"]
    },
    {
      title: "Tools",
      skills: ["Firebase", "Supabase", "GitHub", "PyCharm", "WebStorm", "Android Studio", "Postman (API Testing)"]
    }
  ] as SkillCategory[],
  education: [
    {
      institution: "Amritsar College Of Engineering And Technology",
      degree: "Bachelor's of Technology in Computer Science & Engineering",
      period: "June 2025",
      location: "Punjab, India"
    }
  ] as EducationType[],
  certifications: [
    {
      name: "Flutter & Dart – The Complete Guide [2024 Edition]",
      issuer: "Udemy",
      year: 2024,
      description: "Completed a comprehensive course covering Flutter widgets, Dart fundamentals, state management, Firebase integration, and responsive UI design."
    },
    {
      name: "Android Development Bootcamp",
      issuer: "Harnoor Singh",
      year: 2024,
      description: "Learned Android app development using Kotlin, MVVM architecture, Firebase integration, and hands-on practice through real-world projects."
    }
  ] as Certification[]
};

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
  }, []);
    
  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white`}>
      {/* Visual background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-slate-800/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto max-w-5xl px-6">
          <Hero data={portfolioData} />
          <About about={portfolioData.about} />
          <Experience experiences={portfolioData.experiences} />
          <Projects projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <Education education={portfolioData.education} />
          <Certifications certifications={portfolioData.certifications} />
        </main>
        <Footer contact={portfolioData.contact} />
      </div>
    </div>
  );
};

export default App;
