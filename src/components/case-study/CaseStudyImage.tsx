
import React from 'react';

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  fullWidth?: boolean;
}

const CaseStudyImage: React.FC<CaseStudyImageProps> = ({
  src,
  alt,
  caption,
  fullWidth = false,
}) => {
  return (
    <figure className={`my-12 ${fullWidth ? 'w-full max-w-none mx-0' : 'max-w-5xl mx-auto'}`}>
      <div className="overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-neutral-500 font-manrope">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default CaseStudyImage;
