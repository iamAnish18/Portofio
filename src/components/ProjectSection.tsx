import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Online Marketplace Platform',
      description: 'A full-stack Online Marketplace solution with React, Node.js, and Express.js integration. Features include user authentication, product catalog, Listing cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1669301048918-6ca9a3cd39c1?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      gradient: 'from-blue-500 to-purple-600',
      githubUrl: 'https://github.com/iamAnish18/KeyDwell'
    },
    {
      title: 'Social Links',
      description: 'Links is a free-to-use project designed to easily connect one person to another. It presents a collection of projects and social media links in a visually appealing way, utilizing animations to enhance the user experience.',
      image: 'https://media.istockphoto.com/id/804296080/photo/concept-of-business-international-network-interface-technology-concept.jpg?s=1024x1024&w=is&k=20&c=1pfA8OZPDsT81v12pUbR2kERhUPzBcQskAOWtQaqpbg=',
      technologies: ['Html5', 'Css3', 'JavaScprit'],
      gradient: 'from-green-500 to-teal-600',
      githubUrl: 'https://github.com/iamAnish18/link-s'
    },
    // {
    //   title: 'Mobile Finance App',
    //   description: 'A React Native mobile application for personal finance management with real-time expense tracking, budget planning, and financial goal setting.',
    //   image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    //   technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    //   gradient: 'from-pink-500 to-rose-600',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Blockchain DApp',
    //   description: 'Decentralized application for NFT marketplace built on Ethereum. Features smart contracts, Web3 integration, and modern UI for trading digital assets.',
    //   image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    //   technologies: ['Solidity', 'Web3.js', 'React', 'IPFS'],
    //   gradient: 'from-orange-500 to-red-600',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Social Media Platform',
    //   description: 'A modern social networking platform with real-time messaging, content sharing, and community features. Built with scalability and performance in mind.',
    //   image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    //   technologies: ['Next.js', 'PostgreSQL', 'Socket.io', 'Redis'],
    //   gradient: 'from-purple-500 to-indigo-600',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'IoT Monitoring System',
    //   description: 'Real-time monitoring system for IoT devices with data visualization, alerting, and remote control capabilities. Handles thousands of concurrent connections.',
    //   image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
    //   technologies: ['Node.js', 'InfluxDB', 'React', 'MQTT'],
    //   gradient: 'from-cyan-500 to-blue-600',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      asChild
                    >
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
