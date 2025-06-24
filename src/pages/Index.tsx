import React from 'react';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-inter">
      <Navigation />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
};

export default Index;
