import { motion } from "motion/react";
import { Heart, Code, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[var(--dark-bg)] border-t border-[var(--neon-cyan)]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-gray-400"
          >
            <Code className="h-5 w-5 text-[var(--neon-cyan)]" />
            <span>{t('footer.builtWith')}</span>
            <Heart className="h-5 w-5 text-[var(--neon-pink)] animate-pulse" />
            <span>{t('footer.and')}</span>
            <Zap className="h-5 w-5 text-[var(--neon-green)]" />
            <span>{t('footer.energy')}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            {t('footer.copyright')}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[var(--neon-cyan)] text-xs font-mono"
          >
            {t('footer.disconnect')}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}