import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers, ArrowRight, Check, X, AlertTriangle, Apple, Bottle, Heart, Pill } from '../components/Icons';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

export const Fahaka: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 sm:pt-20 bg-brand-dark text-white min-h-screen">
      <SEO 
        title="Fahaka - Universal Waste Decomposer for Large Generators | Food, Plastic & Sanitary"
        description="Revolutionary Fahaka technology for large waste generators in India. Processes food waste, plastic bottles & sanitary waste into sterile resources. Ideal for hospitals, institutions, food courts, and municipalities. Plasma pyrolysis technology, 850°C thermal decomposition, zero landfill, complete compliance. The future of sustainable waste management."
        keywords="Fahaka waste processor, universal waste decomposer, composting solutions for large waste generators, hospital waste management, institutional waste processor, plasma pyrolysis India, plastic waste management, sanitary waste disposal, biomedical waste, mixed waste processing, thermal decomposition, zero landfill, zero waste India, advanced waste technology, SWM compliance, ESG sustainability"
        type="product"
      />
      
      {/* Hero Section with Image Slideshow - Mobile Optimized */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-3 xs:px-4 sm:px-6">
         {/* Background Image Slideshow - Mobile Optimized */}
         <div className="absolute inset-0 z-0">
           <AnimatePresence mode="wait">
             <motion.img 
               key={fahakaImages[currentImageIndex]}
               src={fahakaImages[currentImageIndex]} 
               alt="Fahaka Machine" 
               className="w-full h-full object-cover"
               style={{
                 objectPosition: 'center'
               }}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
             />
           </AnimatePresence>
           {/* Premium white fade overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/35"></div>
         </div>
         
         {/* Image indicators */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
           {fahakaImages.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentImageIndex(idx)}
               className={`rounded-full transition-all duration-300 ${
                 idx === currentImageIndex
                   ? 'h-2.5 w-10 bg-brand-gold shadow-lg shadow-brand-gold/50'
                   : 'h-2.5 w-2.5 bg-white/60 hover:bg-white/80'
               }`}
               aria-label={`View image ${idx + 1}`}
             />
           ))}
         </div>
         
         <div className="relative z-20 max-w-5xl px-3 xs:px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-heading font-black text-white mb-2 xs:mb-3 sm:mb-4 tracking-tighter leading-[1.1] xs:leading-none" style={{ textShadow: '0 4px 25px rgba(0,0,0,0.6), 0 8px 40px rgba(0,0,0,0.4)' }}>
                    FAHAKA
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-gray-300 mb-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase tracking-wide" style={{ textShadow: '0 3px 20px rgba(0,0,0,0.5), 0 6px 30px rgba(0,0,0,0.3)' }}>
                    The Universal Decomposer
                </p>
                
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed font-normal px-3 xs:px-4" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>
                    Traditional composters fail at contamination. Fahaka thrives on it. <br className="hidden sm:block"/>
                    The world's first unified processor for <span className="text-white font-bold">Food, Plastics, Sanitary, and Biochemical Waste</span>.
                </p>
            </motion.div>
         </div>

         
      </section>

      {/* The Problem / Solution - ENHANCED MODERN DESIGN */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
        {/* Modern Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -100, 0],
            x: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
            {/* Header with Modern Typography */}
            <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-xs sm:text-sm font-medium uppercase tracking-wider">The Problem & Solution</span>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                Why Fahaka?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Traditional systems fail at contamination. Fahaka is engineered to thrive on it.
              </p>
            </div>
            </ScrollReveal>

            {/* Two-Column Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              
              {/* Left: Problem Statement Card */}
              <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.25 }}>
                {/* Glassmorphism Card */}
                <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-red-500/20">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">The Reality</h3>
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                      In real-world scenarios, <span className="text-white font-semibold">segregation is never 100%</span>. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { value: "15-30%", label: "Typical Contamination" },
                        { value: "100%", label: "Batch Rejection Rate" }
                      ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                          <div className="text-2xl font-bold text-red-400 mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Problem List */}
                    <ul className="space-y-3">
                      {[
                        "System shutdown on contamination",
                        "Rejected batches become landfill",
                        "Manure quality compromised",
                        "High maintenance costs"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <X className="w-4 h-4 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Fahaka Solution Card */}
              <ScrollReveal variant="fadeInRight" delay={0.2} viewport={{ once: true, amount: 0.25 }}>
                {/* Glassmorphism Card */}
                <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                        <Zap className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Fahaka Solution</h3>
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                      Proprietary <span className="text-purple-400 font-semibold">Multi-Stage Thermal Decomposition</span>. We don't just compost—we break down molecular bonds.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { icon: Recycle, label: "Mixed Waste", sub: "No sorting needed" },
                        { icon: Flame, label: "High Temp", sub: "Pathogen-free" },
                        { icon: Layers, label: "95% Less", sub: "Volume reduction" },
                        { icon: ShieldCheck, label: "Zero Landfill", sub: "Clean output" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                        >
                          <item.icon className="w-6 h-6 text-purple-400 mb-2" />
                          <div className="text-xs font-semibold text-white mb-1">{item.label}</div>
                          <div className="text-[10px] text-gray-400">{item.sub}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Benefit List */}
                    <ul className="space-y-3">
                      {[
                        "Accepts mixed waste streams",
                        "Sterilizes at molecular level",
                        "Reduces volume by 95%",
                        "Zero landfill output"
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start text-sm text-gray-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-purple-400" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Process Flow Visualization - REDESIGNED */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  The Process
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">From contaminated input to sterile output</p>
              </div>

              {/* Horizontal Process Flow */}
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
                
                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {/* Step 1: Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        01
                      </div>
                      
                      {/* Icon Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {[
                          { icon: Apple, color: "from-green-500/30 to-emerald-500/20", borderColor: "border-green-500/30" },
                          { icon: Bottle, color: "from-blue-500/30 to-cyan-500/20", borderColor: "border-blue-500/30" },
                          { icon: Heart, color: "from-pink-500/30 to-rose-500/20", borderColor: "border-pink-500/30" },
                          { icon: Pill, color: "from-red-500/30 to-orange-500/20", borderColor: "border-red-500/30" }
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`aspect-square rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center border ${item.borderColor} group cursor-pointer`}
                          >
                            <item.icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">Mixed Input</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Food, plastics, sanitary & biochemical waste together</p>
                      
                      {/* Badge */}
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                        Contaminated
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-purple-500/50">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>

                  {/* Step 2: Thermal Process */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        02
                      </div>
                      
                      {/* Animated Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center"
                          >
                            <Flame className="w-10 h-10 text-orange-400" />
                          </motion.div>
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl"
                          />
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">Thermal Break</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">High-temperature molecular decomposition at <span className="text-orange-400 font-bold">150°C - 300°C</span></p>
                      
                      {/* Temp Display */}
                      <div className="p-2 rounded-lg bg-orange-500/10 text-center border border-orange-500/20">
                        <div className="text-xl font-bold text-orange-400">Controlled Heat</div>
                        <div className="text-[10px] text-gray-400">Auto-Regulated</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-purple-500/50">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>

                  {/* Step 3: Sterilization */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        03
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                          <ShieldCheck className="w-10 h-10 text-blue-400" />
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">Sterilization</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">Medical-grade pathogen elimination</p>
                      
                      {/* Stats */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Pathogen Kill</span>
                          <span className="text-blue-400 font-bold">Log 6</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Safety</span>
                          <span className="text-blue-400 font-bold">Medical Grade</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-purple-500/50">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>

                  {/* Step 4: Output */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        04
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 blur-2xl"></div>
                      
                      {/* Icon */}
                      <div className="relative mb-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                          <Recycle className="w-10 h-10 text-green-400" />
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">Clean Output</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">Sterile inert ash—premium bio-coal</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {["Pathogen-Free", "Odorless", "95% Less"].map((tag, i) => (
                          <span key={i} className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Badge */}
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                        ✓ Zero Landfill
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Tech Specs - Mobile Optimized */}
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

      {/* CTA - Enhanced responsive design - Mobile Optimized */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
          {/* Background Image with Premium Black to Gold Fade - Mobile Optimized */}
          <div className="absolute inset-0 z-0">
            <img 
              src={fahakaImages[2]} 
              alt="Fahaka CTA" 
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-brand-gold/30 to-white/40"></div>
          </div>
          
          <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-black text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 uppercase leading-tight drop-shadow-2xl px-2">
                Ready to deploy Fahaka?
              </h2>
              <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-4xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 font-medium px-3 xs:px-4 sm:px-6 md:px-8 drop-shadow-lg leading-relaxed">
                  This technology is currently available for pilot programs in select municipalities and large townships.
              </p>
          </div>
      </section>
    </div>
  );
};