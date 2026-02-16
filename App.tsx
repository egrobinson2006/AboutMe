
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ChatBot from './components/ChatBot.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'chat'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience" className="py-20 bg-slate-900/50">
          <ExperienceSection />
        </section>
        
        <section id="skills" className="py-20">
          <SkillsSection />
        </section>
        
        <section id="projects" className="py-20 bg-slate-900/50">
          <ProjectsSection />
        </section>
        
        <section id="chat" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Chat with my AI Twin
            </h2>
            <p className="text-slate-400 text-lg">
              Ask about my work history, skills, or favorite tech stack. My digital self is ready to help!
            </p>
          </div>
          <ChatBot />
        </section>
      </main>

      <Footer />
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-600 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;
