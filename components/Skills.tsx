import React from 'react';
import type { SkillCategory } from '../types';
import { Terminal, Cpu, Database, Smartphone, Layers, Wrench, CheckCircle2 } from 'lucide-react';

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

interface SkillsProps {
  skills: SkillCategory[];
}

// Function to get category specific icon
const getCategoryIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('languages')) return <Terminal className="h-5 w-5 text-indigo-400" />;
  if (t.includes('technologies')) return <Cpu className="h-5 w-5 text-emerald-400" />;
  if (t.includes('database')) return <Database className="h-5 w-5 text-cyan-400" />;
  if (t.includes('mobile')) return <Smartphone className="h-5 w-5 text-pink-400" />;
  if (t.includes('core')) return <Layers className="h-5 w-5 text-amber-400" />;
  return <Wrench className="h-5 w-5 text-teal-400" />;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <SectionWrapper id="skills" title="Skills & expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div 
            key={index} 
            className="bg-slate-800/20 border border-slate-700/30 p-6 rounded-xl hover:bg-slate-800/40 hover:border-indigo-500/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
              <div className="p-2 bg-slate-900/50 rounded-lg">
                {getCategoryIcon(category.title)}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/40 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700/20 hover:border-slate-600/40 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="h-3 w-3 text-indigo-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
