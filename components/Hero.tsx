"use client";

import Image from "next/image";
import { FaAws, FaMicrosoft, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTensorflow } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#0a0f1e] to-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-alternative.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Tinashe{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Makamure
            </span>
          </h1>

          <div className="mb-8 animate-fade-in delay-100">
            <p className="text-2xl md:text-4xl text-gray-200 font-semibold mb-2">
              Senior Software & AI Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Specializing in Cloud Architecture, Machine Learning & Data Engineering
            </p>
          </div>

          {/* Certifications Banner */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12 animate-fade-in delay-200">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <span className="text-accent font-semibold">AWS Solutions Architect</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <span className="text-accent font-semibold">Azure Fundamentals</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <span className="text-accent font-semibold">Microsoft Fabric</span>
            </div>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center gap-6 mb-12 text-gray-300 animate-fade-in delay-300">
            <FaAws size={40} className="hover:text-accent transition-colors cursor-pointer" title="AWS" />
            <FaMicrosoft size={40} className="hover:text-accent transition-colors cursor-pointer" title="Azure" />
            <FaPython size={40} className="hover:text-accent transition-colors cursor-pointer" title="Python" />
            <FaReact size={40} className="hover:text-accent transition-colors cursor-pointer" title="React" />
            <SiKubernetes size={40} className="hover:text-accent transition-colors cursor-pointer" title="Kubernetes" />
            <SiTensorflow size={40} className="hover:text-accent transition-colors cursor-pointer" title="TensorFlow/ML" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/resume"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border-2 border-accent transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              View Resume
            </a>
            <a
              href="/CV_Tinashe_Makamure__Software_Engineer.pdf"
              download
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-gray-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
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
