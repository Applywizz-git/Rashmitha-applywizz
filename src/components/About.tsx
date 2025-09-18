import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { about } from '@/data/portfolio';

const AnimatedCounter = ({ end, duration = 2 }: { end: number | string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (typeof end === 'string') {
    return <span ref={ref}>{end}</span>;
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration }}
    >
      {end}
    </motion.span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20   relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="p-4 glass rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-4">
              {about.counters.map((counter, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 glass rounded-xl border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={counter.value} />
                    {typeof counter.value === 'number' && counter.label.includes('Projects') ? '+' : ''}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {counter.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">Core Competencies</h3>
              
              {[
                { skill: 'Python & Data Science', level: 95 },
                { skill: 'Data Engineering', level: 80 },
                { skill: 'Machine Learning', level: 85 },
                { skill: 'Cloud Platforms', level: 75 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;