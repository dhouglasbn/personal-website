import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Zap } from "lucide-react";
import { projects } from "../constants/projects";

export function Projects() {
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
                    <a 
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        size="sm" 
                        className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_15px_var(--neon-cyan)] transition-all group/btn cursor-pointer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-[var(--neon-pink)] text-[var(--neon-pink)] hover:bg-[var(--neon-pink)] hover:text-black transition-all group/btn cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </a>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[var(--dark-bg)]/60 border border-gray-700 hover:border-[var(--neon-cyan)]/50 transition-all duration-300 h-full overflow-hidden rounded-xl">
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
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex-1 text-xs cursor-pointer">
                        <Zap className="mr-1 h-3 w-3" />
                        View
                      </Button>
                    </a>
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