import React, { useState, useEffect } from 'react';
import { Layers, Flame, ShieldCheck, Recycle } from '../Icons';

export const TechSpecs: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center border-t border-gray-800 overflow-hidden py-12">
      {/* Background Image with Premium Black Fade - Mobile Optimized */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fahakaImages[currentImageIndex]} 
          alt="Fahaka Tech" 
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/60"></div>
      </div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 text-white">Core Specifications</h2>
          <div className="w-12 xs:w-14 sm:w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>
        
        {/* Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16 lg:mb-20">
          {[
            { icon: <Layers size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
            { icon: <Flame size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Process Temp", value: "150°C - 300°C", sub: "Auto-Regulated" },
            { icon: <ShieldCheck size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
            { icon: <Recycle size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
          ].map((spec, idx) => (
            <div key={idx} className="bg-brand-dark/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 border border-gray-700 hover:border-brand-gold transition-colors duration-300 text-center group rounded-lg">
              <div className="inline-flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 text-gray-400 group-hover:bg-brand-gold group-hover:text-white mb-3 sm:mb-4 transition-all">
                {spec.icon}
              </div>
              <h3 className="text-gray-300 font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm mb-1 sm:mb-2">{spec.label}</h3>
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1">{spec.value}</div>
              {spec.sub && <div className="text-gray-400 text-xs xs:text-sm">{spec.sub}</div>}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 sm:mb-6 uppercase leading-tight drop-shadow-2xl">
            Ready to deploy Fahaka?
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-medium drop-shadow-lg leading-relaxed">
            This technology is currently available for pilot programs in select municipalities and large townships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
