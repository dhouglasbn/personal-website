import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const achievements = [
    { number: "10+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "90%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--neon-cyan)]">
            About the Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)] transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NTk2MTc2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-[var(--neon-green)]/20 text-[var(--neon-green)] border-[var(--neon-green)]">
                  Always Coding
                </Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Decoding the Future, One Line at a Time
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              In the beginning of 2021, I began my path in web development with the Node.js + React.js stack. 
              Since then, I've grown into a full-stack developer, and this stack has shaped the way 
              I understand technology, software principles, and innovation.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              When I'm not crafting immersive digital experiences, you'll find me exploring 
              new frameworks. I’m always eager to learn and explore new ideas — who knows, maybe one day 
              I'll shift into a new field. But for now, I'm focused on building my career and finding 
              new opportunities in web development.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-pulse" />
                <span className="text-gray-300">Continuously exploring new tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-pink)] rounded-full animate-pulse" />
                <span className="text-gray-300">Available for freelance projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse" />
                <span className="text-gray-300">Open to collaboration</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/20 hover:border-[var(--neon-cyan)]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] p-6 text-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-[var(--neon-cyan)] mb-2 group-hover:text-[var(--neon-pink)] transition-colors"
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}