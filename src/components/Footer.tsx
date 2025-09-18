import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Heart } from 'lucide-react';
import { contact, personalInfo } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${contact.email}`,
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: Phone,
      href: `tel:${contact.phone}`,
      label: 'Phone',
      color: 'hover:text-green-400'
    },
    {
      icon: Linkedin,
      href: contact.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-xl font-bold text-primary-foreground shadow-glow">
                RP
              </div>
              <div className="ml-3">
                <div className="text-lg font-display font-bold text-foreground">
                  {personalInfo.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  Data Science Professional
                </div>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming data into actionable insights through machine learning, 
              analytics, and innovative problem-solving approaches.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      const headerHeight = 80;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm text-muted-foreground ${link.color} transition-all duration-200 group`}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.a
              href={personalInfo.resumeUrl}
              download="Rashmitha_Pagadala_Resume.pdf"
              className="inline-flex items-center mt-4 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center text-sm text-muted-foreground">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <motion.div
              className="mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-400 fill-current" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>

          <div className="text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;