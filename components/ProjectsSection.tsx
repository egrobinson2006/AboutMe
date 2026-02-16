
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
          <p className="text-slate-400">A collection of projects that define my engineering journey.</p>
        </div>
        <a href="#" className="text-blue-400 font-medium hover:underline flex items-center gap-2">
          View all projects 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all hover:-translate-y-2 shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
              >
                Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
