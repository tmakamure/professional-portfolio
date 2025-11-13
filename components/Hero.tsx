"use client";

import Image from "next/image";
import { FaAws, FaMicrosoft, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTensorflow } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Now More Visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-alternative.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Smart Overlay: Vignette effect - dark center for text, lighter edges to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/50" />
        {/* Radial overlay for additional contrast at center */}
        <div className="absolute inset-0 bg-radial-gradient opacity-50" style={{
          background: 'radial-gradient(ellipse at center, rgba(5,9,21,0.7), rgba(5,9,21,0.3))'
        }} />
      </div>

      {/* Animated Accent Elements - Enhanced */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {/* Top-left accent orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        {/* Bottom-right accent orb */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Name and Title - Enhanced Typography */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
              Tinashe{" "}
              <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent animate-pulse">
                Makamure
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-yellow-300 mx-auto mt-4" />
          </div>

          {/* Professional Description - Enhanced */}
          <div className="animate-fade-in delay-100 space-y-3">
            <p className="text-3xl md:text-5xl font-bold text-white">
              Senior Software & AI Engineer
            </p>
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto">
              Building intelligent cloud solutions at the intersection of software architecture and machine learning
            </p>
          </div>

          {/* Enhanced Certifications Banner */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-4 animate-fade-in delay-200">
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-md px-6 py-3 rounded-full border border-accent/50 hover:border-accent/80 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-accent font-semibold text-sm md:text-base">AWS Solutions Architect</span>
            </div>
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-md px-6 py-3 rounded-full border border-accent/50 hover:border-accent/80 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-accent font-semibold text-sm md:text-base">Azure Fundamentals</span>
            </div>
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-md px-6 py-3 rounded-full border border-accent/50 hover:border-accent/80 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-accent font-semibold text-sm md:text-base">Microsoft Fabric</span>
            </div>
          </div>

          {/* Tech Icons - Enhanced with better interactivity */}
          <div className="flex justify-center gap-8 mb-8 animate-fade-in delay-300">
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <FaAws size={40} className="text-accent" title="AWS" />
            </div>
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <FaMicrosoft size={40} className="text-accent" title="Azure" />
            </div>
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <FaPython size={40} className="text-accent" title="Python" />
            </div>
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <FaReact size={40} className="text-accent" title="React" />
            </div>
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <SiKubernetes size={40} className="text-accent" title="Kubernetes" />
            </div>
            <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-110">
              <SiTensorflow size={40} className="text-accent" title="TensorFlow/ML" />
            </div>
          </div>

          {/* CTA Buttons - Modern Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400 pt-4">
            <a
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-accent to-yellow-300 hover:from-accent/90 hover:to-yellow-400 text-primary font-bold rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-accent/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="/resume"
              className="px-10 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border-2 border-accent/80 hover:border-accent transition-all duration-300 transform hover:scale-110 backdrop-blur-md shadow-xl"
            >
              View Resume
            </a>
            <a
              href="/CV_Tinashe_Makamure__Software_Engineer.pdf"
              download
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 hover:border-accent/50 transition-all duration-300 transform hover:scale-110 backdrop-blur-md"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
