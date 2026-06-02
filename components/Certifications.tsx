import React from 'react';
import type { Certification } from '../types';
import { Award, Calendar, ChevronRight } from 'lucide-react';

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

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <SectionWrapper id="certifications" title="Certifications & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-slate-800/20 border border-slate-700/30 p-6 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/35 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-wide">{cert.name}</h3>
                    <p className="text-sm text-indigo-400 font-medium mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/40 px-2.5 py-1 rounded-md border border-slate-800">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400/80" />
                  <span>{cert.year}</span>
                </div>
              </div>
              {cert.description && (
                <p className="text-slate-400 text-sm leading-relaxed mb-4 pl-1">
                  {cert.description}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold mt-4 pl-1">
              <span>Verified Credential</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
