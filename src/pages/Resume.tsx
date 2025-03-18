
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="font-bricolage text-4xl md:text-5xl font-semibold mb-6 md:mb-0">Resume</h1>
            
            <a 
              href="#" 
              className="inline-flex items-center font-manrope bg-black text-white py-3 px-6 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
          
          <div className="space-y-16">
            {/* Experience Section */}
            <section>
              <h2 className="font-bricolage text-2xl font-medium mb-8 pb-2 border-b border-neutral-200">Experience</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="font-bricolage text-xl font-medium">Senior Product Designer</h3>
                    <span className="font-manrope text-neutral-600">2020 - Present</span>
                  </div>
                  <h4 className="font-manrope text-lg mb-3">Design Studio Inc.</h4>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Led the design and implementation of a comprehensive design system for a Fortune 500 client</li>
                    <li>Facilitated cross-functional collaboration between design, product, and engineering teams</li>
                    <li>Conducted user research and usability testing to validate design decisions</li>
                    <li>Mentored junior designers and established design critiques and knowledge sharing sessions</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="font-bricolage text-xl font-medium">Product Designer</h3>
                    <span className="font-manrope text-neutral-600">2017 - 2020</span>
                  </div>
                  <h4 className="font-manrope text-lg mb-3">Tech Innovations Co.</h4>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Redesigned the company's flagship product, resulting in a 35% increase in user engagement</li>
                    <li>Created and maintained component libraries in Figma</li>
                    <li>Worked closely with developers to ensure pixel-perfect implementation</li>
                    <li>Participated in user interviews and synthesized findings into actionable insights</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="font-bricolage text-xl font-medium">UX/UI Designer</h3>
                    <span className="font-manrope text-neutral-600">2015 - 2017</span>
                  </div>
                  <h4 className="font-manrope text-lg mb-3">Digital Agency XYZ</h4>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Designed user interfaces for web and mobile applications across various industries</li>
                    <li>Created wireframes, prototypes, and user flows</li>
                    <li>Collaborated with clients to understand business requirements and user needs</li>
                    <li>Conducted competitor analysis and design research</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Education Section */}
            <section>
              <h2 className="font-bricolage text-2xl font-medium mb-8 pb-2 border-b border-neutral-200">Education</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="font-bricolage text-xl font-medium">Master of Design</h3>
                    <span className="font-manrope text-neutral-600">2013 - 2015</span>
                  </div>
                  <h4 className="font-manrope text-lg">Design Institute</h4>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="font-bricolage text-xl font-medium">Bachelor of Fine Arts</h3>
                    <span className="font-manrope text-neutral-600">2009 - 2013</span>
                  </div>
                  <h4 className="font-manrope text-lg">University of Arts</h4>
                </div>
              </div>
            </section>
            
            {/* Skills Section */}
            <section>
              <h2 className="font-bricolage text-2xl font-medium mb-8 pb-2 border-b border-neutral-200">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="font-bricolage text-lg font-medium mb-4">Design</h3>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Design Systems</li>
                    <li>UX/UI Design</li>
                    <li>Interaction Design</li>
                    <li>Information Architecture</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Visual Design</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bricolage text-lg font-medium mb-4">Research & Strategy</h3>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>User Research</li>
                    <li>Usability Testing</li>
                    <li>User Personas</li>
                    <li>Journey Mapping</li>
                    <li>Competitive Analysis</li>
                    <li>Product Strategy</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bricolage text-lg font-medium mb-4">Tools</h3>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Figma</li>
                    <li>Adobe Creative Suite</li>
                    <li>Sketch</li>
                    <li>Principle</li>
                    <li>InVision</li>
                    <li>Miro</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bricolage text-lg font-medium mb-4">Collaboration</h3>
                  <ul className="list-disc pl-6 font-manrope text-neutral-700 space-y-2">
                    <li>Design Critiques</li>
                    <li>Stakeholder Management</li>
                    <li>Cross-functional Teamwork</li>
                    <li>Mentoring</li>
                    <li>Design Documentation</li>
                    <li>Workshop Facilitation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
