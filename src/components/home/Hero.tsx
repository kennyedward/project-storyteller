
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="font-manrope text-xl text-[1.25rem] text-neutral-700 dark:text-neutral-300 max-w-3xl mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hey, I'm Kehinde Odewole — a digital designer based in Berlin 🇩🇪
        </p>
        <h1 className="font-bricolage text-4xl md:text-6xl font-semibold leading-tight mb-6 animate-fade-in w-4/5" style={{ animationDelay: '0.3s' }}>
          <span className="text-heroAccent">Specialized in crafting seamless</span> digital experiences <span className="text-heroAccent">and</span> scalable design systems.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
