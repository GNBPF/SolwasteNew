import React from 'react';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../../utils/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof scrollAnimationVariants;
  delay?: number;
  className?: string;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

/**
 * ScrollReveal component for easy scroll-triggered animations
 * Inspired by award-winning websites like Awwwards winners
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeInUp',
  delay = 0,
  className = '',
  viewport = { once: true, amount: 0.2, margin: '0px 0px -100px 0px' }
}) => {
  const selectedVariant = scrollAnimationVariants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer for animating children sequentially
 */
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewport?: { once?: boolean; amount?: number };
}> = ({ children, className = '', staggerDelay = 0.1, viewport = { once: true, amount: 0.2 } }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem to be used inside StaggerContainer
 */
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={scrollAnimationVariants.staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ParallaxElement for depth-based scroll effects
 */
export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 50, className = '' }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{ willChange: 'transform' }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 30
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
