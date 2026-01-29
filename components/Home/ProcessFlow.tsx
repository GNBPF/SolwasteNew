import React from 'react';
import { motion } from 'framer-motion';
import { Package2, Settings, Flame, Wind, CheckCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProcessFlow: React.FC = () => {
  const steps = [
    { icon: Package2, title: 'Waste Input', desc: 'Add organic waste directly', color: 'from-green-400 to-emerald-600' },
    { icon: Settings, title: 'Shredding', desc: 'Automated size reduction', color: 'from-blue-400 to-cyan-600' },
    { icon: Flame, title: 'Decomposition', desc: 'Aerobic breakdown process', color: 'from-orange-400 to-red-600' },
    { icon: Wind, title: 'Filtration', desc: 'HEPA air purification', color: 'from-purple-400 to-pink-600' },
    { icon: CheckCircle, title: 'Compost Output', desc: 'Premium quality result', color: 'from-green-500 to-teal-600' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden py-20">
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-olive/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
      />

      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 inline-block">The Process</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-brand-dark mb-6 uppercase tracking-tight">
            How It <span className="text-brand-gold">Works</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl font-light">
            Five stages. Zero complexity.
          </p>
        </ScrollReveal>

        <div className="relative max-w-8xl mx-auto">
          {/* Simplified connecting line */}
          <div className="hidden lg:block absolute left-0 right-0 top-24 h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-center group">
                  {/* Step number */}
                  <motion.div 
                    className="text-8xl sm:text-9xl font-black text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500 mb-4"
                  >
                    {i + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-full h-full rounded-full bg-white border-4 border-gray-200 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                      <step.icon size={40} strokeWidth={2.5} className="text-brand-dark" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-3 uppercase">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-500 font-light">
                    {step.desc}
                  </p>

                  {/* Arrow to next step */}
                  {i < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute -right-8 xl:-right-4 top-20 text-brand-gold/40"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight size={32} strokeWidth={2} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
