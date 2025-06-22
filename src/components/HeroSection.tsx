import React from 'react';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Anish
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-shift bg-400%">
                Tamoli
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
              5☆☆-JavaScprit | MERN Stack Developer | Next.js | Open Source
            </p>
          </div>

         

          
          <div className="flex gap-6 justify-center lg:justify-start">
            {[
              { icon: Github, href: 'https://github.com/iamAnish18', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/anish-tamoli-45bb68313/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/iamanish.18/', label: 'Instagram' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-float">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 animate-gradient-shift bg-400%">
              <div className="w-full h-full rounded-full bg-slate-900 p-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFNZTn8k_kFoA/profile-displayphoto-scale_400_400/B4DZeIfSHCHAAk-/0/1750341593464?e=1755734400&v=beta&t=cAGaqbfXe3ClFYGDQm4Pe3stDj-A2riQDbboxgkAYI4"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
