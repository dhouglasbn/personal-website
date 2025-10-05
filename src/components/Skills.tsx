import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "var(--neon-cyan)",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Motion/Framer", level: 85, icon: "✨" },
      ]
    },
    {
      title: "Backend & Database",
      color: "var(--neon-pink)",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "GraphQL", level: 75, icon: "📊" },
      ]
    },
    {
      title: "Tools & DevOps",
      color: "var(--neon-green)",
      skills: [
        { name: "Git & GitHub", level: 93, icon: "🐙" },
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "AWS", level: 72, icon: "☁️" },
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" },
      ]
    }
  ];

  const certifications = [
    "AWS Solutions Architect",
    "Meta Frontend Developer",
    "Google Cloud Professional",
    "MongoDB Developer",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[var(--dark-secondary)]/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--neon-pink)]">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-green)] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive arsenal of modern technologies and tools for building 
            next-generation digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--dark-bg)]/80 border-2 border-transparent hover:border-[var(--neon-cyan)]/30 transition-all duration-300 p-6 h-full">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-1 h-8 mr-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span 
                          className="text-sm font-bold"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                              boxShadow: `0 0 10px ${category.color}40`
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-[var(--neon-green)] border-[var(--neon-green)]/50 hover:border-[var(--neon-green)] hover:shadow-[0_0_10px_var(--neon-green)] transition-all duration-300 px-4 py-2"
                >
                  🏆 {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}