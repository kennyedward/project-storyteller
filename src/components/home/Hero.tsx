
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-8 md:px-16 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bricolage text-4xl md:text-6xl font-semibold leading-tight mb-8 animate-fade-in">
          Product designer focused on digital product design and design systems
        </h1>
        <p className="font-manrope text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Hey, I'm Kehinde Odewole - a digital designer based in Berlin.
        </p>
      </div>
    </section>
  );
};

export default Hero;
