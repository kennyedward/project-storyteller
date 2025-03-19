
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProjectPreview from '../components/home/ProjectPreview';
import { projects } from '../data/projects';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ '--column-spacing': '1.5vw' } as React.CSSProperties}>
        <Hero />
        
        <div className="projects-container">
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
