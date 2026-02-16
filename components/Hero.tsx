
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{PERSONAL_INFO.name.split(' ')[0]}</span>
          <br />
          {PERSONAL_INFO.title}
        </h1>
        
        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex items-center space-x-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-200 transition-all transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-700 rounded-lg hover:border-slate-400 transition-all"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-700 rounded-lg hover:border-slate-400 transition-all"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-4 border-slate-800 shadow-2xl rotate-3 hover:rotate-0">
          <img
            src="https://picsum.photos/seed/alexrivera/400/400"
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl flex items-center space-x-3 backdrop-blur-sm">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center text-[10px] font-bold">JS</div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center text-[10px] font-bold">TS</div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-sky-500 flex items-center justify-center text-[10px] font-bold">RE</div>
          </div>
          <div className="text-xs">
            <div className="text-slate-400">Total Projects</div>
            <div className="font-bold">42+ Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
