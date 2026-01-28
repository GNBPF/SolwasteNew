import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Leaf, Recycle, TrendingUp } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';

export const MissionGrid: React.FC = () => {
  const cards = [
    { 
      icon: Target, 
      title: 'Our Mission', 
      text: 'To provide robust, zero-landfill solutions that empower communities to manage their waste at the source.',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'from-blue-500/90 to-cyan-600/90',
      delay: 0
    },
    { 
      icon: TrendingUp, 
      title: 'Vision 2047', 
      text: "Supporting India's goal for sustainable cities by creating a circular economy.",
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'from-green-500/90 to-emerald-600/90',
      delay: 0.1
    },
    { 
      icon: Award, 
      title: 'Quality Promise', 
      text: 'German-engineered precision delivering maximum uptime and minimal maintenance.',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'from-orange-500/90 to-red-600/90',
      delay: 0.2
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden py-20">
      {/* Simplified gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-brand-olive/5"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 inline-block">Core Values</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 uppercase tracking-tight text-brand-dark">
            Building A <span className="text-brand-gold">Sustainable Future</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl font-light">
            Innovation. Integrity. Impact.
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center group">

                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-4 border-gray-200`}>
                    <card.icon size={72} strokeWidth={2.5} className="text-brand-dark drop-shadow-lg" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-heading font-bold mb-4 uppercase tracking-wide text-brand-dark">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg sm:text-xl font-light max-w-md mx-auto">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGrid;
