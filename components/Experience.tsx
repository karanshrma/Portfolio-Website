
import React from 'react';
import type { Experience as ExperienceType } from '../types';

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


interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
        <div className="absolute top-0 -left-1.5 w-3 h-3 bg-indigo-500 rounded-full"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[38px] top-1 w-3 h-3 bg-slate-500 rounded-full border-2 border-slate-900"></div>
            <p className="text-sm font-medium text-indigo-400 mb-1">{exp.period}</p>
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <p className="text-md text-slate-400 mb-4">{exp.company} &bull; {exp.location}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
