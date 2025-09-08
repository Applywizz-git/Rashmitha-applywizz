import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 0.8
    }
  };

  const logoVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="text-center max-w-md mx-auto px-8">
            {/* Logo/Monogram */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-glow">
                RP
              </div>
            </motion.div>

            {/* Skill Icons */}
            <div className="flex justify-center space-x-4 mb-8">
              {['🔬', '🤖', '☁️'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {/* Loading Text */}
            <motion.h2
              className="text-2xl font-display font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Rashmitha Pagadala
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Data Science & Machine Learning Professional
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-1 mb-4">
              <motion.div
                className="h-1 bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Loading portfolio... {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;