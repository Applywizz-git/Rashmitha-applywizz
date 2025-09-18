import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Initialize AOS if needed
    if (typeof window !== 'undefined') {
      // AOS initialization would go here
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;