
import React from 'react';

// SVG Icons as React Components
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.002 3.492-4.002 1.93 0 3.508 1.803 3.508 4.002v8.399h4.988v-10.131c0-4.87-3.484-7.019-6.467-7.019-3.255 0-5.151 1.8-6.024 3.248z"/></svg>
);
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

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

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="flex flex-col justify-center min-h-[calc(100vh-80px)] py-20">
      <div className="transform transition-all duration-1000 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
          Karan Sharma
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-300 mb-6">
          {data.title}
        </h2>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-slate-400">
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <EmailIcon /> <span>{data.contact.email}</span>
            </a>
            <span className="hidden md:block">|</span>
            <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <PhoneIcon /> <span>{data.contact.phone}</span>
            </a>
            <span className="hidden md:block">|</span>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <LinkedInIcon /> <span>LinkedIn</span>
            </a>
            <span className="hidden md:block">|</span>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GitHubIcon /> <span>GitHub</span>
            </a>
        </div>

        <a 
          href="https://drive.google.com/uc?export=download&id=1yHt0Db4Izj_pRXJsg_c48Ev0pGYlEDlk"
          download="Karan_Sharma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:scale-105"
        >
          Download Resume
        </a>
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
