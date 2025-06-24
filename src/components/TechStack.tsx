import React from 'react';
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS'],
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Java Scprit', 'MySQL', 'MongoDB', 'Express.js' , 'Restfull Api'],
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      category: 'Tools',
      icon: Zap,
      skills: ['Git', 'Docker', 'AWS', 'Github'],
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.category}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {tech.category}
                  </h3>

                  <div className="space-y-2">
                    {tech.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 inline-block mr-2 mb-2 hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
