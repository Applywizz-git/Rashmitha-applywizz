import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { personalInfo } from '@/data/portfolio';

// Lazy load the 3D component
const HeroCanvas = lazy(() => import('./3d/HeroCanvas'));

const Hero = () => {
  const typewriterWords = [ 'Data Science', 'Python', 'Machine Learning', 'Cloud'];
  const currentWord = useTypewriter(typewriterWords, 100, 2000);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                {personalInfo.availability}
              </span>
            </motion.div>

            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">✋ Hi, I am {' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Rashmitha Pagadala
              </span>
            </p>
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building Scalable Solutions with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                {currentWord}
                <span className="animate-blink">|</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Data Science professional with expertise in developing and building scalable data pipelines, and delivering data-driven insights for complex business challenges.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-hero group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Rashmitha_Pagadala_Resume.pdf"
                className="btn-outline group"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Visual Section */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <img src="/profile-pic.jpg" alt="Profile Photo" />
                    <p className="text-lg font-medium">Rashmitha Pagadala</p>
                    <p className="text-sm">Data Science Professional</p>
                  </div>
                </div>

                {/* 3D Canvas Overlay */}
                {/* <div className="absolute inset-0 opacity-60">
                  <Suspense fallback={<div className="w-full h-full" />}>
                    <HeroCanvas />
                  </Suspense>
                </div> */}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 glass rounded-lg flex items-center justify-center text-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-lg flex items-center justify-center text-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
