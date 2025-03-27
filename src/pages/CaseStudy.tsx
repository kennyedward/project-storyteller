
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyImage from '../components/case-study/CaseStudyImage';
import CaseStudyNextProject from '../components/case-study/CaseStudyNextProject';
import CaseSectionNumber from '../components/case-study/CaseSectionNumber';
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

  // Only proceed with enterprise design system for now
  if (slug !== "enterprise-design-system") {
    return (
      <div className="min-h-screen bg-background">
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
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black text-white">
      <Header />
      
      <main className="mb-20">
        {/* Hero section - updated to match design */}
        <div className="w-full pt-12 pb-16 md:py-24 px-8 md:px-16 bg-black dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="md:w-7/12">
                <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-white">
                  Building Phoenix design system from the ground up
                </h1>
              </div>
              <div className="md:w-5/12 mt-6 md:mt-0">
                <p className="font-manrope text-base md:text-lg text-gray-300">
                  Forto delivers tech-driven solutions to streamlining global logistics, and I
                  contributed to building a design system for its SHIP platform—a tool for
                  managing and optimizing shipments.
                </p>
              </div>
            </div>

            {/* Component showcase section */}
            <div className="mt-16 bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
              <div className="p-8 md:p-12">
                <img 
                  src="public/lovable-uploads/c99367f9-41ca-4d5f-a358-32120527f011.png" 
                  alt="Phoenix design system components"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Project details grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mt-16 md:mt-24 text-white">
              <div>
                <h3 className="font-bricolage text-lg font-semibold mb-2">Role</h3>
                <p className="font-manrope text-gray-400">Product designer</p>
              </div>
              
              <div>
                <h3 className="font-bricolage text-lg font-semibold mb-2">My contribution</h3>
                <p className="font-manrope text-gray-400">Foundation library, Component library, Documentation and training, Dark mode, Developer handoff</p>
              </div>
              
              <div>
                <h3 className="font-bricolage text-lg font-semibold mb-2">Team</h3>
                <p className="font-manrope text-gray-400">1 Lead Product Designer, 2 Design System Developers</p>
              </div>
              
              <div>
                <h3 className="font-bricolage text-lg font-semibold mb-2">Outcome</h3>
                <p className="font-manrope text-gray-400">Write about the result of this project. Write a couple of list sentences here to illustrate how easy it for designers to create pages. And how easy it is for designers and developers to onboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge and Solution sections */}
        <div className="w-full py-16 md:py-24 px-8 md:px-16 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold mb-6 text-white">Challenge</h2>
              <p className="font-manrope text-gray-300">
                As Forto grew and refreshed its brand, we needed a scalable design system 
                aligned with the updated visual identity to support Forto's growing team and 
                evolving product needs.
              </p>
            </div>
            
            <div>
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold mb-6 text-white">Solution</h2>
              <p className="font-manrope text-gray-300">
                Our priority was to develop a platform-agnostic system that teams could 
                easily adopt, ensuring seamless integration and theming support for a consistent 
                user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Color palette design tokens section */}
        <CaseStudySection title="" withBackground>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <CaseSectionNumber number="01" />
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Building the foundation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-8">The first step in building Forto's design system was establishing a solid foundation through design tokens. We created a comprehensive set of color, typography, spacing, and other fundamental variables that would serve as the building blocks for all components.</p>
                
                <p>By defining these tokens early, we ensured consistency across the entire platform while allowing for flexibility in implementation. The tokens were implemented in both design tools and code, creating a single source of truth.</p>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-neutral-900 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000" 
                  alt="Design tokens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>
        
        {/* Color system section */}
        <CaseStudySection title="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <div className="bg-neutral-900 rounded-lg overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1000" 
                  alt="Color system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="font-bricolage text-xl font-medium mb-6">Color system</h3>
              <p className="mb-6">We developed a comprehensive color system that balanced Forto's brand identity with the functional needs of a complex application. The palette included primary brand colors, extended UI colors, and semantic colors for feedback and status indicators.</p>
              <p>Each color was carefully evaluated for accessibility, ensuring WCAG AA compliance across the application. We also created dark mode variants to support different user preferences and environments.</p>
            </div>
          </div>
        </CaseStudySection>

        {/* Component library section */}
        <CaseStudySection title="" withBackground>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <CaseSectionNumber number="02" />
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Building core components</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-8">With the foundation in place, we focused on designing and developing a library of core components that would address the most common UI patterns in Forto's applications.</p>
                
                <p>Each component was carefully crafted to be flexible, accessible, and performant. We prioritized components based on frequency of use and complexity, starting with basics like buttons, inputs, and cards before moving to more complex patterns.</p>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-neutral-900 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000" 
                  alt="Component library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Documentation section */}
        <CaseStudySection title="">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <CaseSectionNumber number="03" />
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Documentation & sharing</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                <div className="bg-neutral-900 rounded-lg overflow-hidden aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000" 
                    alt="Documentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <p className="mb-6">A design system is only as good as its documentation. We created comprehensive documentation that covered everything from design principles to implementation details.</p>
                <p>The documentation included usage guidelines, code examples, accessibility considerations, and interactive component previews. This made it easy for designers and developers to understand how and when to use each component.</p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Dark mode section */}
        <CaseStudySection title="" withBackground>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <CaseSectionNumber number="04" />
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Dark mode</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-8">We implemented a comprehensive dark mode for the entire design system, ensuring a seamless experience for users who prefer this viewing option or work in low-light environments.</p>
                
                <p>Rather than simply inverting colors, we carefully crafted a dark palette that maintained brand identity while reducing eye strain and preserving readability. Each component was tested in both light and dark contexts to ensure consistency.</p>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-neutral-900 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1000" 
                  alt="Dark mode"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Developer handoff section */}
        <CaseStudySection title="">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <CaseSectionNumber number="05" />
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Developer handoff</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                <div className="bg-neutral-900 rounded-lg overflow-hidden aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1000" 
                    alt="Developer handoff"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <p className="mb-6">Collaboration between designers and developers was crucial to the success of the design system. We established clear handoff processes and tools to ensure smooth implementation.</p>
                <p>The components were built with developer experience in mind, with clear APIs, consistent naming conventions, and thorough documentation. This reduced friction in the implementation process and ensured high-quality output.</p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Results section */}
        <CaseStudySection title="" withBackground>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <h2 className="font-bricolage text-2xl md:text-3xl font-semibold">Results</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-8">The design system reduced development time by 40%, improved consistency across products, and significantly enhanced the user experience. Designers and developers reported higher satisfaction and productivity, while customer support tickets related to interface confusion decreased by 35%.</p>
                
                <p>By establishing a shared language and component library, we not only improved the quality of Forto's digital products but also accelerated the company's ability to innovate and respond to market needs.</p>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-neutral-900 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000" 
                  alt="Results"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
