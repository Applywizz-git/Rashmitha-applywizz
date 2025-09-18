import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20   relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in data science with comprehensive training in machine learning, statistics, and data engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group glass rounded-xl p-6 lg:p-8 border border-border/30 hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-lg font-semibold text-primary mb-3">
                      {edu.school}
                    </div>
                    {(index === 0 || index === 1) && (

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.start} - {edu.end}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Achievements/Highlights */}
                  <div className="space-y-2">
                    {index === 0 && ( // Current MS program
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Coursework & Focus:</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Advanced Machine Learning',
                            'Data Mining',
                            'Statistical Analysis',
                            'Big Data Analytics',
                            'Deep Learning',
                            'Database Systems'
                          ].map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 1 && ( // BS program
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Academic Highlights:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>Completed comprehensive data science curriculum with focus on practical applications</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>Published research on machine learning applications in agriculture and astronomy</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>Active participant in hackathons and data science competitions</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 2 && ( // BS program
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Publication Highlight :</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>Published research utilizing CNN and Random Forest on SDSS astronomical datasets for improved classification. </span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 3 && ( // BS program
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Publication Highlights:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span> Integrated machine learning algorithms with sensor data for precision farming, contributing to smarter agriculture practices. </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                < div className="flex-shrink-0" >
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0
                    ? 'bg-success/20 text-success border border-success/30'
                    : 'bg-primary/20 text-primary border border-primary/30'
                    }`}>
                    {index === 0 ? 'In Progress' : 'Completed'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Years of Study', value: '6+' },
            { label: 'GPA Average', value: '3.7' },
            { label: 'Research Papers', value: '2' },
            { label: 'Projects', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 glass rounded-lg border border-border/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  );
};

export default Education;