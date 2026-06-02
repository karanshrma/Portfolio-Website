import React from 'react';
import { Sparkles, Terminal, ShieldAlert, Cpu } from 'lucide-react';

const SectionWrapper: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => {
    return (
        <section id={id} className="py-20 border-b border-slate-800/50">
            <div className="transform transition-all duration-1000 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-white mb-12 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-indigo-500 rounded-full"></span>
              </h2>
              {children}
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

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-6">
            {about}
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            I am dedicated to writing clean, maintainable code following SOLID principles. My focus is delivering production-ready mobile apps that feature outstanding user interfaces and reliable, high-performance backends.
          </p>
        </div>
        
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="bg-slate-800/20 border border-slate-700/30 p-5 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Clean Architecture</h4>
              <p className="text-xs text-slate-400 mt-1">Data, Domain & Presentation layers</p>
            </div>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/30 p-5 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">State Management</h4>
              <p className="text-xs text-slate-400 mt-1">Provider, BLoC, and ViewModels</p>
            </div>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/30 p-5 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300">
            <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Security & Auth</h4>
              <p className="text-xs text-slate-400 mt-1">Google Sign-In, token persistency</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
