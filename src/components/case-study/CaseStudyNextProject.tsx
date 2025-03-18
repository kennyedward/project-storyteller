
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudyNextProjectProps {
  title: string;
  slug: string;
  imageUrl: string;
}

const CaseStudyNextProject: React.FC<CaseStudyNextProjectProps> = ({
  title,
  slug,
  imageUrl,
}) => {
  return (
    <section className="py-16 md:py-24 px-8 md:px-16 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <p className="font-bricolage text-lg mb-8 text-neutral-500">Next Project</p>
        <Link 
          to={`/case-study/${slug}`}
          className="group block"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h3 className="font-bricolage text-3xl md:text-4xl font-semibold">
              {title}
            </h3>
            <div className="inline-flex items-center font-manrope text-black hover:text-neutral-600 transition-colors">
              View project 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          
          <div className="mt-12 overflow-hidden rounded-lg bg-neutral-100">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto max-h-[500px] object-cover transition-transform group-hover:scale-105 duration-500"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyNextProject;
