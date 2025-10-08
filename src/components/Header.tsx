import { motion } from "motion/react";
import { Link as ScrollLink } from 'react-scroll'

export function Header() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)]/80 backdrop-blur-md border-b border-[var(--neon-cyan)]/20"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500} // tempo em ms
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[var(--neon-cyan)] tracking-wider cursor-pointer"
            >
              {"<Dhouglas Bandeira />"}
            </motion.div>
          </ScrollLink>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 8px var(--neon-cyan)"
                }}
                className="text-white hover:text-[var(--neon-cyan)] transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--neon-cyan)] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-[var(--neon-cyan)]"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
              <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
              <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
            </div>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}