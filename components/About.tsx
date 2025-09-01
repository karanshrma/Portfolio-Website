
import React from 'react';
import SectionWrapper from './SectionWrapper';

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-lg leading-relaxed max-w-3xl">
        {about}
      </p>
    </SectionWrapper>
  );
};

// A wrapper for consistent section styling
const SectionWrapper: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => {
    return (
        <section id={id} className="py-20">
            <div className="transform transition-all duration-1000 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
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


export default About;
