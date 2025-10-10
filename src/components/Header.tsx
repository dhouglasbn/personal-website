import { motion } from "motion/react";
import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";

export function Header() {
  const { t, language, toggleLanguage } = useLanguage()

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
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
              {t('header.logo')}
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
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--neon-${language === 'en' ? 'pink' : 'green'})]/20 border border-[var(--neon-${language === 'en' ? 'pink' : 'green'})] hover:border-[var(--neon-${language === 'en' ? 'pink' : 'green'})] hover:shadow-[0_0_10px_var(--neon-${language === 'en' ? 'pink' : 'green'})] transition-all duration-300 text-[var(--neon-${language === 'en' ? 'pink' : 'green'})] cursor-pointer`}
            >
              <Languages className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </motion.button>
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 text-[var(--neon-pink)]"
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs uppercase">{language}</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-[var(--neon-cyan)]"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
                <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
                <div className="w-6 h-0.5 bg-[var(--neon-cyan)]"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}