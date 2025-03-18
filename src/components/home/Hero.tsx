
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-8 md:px-16 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bricolage text-4xl md:text-6xl font-semibold leading-tight mb-8 animate-fade-in">
          Crafting thoughtful digital experiences through design systems and user-centered solutions
        </h1>
        <p className="font-manrope text-xl md:text-2xl text-neutral-700 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I'm a product designer with a focus on design systems and user experience.
          I collaborate with teams to create cohesive, accessible, and impactful digital products.
        </p>
      </div>
    </section>
  );
};

export default Hero;
