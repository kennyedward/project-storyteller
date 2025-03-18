
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bricolage text-4xl md:text-5xl font-semibold mb-12">About Me</h1>
          
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1024" 
                  alt="Designer portrait" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="font-bricolage text-2xl font-medium mb-6">Hello, I'm a Product Designer</h2>
              
              <div className="font-manrope text-neutral-800 space-y-6">
                <p>
                  With over 8 years of experience in product design, I specialize in creating thoughtful digital experiences
                  through design systems and user-centered solutions. My work focuses on solving complex problems
                  by understanding user needs and business goals.
                </p>
                
                <p>
                  I believe that great design is invisible—it should feel intuitive and enhance the user's experience
                  without calling attention to itself. My approach combines analytical thinking with creativity to
                  deliver products that are both functional and delightful to use.
                </p>
                
                <p>
                  Throughout my career, I've had the opportunity to work with teams of all sizes, from startups to enterprise
                  organizations. This diversity of experience has taught me how to adapt my process to different contexts
                  while maintaining a focus on quality and impact.
                </p>
                
                <p>
                  When I'm not designing, you'll find me exploring photography, experimenting with new cooking recipes,
                  or hiking in nature to find inspiration.
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bricolage text-xl font-medium mb-4">Skills & Expertise</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  <div className="font-manrope">Design Systems</div>
                  <div className="font-manrope">UX Research</div>
                  <div className="font-manrope">Product Strategy</div>
                  <div className="font-manrope">UI Design</div>
                  <div className="font-manrope">Prototyping</div>
                  <div className="font-manrope">Interaction Design</div>
                  <div className="font-manrope">Usability Testing</div>
                  <div className="font-manrope">User Research</div>
                  <div className="font-manrope">Wireframing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
