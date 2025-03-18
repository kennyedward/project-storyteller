
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyImage from '../components/case-study/CaseStudyImage';
import CaseStudyNextProject from '../components/case-study/CaseStudyNextProject';
import { getProjectBySlug, getNextProject } from '../data/projects';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = slug ? getProjectBySlug(slug) : undefined;
  const nextProject = slug ? getNextProject(slug) : undefined;
  
  useEffect(() => {
    if (!project) {
      navigate('/404');
    }
    
    // Scroll to top when the case study loads
    window.scrollTo(0, 0);
  }, [project, navigate, slug]);
  
  if (!project || !nextProject) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <CaseStudyHeader
          title={project.title}
          tagline={project.tagline}
          client={project.client}
          timeline={project.timeline}
          role={project.role}
          coverImage={project.coverImage}
        />
        
        <CaseStudySection title="The Problem">
          <p>{project.problem}</p>
        </CaseStudySection>
        
        <CaseStudySection title="Approach" withBackground>
          <p>{project.approach}</p>
        </CaseStudySection>
        
        <CaseStudyImage 
          src={project.imageUrl} 
          alt={`${project.title} design process`}
          caption="Project overview and design process"
          fullWidth
        />
        
        <CaseStudySection title="Process">
          <ul className="list-disc pl-6 space-y-3">
            {project.process.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </CaseStudySection>
        
        <CaseStudySection title="Outcome" withBackground>
          <p>{project.outcome}</p>
        </CaseStudySection>
        
        <CaseStudyNextProject
          title={nextProject.title}
          slug={nextProject.slug}
          imageUrl={nextProject.imageUrl}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
