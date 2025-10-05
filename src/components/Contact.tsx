import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Globe
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.neo@matrix.dev",
      color: "var(--neon-cyan)",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) MATRIX",
      color: "var(--neon-pink)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Digital Metropolis, Cyberspace",
      color: "var(--neon-green)",
    },
    {
      icon: Globe,
      label: "Website",
      value: "neo-matrix.dev",
      color: "var(--neon-cyan)",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
      color: "var(--neon-cyan)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "var(--neon-pink)",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "var(--neon-green)",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[var(--dark-secondary)]/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--neon-cyan)]">
            Initiate Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build the future together? Let's connect and discuss your next 
            cyberpunk project in the digital realm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--dark-bg)]/80 border-2 border-[var(--neon-cyan)]/20 hover:border-[var(--neon-cyan)]/40 transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Transmission
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Enter your name"
                      className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@matrix.dev"
                      className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="Project collaboration"
                    className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Describe your project or collaboration idea..."
                    rows={6}
                    className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Protocols
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-[var(--dark-bg)]/60 rounded-lg border border-gray-700 hover:border-[var(--neon-cyan)]/30 transition-all duration-300 group"
                  >
                    <div 
                      className="p-3 rounded-lg group-hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon 
                        className="h-6 w-6 transition-colors"
                        style={{ color: info.color }}
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Social Networks
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                    className="p-4 bg-[var(--dark-bg)]/60 rounded-lg border border-gray-700 hover:border-[var(--neon-cyan)]/50 transition-all duration-300 group"
                  >
                    <social.icon 
                      className="h-6 w-6 text-gray-400 group-hover:text-[var(--neon-cyan)] transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Current Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-green)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-green)]/20 text-[var(--neon-green)] border-[var(--neon-green)]">
                    Available for new projects
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-cyan)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] border-[var(--neon-cyan)]">
                    Remote collaboration preferred
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-pink)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-pink)]/20 text-[var(--neon-pink)] border-[var(--neon-pink)]">
                    Response time: 24 hours
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}