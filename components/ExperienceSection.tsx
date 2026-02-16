
import React from 'react';
import { EXPERIENCES } from '../constants.ts';

const ExperienceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className="text-3xl font-bold">Professional Experience</h2>
        <div className="flex-grow h-[1px] bg-slate-800"></div>
      </div>

      <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-[1px] before:bg-slate-800">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] w-3 h-3 rounded-full bg-blue-500 border-4 border-slate-950"></div>
            
            <div className="w-full md:w-1/2 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <span className="text-blue-500 font-mono text-sm mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
              <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
