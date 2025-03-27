
import React from 'react';

interface CaseSectionNumberProps {
  number: string;
}

const CaseSectionNumber: React.FC<CaseSectionNumberProps> = ({ number }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
      <span className="font-bricolage text-lg font-semibold">{number}</span>
    </div>
  );
};

export default CaseSectionNumber;
