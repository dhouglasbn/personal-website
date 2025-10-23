import {
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
} from 'lucide-react'

export const contactInfo = [
  {
    icon: Mail,
    label: {
      en: 'Email',
      pt: 'E-mail'
    },
    value: "dhouglasbn@gmail.com",
    color: "var(--neon-cyan)",
  },
  {
    icon: Phone,
    label: {
      en: 'Phone',
      pt: 'Telefone'
    },
    value: "+55 (83) 99414-1260",
    color: "var(--neon-pink)",
  },
  {
    icon: MapPin,
    label: {
      en: 'Location',
      pt: 'Localização'
    },
    value: "Campina Grande, PB - Brazil",
    color: "var(--neon-green)",
  }
];

export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/dhouglasbn",
    color: "var(--neon-cyan)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/dhouglas-bandeira",
    color: "var(--neon-pink)",
  }
];