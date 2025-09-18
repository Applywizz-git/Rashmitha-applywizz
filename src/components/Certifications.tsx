import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20   relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data science, machine learning, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group glass rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Flip Card Effect */}
              <div className="relative">
                {/* Front Face */}
                <motion.div
                  className="space-y-4"
                  whileHover={{ rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    
                    <div className="flex items-center justify-center text-muted-foreground text-sm">
                      <span className="font-medium text-primary">{cert.org}</span>
                    </div>

                    <div className="flex items-center justify-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>

                    {cert.credentialId && (
                      <div className="text-xs text-muted-foreground font-mono">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  {cert.verifyUrl && (
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full mt-4 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify Certificate
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Data Science', count: 3 },
              { name: 'Machine Learning', count: 2 },
              { name: 'Cloud Computing', count: 1 },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 glass rounded-full border border-border/30 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-foreground font-medium mr-2">{badge.name}</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm font-bold">
                  {badge.count}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;