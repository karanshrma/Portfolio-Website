
import React from 'react';
import type { Project } from '../types';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-lg p-6 group transition-all duration-300 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-indigo-900/50 hover:-translate-y-2">
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-slate-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t, i) => (
        <span key={i} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
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
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
