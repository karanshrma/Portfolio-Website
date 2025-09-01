
import React from 'react';

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.002 3.492-4.002 1.93 0 3.508 1.803 3.508 4.002v8.399h4.988v-10.131c0-4.87-3.484-7.019-6.467-7.019-3.255 0-5.151 1.8-6.024 3.248z"/></svg>
);


interface FooterProps {
  contact: {
    email: string;
    linkedin: string;
  };
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="container mx-auto max-w-5xl px-6 py-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={`mailto:${contact.email}`} className="hover:text-indigo-400 transition-colors duration-300">
            <span className="sr-only">Email</span>
            <EmailIcon />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Karan Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
