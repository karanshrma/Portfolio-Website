import React from 'react';
import type { Education as EducationType } from '../types';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-slate-800/30 border border-slate-700/30 p-6 md:p-8 rounded-xl hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-lg text-slate-300 mb-2">{edu.degree}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:items-end text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-400/80" />
                  <span>{edu.period}</span>
                </div>
                {edu.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-indigo-400/80" />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
