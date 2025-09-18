import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { projects } from '@/data/portfolio';

// Import project images
import customerAnalysisImg from '@/assets/project-customer-analysis.jpg';
import cropRecommendationImg from '@/assets/project-crop-recommendation.jpg';
import billingAutomationImg from '@/assets/project-billing-automation.jpg';
import starClassificationImg from '@/assets/project-star-classification.jpg';
import cyberbullyingDetectionImg from '@/assets/project-cyberbullying-detection.jpg';
import nycAirbnbImg from '@/assets/project-nyc-airbnb.jpg';
import GVR from '@/assets/GENDER-VOICE-RECOGNITION.png';
import MLBCR from '@/assets/MACHINE-LEARNING-BASED-CROP-RECOMMENDATION-SYSTEM.png';
import MLBC3 from '@/assets/3.png';
import MLBC4 from '@/assets/4.png';
import MLBC5 from '@/assets/5.png';
import MLBC6 from '@/assets/6.png';
import MLBC7 from '@/assets/7.png';
import MLBC9 from '@/assets/9.png';
import MLBC10 from '@/assets/10.png';
import MLBC11 from '@/assets/11.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filters = ['All', 'Academic',  'Hackathon', 'Hobby'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : selectedFilter === 'Featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.type.includes(selectedFilter));

  return (
    <section id="projects" className="py-20   relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and software development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-swiper"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  // Map project titles to their images
  const getProjectImage = (title: string) => {
    switch (title) {
      case "Customer Purchase Behavior Analysis":
        return customerAnalysisImg;
      case "Crop Recommendation System (ML Based)":
        return cropRecommendationImg;
      case "Billing & Logistics Data Automation":
        return billingAutomationImg;
      case "Classification of Stars and Galaxies using ML":
        return starClassificationImg;
      case "Detection of Cyberbullying on Social Media":
        return cyberbullyingDetectionImg;
      case "Inside the City that Never Sleeps: EDA of NYC Airbnbs":
        return nycAirbnbImg;
      case "Gender Voice Recognition":
        return GVR;
      case "Machine Learning Based Crop Recommendation System":
        return MLBCR;
      case "Inside the City that Never Sleeps: NYC Airbnb EDA":
        return MLBC3;
      case "Graph Neural Network Based Intrusion Detection":
        return MLBC4;
      case "Career Assistant Dashboard":
        return MLBC5;
      case "Sentiment Analysis on Twitter Dataset":
        return MLBC6;
      case "Automated News Category Classification":
        return MLBC7;
      case "Earth Blossom E-commerce Website":
        return MLBC9;
      case "Carnatic Music Ear Training and Feedback":
        return MLBC10;
      case "Credit Card Spam Detection":
        return MLBC11;
      default:
        return null;
    }
  };

  const projectImage = getProjectImage(project.title);

  return (
    <motion.div
      className="group glass rounded-xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {projectImage ? (
          <>
            <img
              src={projectImage}
              alt={project.alt || project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/30 rounded-lg flex items-center justify-center text-2xl">
                  {project.type.includes('Academic') ? '🎓' :
                   project.type === 'Hackathon' ? '🏆' :
                   project.type === 'Hobby' ? '🛠️' : '💼'}
                </div>
                <p className="text-sm font-medium">{project.type}</p>
              </div>
            </div>
          </>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          {/* Project Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {project.dateText}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {project.team}
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-glow transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
          
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground rounded-lg text-sm font-medium transition-all duration-300"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;