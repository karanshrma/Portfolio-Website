import React from 'react';
import type { Project } from '../types';
import { Folder, ExternalLink } from 'lucide-react';

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

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl p-6 group transition-all duration-300 hover:bg-slate-800/40 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400">
          <Folder className="h-6 w-6" />
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 px-3 py-1.5 rounded-full"
          >
            <GithubIcon />
            <span>Repository Link</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
        {project.description}
      </p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
      {project.tech.map((t, i) => (
        <span key={i} className="bg-indigo-950/40 text-indigo-300 text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-md border border-indigo-900/40 uppercase">
          {t}
        </span>
      ))}
    </div>
  </div>
);

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
