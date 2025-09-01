
import React from 'react';
import type { SkillCategory } from '../types';

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

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((category, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-slate-300 flex items-center">
                  <span className="text-indigo-400 mr-2">&#10003;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
