
import React from 'react';

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  withBackground?: boolean;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  title,
  children,
  withBackground = false,
}) => {
  return (
    <section className={`py-16 md:py-24 px-8 md:px-16 ${withBackground ? 'bg-neutral-50' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bricolage text-2xl md:text-3xl font-semibold mb-8">{title}</h2>
        <div className="font-manrope text-neutral-800 space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
