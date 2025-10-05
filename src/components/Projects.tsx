import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Zap } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "CyberCommerce Platform",
      description: "A futuristic e-commerce platform with AR product visualization and blockchain payments. Built with Next.js, Three.js, and Solidity.",
      image: "https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTk2MDc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Next.js", "Three.js", "Blockchain", "AR/VR"],
      color: "var(--neon-cyan)",
      featured: true,
    },
    {
      title: "Neural Network Dashboard",
      description: "Real-time analytics dashboard for AI model monitoring with cyberpunk-inspired data visualizations and predictive insights.",
      image: "https://images.unsplash.com/photo-1635571433479-299afc37eff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZGlnaXRhbCUyMGFydHxlbnwxfHx8fDE3NTk2MTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["TypeScript", "D3.js", "Node.js", "MongoDB", "AI/ML"],
      color: "var(--neon-pink)",
      featured: true,
    },
    {
      title: "Matrix Chat Protocol",
      description: "Decentralized messaging app with end-to-end encryption, quantum-resistant security, and holographic user interfaces.",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NTk2MTc2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "WebRTC", "Cryptography", "P2P"],
      color: "var(--neon-green)",
      featured: false,
    },
    {
      title: "Quantum Finance Tracker",
      description: "Cryptocurrency portfolio manager with quantum computing integration for market prediction and risk analysis.",
      image: "https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTk2MDc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "Python", "Quantum", "Finance API"],
      color: "var(--neon-cyan)",
      featured: false,
    },
    {
      title: "Holographic UI Kit",
      description: "Open-source component library for building futuristic interfaces with 3D holographic effects and particle systems.",
      image: "https://images.unsplash.com/photo-1635571433479-299afc37eff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZGlnaXRhbCUyMGFydHxlbnwxfHx8fDE3NTk2MTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Storybook", "WebGL", "Sass", "Open Source"],
      color: "var(--neon-pink)",
      featured: false,
    },
    {
      title: "Digital Twin City",
      description: "Smart city simulation platform with IoT integration, real-time monitoring, and AI-powered urban planning tools.",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NTk2MTc2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "IoT", "AWS", "Machine Learning"],
      color: "var(--neon-green)",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--neon-green)]">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-cyan)] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest creations that push the boundaries of technology 
            and design in the digital realm.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[var(--dark-secondary)]/80 border-2 border-transparent hover:border-[var(--neon-cyan)]/50 transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] border-[var(--neon-cyan)]">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        style={{ 
                          borderColor: `${project.color}50`,
                          color: project.color 
                        }}
                        className="hover:bg-[var(--neon-cyan)]/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_15px_var(--neon-cyan)] transition-all group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[var(--neon-pink)] text-[var(--neon-pink)] hover:bg-[var(--neon-pink)] hover:text-black transition-all group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-8 text-center"
        >
          More Projects
        </motion.h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[var(--dark-bg)]/60 border border-gray-700 hover:border-[var(--neon-cyan)]/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent" />
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-[var(--neon-cyan)] transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Zap className="mr-1 h-3 w-3" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}