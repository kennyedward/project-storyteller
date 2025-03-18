
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProjectPreview from '../components/home/ProjectPreview';
import { projects } from '../data/projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
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
