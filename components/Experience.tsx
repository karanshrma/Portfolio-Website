import React from 'react';
import type { Experience as ExperienceType } from '../types';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

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

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative border-l border-slate-800 pl-6 md:pl-8 space-y-12 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 bg-slate-900 border-2 border-indigo-500 rounded-full group-hover:bg-indigo-500 transition-colors duration-300"></div>
            
            <div className="bg-slate-800/30 border border-slate-700/30 p-6 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-md font-semibold text-slate-300 mt-1">{exp.company}</p>
                </div>
                
                <div className="flex flex-col gap-2 md:items-end text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-indigo-400/80" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-indigo-400/80" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.link && (
                <div className="mb-4">
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
                  >
                    <span>Play Store App</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              <ul className="space-y-3 text-slate-300">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm md:text-base leading-relaxed">
                    <span className="text-indigo-400 mt-1.5 flex-shrink-0 text-xs">◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
