
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
  direction = 'normal',
}) => {
  return (
    <div className="w-full py-16 md:py-20 px-8 md:px-16">
      <div className="w-full overflow-hidden rounded-lg mb-8 max-h-[300px]">
        <Link to={`/case-study/${slug}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
          />
        </Link>
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="font-bricolage text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
          <p className="font-manrope text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl">{description}</p>
          
          <Link 
            to={`/case-study/${slug}`} 
            className="inline-flex items-center font-manrope text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-all group relative"
          >
            <span className="pb-1 border-b-2 border-transparent group-hover:border-current transition-all duration-300 pr-1">View showcase</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="md:w-2/5">
          <h3 className="font-bricolage text-lg font-medium mb-4">Contributions</h3>
          <div className="flex flex-wrap gap-2">
            {contributions.map((contribution, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="font-manrope text-xs py-2 px-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
              >
                {contribution}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
