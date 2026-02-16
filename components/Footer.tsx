
import React from 'react';
import { PERSONAL_INFO } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xl font-bold mb-4">ALEX<span className="text-blue-500">.</span>DEV</div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Alex Rivera. Built with React & Gemini API.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.twitter} className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
