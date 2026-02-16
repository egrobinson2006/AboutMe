
import React from 'react';
import { SKILLS } from '../constants.ts';

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Expertise</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          I continuously evolve my skill set to stay at the forefront of modern web development and AI integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div key={cat} className="space-y-6">
            <h3 className="text-lg font-bold text-blue-400 uppercase tracking-widest">{cat}</h3>
            <div className="space-y-5">
              {SKILLS.filter(s => s.category === cat).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-blue-500 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 group-hover:from-blue-400 group-hover:to-indigo-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
