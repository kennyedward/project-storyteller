
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProjectPreview from '../components/home/ProjectPreview';
import { projects } from '../data/projects';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ '--column-spacing': '1.5vw' } as React.CSSProperties}>
        <Hero />
        
        <div className="py-8 md:py-12 px-8 md:px-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-bricolage text-3xl md:text-4xl font-semibold mb-4">Selected work</h2>
            <ChevronDown className="w-6 h-6 mt-2 animate-bounce opacity-70" />
          </div>
        </div>
        
        <div className="projects-container space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectPreview
              key={project.id}
              title={project.title}
              description={project.description}
              contributions={project.contributions}
              imageUrl={project.imageUrl}
              slug={project.slug}
              direction={index % 2 === 0 ? 'normal' : 'reverse'}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
