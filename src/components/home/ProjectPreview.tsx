
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectPreviewProps {
  title: string;
  description: string;
  contributions: string[];
  imageUrl: string;
  slug: string;
  direction?: 'normal' | 'reverse';
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  description,
  contributions,
  imageUrl,
  slug,
  direction = 'normal', // We'll keep this prop for future flexibility, but won't use it for layout
}) => {
  return (
    <div className="w-full py-16 md:py-24 px-8 md:px-16 border-b border-neutral-200">
      <div className="w-full overflow-hidden rounded-lg bg-neutral-100 mb-8">
        <Link to={`/case-study/${slug}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
          />
        </Link>
      </div>
      
      <div className="w-full">
        <h2 className="font-bricolage text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
        <p className="font-manrope text-neutral-700 mb-8 max-w-xl">{description}</p>
        
        <div className="mb-8">
          <h3 className="font-bricolage text-lg font-medium mb-3">Contributions</h3>
          <ul className="space-y-2">
            {contributions.map((contribution, idx) => (
              <li key={idx} className="font-manrope text-neutral-600">• {contribution}</li>
            ))}
          </ul>
        </div>
        
        <Link 
          to={`/case-study/${slug}`} 
          className="inline-flex items-center font-manrope text-black hover:text-neutral-600 transition-colors group"
        >
          View case study 
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
