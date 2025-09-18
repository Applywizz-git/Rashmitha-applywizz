import { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

// Lazy load 3D component
const SkillBadge3D = lazy(() => import('./3d/SkillBadge3D'));

const Skills = () => {
  const [focusedSkill, setFocusedSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20   relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, cloud platforms, and modern development technologies.
          </p>
        </motion.div>

        {/* Top Skills Progress */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.top.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-bold">{Math.round(skill.level * 100)}%</span>
                </div>
                
                {/* Circular Progress */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ 
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level) 
                      }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {Math.round(skill.level * 100)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setFocusedSkill(skill)}
                    onHoverEnd={() => setFocusedSkill(null)}
                    onFocus={() => setFocusedSkill(skill)}
                    onBlur={() => setFocusedSkill(null)}
                  >
                    {/* 3D Skill Badge for important skills */}
                    {skills.top.some(topSkill => topSkill.name.toLowerCase().includes(skill.toLowerCase())) ? (
                      <Suspense fallback={<SkillChipFallback skill={skill} focused={focusedSkill === skill} />}>
                        <SkillBadge3D skill={skill} focused={focusedSkill === skill} />
                      </Suspense>
                    ) : (
                      <SkillChip skill={skill} focused={focusedSkill === skill} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Regular skill chip component
const SkillChip = ({ skill, focused }: { skill: string; focused: boolean }) => (
  <motion.div
    className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
      focused
        ? 'bg-primary/20 border-primary text-primary shadow-glow'
        : 'glass border-border/30 hover:border-primary/50 text-foreground hover:text-primary'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-sm font-medium">{skill}</span>
  </motion.div>
);

// Fallback for 3D component
const SkillChipFallback = ({ skill, focused }: { skill: string; focused: boolean }) => (
  <div className={`p-3 rounded-lg border transition-all duration-300 ${
    focused
      ? 'bg-primary/20 border-primary text-primary'
      : 'glass border-border/30 text-foreground'
  }`}>
    <span className="text-sm font-medium">{skill}</span>
  </div>
);

export default Skills;