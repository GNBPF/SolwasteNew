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
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-t border-gray-800 overflow-hidden">
      {/* Background Image with Premium Black Fade - Mobile Optimized */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fahakaImages[1]} 
          alt="Fahaka Tech" 
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
      </div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white">Core Specifications</h2>
          <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-1 xs:h-1.5 sm:h-2 bg-brand-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {[
            { icon: <Layers size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
            { icon: <Flame size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Process Temp", value: "150°C - 300°C (Auto-Regulated)", sub: "" },
            { icon: <ShieldCheck size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
            { icon: <Recycle size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
          ].map((spec, idx) => (
            <div key={idx} className="bg-brand-dark p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 border border-gray-700 hover:border-brand-gold transition-colors duration-300 text-center group rounded-lg">
              <div className="inline-flex justify-center items-center w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-900 text-gray-400 group-hover:bg-brand-gold group-hover:text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 transition-all">
                {spec.icon}
              </div>
              <h3 className="text-gray-300 font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm mb-1.5 xs:mb-2 sm:mb-3">{spec.label}</h3>
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1.5 xs:mb-2">{spec.value}</div>
              {spec.sub && <div className="text-gray-400 text-xs xs:text-sm sm:text-base">{spec.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
