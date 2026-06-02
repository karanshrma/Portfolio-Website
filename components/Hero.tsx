import React from 'react';
import { Mail, Phone, FileDown, Smartphone, Globe } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    contact: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
  };
}

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 md:py-20 border-b border-slate-800/30">
      <div 
        className="transform transition-all duration-1000 opacity-0 animate-fade-in-up" 
        style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
      >
        {/* Core Badges */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-wider">
            <Smartphone className="h-3.5 w-3.5" />
            <span>Mobile Engineer</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-wider">
            <Globe className="h-3.5 w-3.5" />
            <span>Open Source contributor</span>
          </span>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-4 select-none">
          {data.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 mb-8 tracking-tight">
          {data.title}
        </h2>
        
        {/* Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-4xl">
          <a 
            href={`mailto:${data.contact.email}`} 
            className="flex items-center gap-3 bg-slate-800/20 border border-slate-700/20 px-5 py-4 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
              <p className="text-sm text-slate-300 font-semibold truncate mt-0.5">{data.contact.email}</p>
            </div>
          </a>

          <a 
            href={`tel:${data.contact.phone.replace(/\s/g, '')}`} 
            className="flex items-center gap-3 bg-slate-800/20 border border-slate-700/20 px-5 py-4 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call</p>
              <p className="text-sm text-slate-300 font-semibold mt-0.5 whitespace-nowrap">{data.contact.phone}</p>
            </div>
          </a>

          <a 
            href={data.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-slate-800/20 border border-slate-700/20 px-5 py-4 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
              <LinkedinIcon />
            </div>
            <div className="ml-0.5">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
              <p className="text-sm text-slate-300 font-semibold mt-0.5">/karanshrma</p>
            </div>
          </a>

          <a 
            href={data.contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-slate-800/20 border border-slate-700/20 px-5 py-4 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <GithubIcon />
            </div>
            <div className="ml-0.5">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">GitHub</p>
              <p className="text-sm text-slate-300 font-semibold mt-0.5">/karanshrma</p>
            </div>
          </a>
        </div>

        {/* Primary Download Resume */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://drive.google.com/uc?export=download&id=1yHt0Db4Izj_pRXJsg_c48Ev0pGYlEDlk"
            download="Karan_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-indigo-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-600/20 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Download Resume</span>
            <FileDown className="h-5 w-5" />
          </a>
          <a 
            href="#projects"
            className="inline-flex items-center justify-center font-bold text-slate-300 hover:text-white py-3.5 px-8 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/10 hover:bg-slate-800/20 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.7s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
