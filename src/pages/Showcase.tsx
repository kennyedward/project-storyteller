
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getProjectBySlug } from '../data/projects';

const Showcase = () => {
  const { slug, showcase } = useParams<{ slug: string; showcase: string }>();
  const navigate = useNavigate();
  
  const project = slug ? getProjectBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!project) {
      navigate('/404');
      return;
    }
    
    // Scroll to top when the showcase page loads
    window.scrollTo(0, 0);
  }, [project, navigate, slug]);
  
  if (!project) {
    return null;
  }

  // Define showcase content based on the showcase param
  const getShowcaseContent = () => {
    switch (showcase) {
      case 'foundation':
        return {
          title: 'Building the foundation',
          content: 'The first step in building Forto's design system was establishing a solid foundation through design tokens. We created a comprehensive set of color, typography, spacing, and other fundamental variables that would serve as the building blocks for all components.',
          image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000',
          description: 'By defining these tokens early, we ensured consistency across the entire platform while allowing for flexibility in implementation. The tokens were implemented in both design tools and code, creating a single source of truth.'
        };
      case 'components':
        return {
          title: 'Building core components',
          content: 'With the foundation in place, we focused on designing and developing a library of core components that would address the most common UI patterns in Forto's applications.',
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000',
          description: 'Each component was carefully crafted to be flexible, accessible, and performant. We prioritized components based on frequency of use and complexity, starting with basics like buttons, inputs, and cards before moving to more complex patterns.'
        };
      case 'documentation':
        return {
          title: 'Documentation & sharing',
          content: 'A design system is only as good as its documentation. We created comprehensive documentation that covered everything from design principles to implementation details.',
          image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000',
          description: 'The documentation included usage guidelines, code examples, accessibility considerations, and interactive component previews. This made it easy for designers and developers to understand how and when to use each component.'
        };
      case 'dark-mode':
        return {
          title: 'Dark mode',
          content: 'We implemented a comprehensive dark mode for the entire design system, ensuring a seamless experience for users who prefer this viewing option or work in low-light environments.',
          image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1000',
          description: 'Rather than simply inverting colors, we carefully crafted a dark palette that maintained brand identity while reducing eye strain and preserving readability. Each component was tested in both light and dark contexts to ensure consistency.'
        };
      case 'handoff':
        return {
          title: 'Developer handoff',
          content: 'Collaboration between designers and developers was crucial to the success of the design system. We established clear handoff processes and tools to ensure smooth implementation.',
          image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1000',
          description: 'The components were built with developer experience in mind, with clear APIs, consistent naming conventions, and thorough documentation. This reduced friction in the implementation process and ensured high-quality output.'
        };
      case 'results':
        return {
          title: 'Results',
          content: 'The design system reduced development time by 40%, improved consistency across products, and significantly enhanced the user experience. Designers and developers reported higher satisfaction and productivity.',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000',
          description: 'By establishing a shared language and component library, we not only improved the quality of Forto's digital products but also accelerated the company's ability to innovate and respond to market needs.'
        };
      default:
        return {
          title: 'Design System Showcase',
          content: 'View the details of our design system work.',
          image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000',
          description: 'This showcase highlights key aspects of our design system development process.'
        };
    }
  };

  const showcaseContent = getShowcaseContent();

  return (
    <div className="min-h-screen bg-black dark:bg-black text-white">
      <Header />
      
      <main className="mb-20">
        {/* Hero section */}
        <div className="w-full pt-12 pb-16 md:py-24 px-8 md:px-16 bg-black dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-bricolage text-4xl md:text-[2.375rem] font-semibold mb-8 text-white">
              {showcaseContent.title}
            </h1>
            
            {/* Image showcase */}
            <div className="mt-8 bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
              <div className="p-8 md:p-12">
                <img 
                  src={showcaseContent.image} 
                  alt={showcaseContent.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="mt-12 max-w-4xl">
              <p className="font-manrope text-base text-gray-300 mb-6">
                {showcaseContent.content}
              </p>
              <p className="font-manrope text-base text-gray-300">
                {showcaseContent.description}
              </p>
            </div>
            
            {/* Back to case study button */}
            <div className="mt-12">
              <button 
                onClick={() => navigate(`/case-study/${slug}`)}
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-white font-manrope text-sm transition-colors"
              >
                Back to case study
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Showcase;
