import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link as ScrollLink } from 'react-scroll'
import { ChevronDown, Code, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-20 h-20 border-2 border-[var(--neon-pink)] opacity-30"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-32 left-20 w-16 h-16 border-2 border-[var(--neon-green)] opacity-30 rotate-45"
      />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[var(--neon-cyan)] text-lg tracking-widest uppercase">
            Welcome to the Matrix
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--neon-cyan)] via-white to-[var(--neon-pink)] bg-clip-text text-transparent"
        >
          Dhouglas Bandeira
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          <span className="text-[var(--neon-green)]">Full Stack Developer</span> &{" "}
          <span className="text-[var(--neon-pink)]">Digital Architect</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technology. 
          Specializing in React, Node.js, and the cyberpunk aesthetic of tomorrow.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500} // tempo em ms
          >
            <Button
              size="lg"
              className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-300 group cursor-pointer"
            >
              <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500} // tempo em ms
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--neon-pink)] text-[var(--neon-pink)] hover:bg-[var(--neon-pink)] hover:text-black hover:shadow-[0_0_20px_var(--neon-pink)] transition-all duration-300 group cursor-pointer"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </ScrollLink>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[var(--neon-cyan)] opacity-70" />
      </motion.div>
    </section>
  );
}