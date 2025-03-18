
import React from 'react';

interface CaseStudyHeaderProps {
  title: string;
  tagline: string;
  client: string;
  timeline: string;
  role: string;
  coverImage: string;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  tagline,
  client,
  timeline,
  role,
  coverImage,
}) => {
  return (
    <div className="w-full">
      <div className="pt-8 md:pt-16 px-8 md:px-16 mb-8 md:mb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bricolage text-3xl md:text-5xl font-semibold mb-6">{title}</h1>
          <p className="font-manrope text-xl md:text-2xl text-neutral-700 mb-12 max-w-3xl">{tagline}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bricolage text-sm uppercase tracking-wider mb-2 text-neutral-500">Client</h3>
              <p className="font-manrope text-lg">{client}</p>
            </div>
            <div>
              <h3 className="font-bricolage text-sm uppercase tracking-wider mb-2 text-neutral-500">Timeline</h3>
              <p className="font-manrope text-lg">{timeline}</p>
            </div>
            <div>
              <h3 className="font-bricolage text-sm uppercase tracking-wider mb-2 text-neutral-500">Role</h3>
              <p className="font-manrope text-lg">{role}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full aspect-video overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudyHeader;
