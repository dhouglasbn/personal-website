import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Send, 
} from "lucide-react";
import { contactInfo, socialLinks } from "../constants/social";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'
import { useLanguage } from "../contexts/LanguageContext";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const contactFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.string()
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export function Contact() {
  const { t, language } = useLanguage()
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function handleSubmitContact(data: ContactFormSchema) {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      )
      alert('Email enviado com sucesso!')
      form.reset()
    } catch (error: EmailJSResponseStatus | unknown | any) {
      alert(`Erro ao enviar email: ${error.text}`)
    }
  }
  

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
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.description')}
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
                {t('contact.sendTransmission')}
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitContact)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">

                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('contact.name')}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t('contact.namePlaceholder')}
                              className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('contact.email')}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t('contact.emailPlaceholder')}
                              className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">{t('contact.subject')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.subjectPlaceholder')}
                            className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">{t('contact.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('contact.messagePlaceholder')}
                            rows={6}
                            className="bg-[var(--dark-secondary)]/50 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] text-white placeholder-gray-500 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-300 group cursor-pointer"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {t('contact.sendMessage')}
                  </Button>
                </form>
              </Form>
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
                {t('contact.protocols')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label.en}
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
                      <p className="text-gray-400 text-sm">{language === 'en' ? info.label.en : info.label.pt}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t('contact.socialNetworks')}
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
                {t('contact.currentStatus')}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-green)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-green)]/20 text-[var(--neon-green)] border-[var(--neon-green)]">
                    {t('contact.status.available')}
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-cyan)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] border-[var(--neon-cyan)]">
                    {t('contact.status.remote')}
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--neon-pink)] rounded-full animate-pulse"></div>
                  <Badge className="bg-[var(--neon-pink)]/20 text-[var(--neon-pink)] border-[var(--neon-pink)]">
                    {t('contact.status.response')}
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