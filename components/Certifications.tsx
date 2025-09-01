
import React from 'react';
import type { Certification } from '../types';

const SectionWrapper: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => {
    return (
        <section id={id} className="py-20">
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
    <SectionWrapper id="certifications" title="Certifications">
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-white">{cert.name}</h3>
              <p className="text-sm text-slate-400">{cert.issuer}</p>
            </div>
            <span className="text-slate-400 font-medium">{cert.year}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
