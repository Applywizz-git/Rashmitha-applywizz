export const personalInfo = {
  name: "Rashmitha Pagadala",
  role: "Data Science & Machine Learning Professional",
  location: "Jersey City, NJ",
  email: "rashmithapagadala34@gmail.com",
  phone: "+1 (626) 313-8262",
  linkedin: "https://www.linkedin.com/in/rashmitha-pagadala-11a85634b",
  github: null,
  resumeUrl: "/resume.pdf",
  availability: "Seeking Data Science & ML Opportunities",
};

export const about = {
  paragraphs: [
    "Results-driven Data Science and Machine Learning professional with extensive experience in developing predictive models, building scalable data pipelines, and delivering data-driven insights to solve complex business challenges. Proficient in leveraging Python, SQL, PySpark, and machine learning frameworks like TensorFlow, Scikit-learn, and XGBoost to build end-to-end solutions for data analytics and forecasting.",
    "Skilled in designing and deploying ETL pipelines, automating data workflows with tools such as Apache Airflow, AWS, and Google Cloud Platform, ensuring seamless data integration and analysis. Adept at using Power BI, Tableau, and other visualization tools to transform complex data into actionable insights for decision-making."
  ],
  counters: [
    { label: "Projects Delivered", value: 15 },
    { label: "Years Experience", value: 2 },
    { label: "Client Satisfaction", value: "100%" },
  ],
  highlights: [
    { title: "Data Engineering", text: "ETL pipelines with Apache Airflow, AWS, Google Cloud" },
    { title: "Machine Learning", text: "TensorFlow, Scikit-learn, XGBoost, PyTorch" },
    { title: "Data Visualization", text: "Power BI, Tableau, Plotly Dash" },
    { title: "Cloud Platforms", text: "AWS, Google Cloud, Azure expertise" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {

    "company": "Montclair State University",

    "role": "Teaching Assistant - Computer Science",

    "location": "Montclair, NJ",

    "startDate": "Jan 17, 2025",

    "endDate": "May 02, 2025",

    "highlights": [

      "Assisted in delivering lectures on AI, ML, and full-stack development to undergraduate students, fostering a deep understanding of core concepts",

      "Developed course materials, assignments, and projects that enabled students to build practical applications using AI/ML algorithms and full-stack technologies",

      "Provided one-on-one guidance and mentoring to students, improving their coding skills, problem-solving abilities, and project development techniques",

      "Collaborated with faculty to design an interactive learning experience, resulting in an increase in student engagement and project completion rates"

    ],

    "technologies": ["Python", "AI", "Machine Learning", "Full-stack Development", "JavaScript", "Django", "Keras", "OpenCV", "NLTK", "Flask", "Django", "Keras", "OpenCV"]

  },
  {
    company: "National Remote Sensing Centre",
    role: "Project Intern",
    location: "Hyderabad, India",
    startDate: "Aug 2023",
    endDate: "Feb 2024",
    highlights: [
      "Developed a Flask-based geospatial imagery platform utilizing REST APIs, streamlining access for 500+ researchers to real-time satellite data, which resulted in a 70% improvement in data retrieval speed",
      "Leveraged NumPy and OpenCV, optimized image preprocessing workflows, reducing spatial alignment time by 50% for multi-band satellite imagery",
      "Engineered a cost-effective, serverless architecture with AWS S3, Lambda, and API Gateway, delivering scalable access to over 2 TB of geo-tagged satellite data",
      "Revamped data ingestion pipelines with Celery and Redis, enabling asynchronous processing, which decreased data delivery delays by 40%"
    ],
    technologies: ["Python", "Flask", "OpenCV", "AWS S3", "Lambda", "API Gateway", "Celery", "Redis", "NumPy"]
  },
  {
    company: "BDL India",
    role: "Project Intern",
    location: "Hyderabad, India",
    startDate: "Apr 2023",
    endDate: "Jul 2023",
    highlights: [
      "Developed a real-time object detection system for missile trajectory tracking using YOLOv5 and OpenCV, which improved simulation review efficiency by 50%",
      "Built a Kafka-Python alert system that identified real-time trajectory anomalies, cutting response delays by 40%",
      "Created Plotly Dash dashboards to visualize missile trajectory data, including bounding boxes, prediction scores, and detection metrics"
    ],
    technologies: ["Python", "YOLOv5", "OpenCV", "Kafka", "Plotly Dash", "Real-time Processing"]
  }
];

export type Project = {
  title: string;
  type: "Academic Major" | "Academic Mini" | "Academic" | "Hackathon" | "Personal" | "Hobby";
  team: "Solo" | "Team";
  dateText: string;
  featured?: boolean;
  summary: string;
  tech: string[];
  previewUrl?: string | null;
  codeUrl?: string | null;
  image?: string;
  alt?: string;
  notes?: string;
};

export const projects: Project[] = [

  {

    title: "Gender Voice Recognition",

    type: "Academic",

    team: "Team",

    dateText: "B.Tech",

    summary: "Built a machine learning model to classify gender based on voice pitch and acoustic features.",

    tech: ["Python", "Librosa", "Scikit-learn"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/GENDER-VOICE-RECOGNITION.png",

    alt: "Waveform and spectrogram visualization for gender classification",

    notes: "Explored signal processing techniques to preprocess audio for higher classification accuracy."

  },

  {

    title: "Machine Learning Based Crop Recommendation System",

    type: "Academic Major",

    team: "Team",

    dateText: "B.Tech",

    summary: "Developed a recommendation system suggesting crops based on soil, rainfall, and climate data.",

    tech: ["Python", "Random Forest", "XGBoost", "Scikit-learn"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-crop-recommendation.jpg",

    alt: "Crop recommendation interface with soil and climate parameters",

    notes: "Improved accuracy by feature engineering nutrient ratios and seasonal indicators."

  },

  {

    title: "Inside the City that Never Sleeps: NYC Airbnb EDA",

    type: "Academic",

    team: "Solo",

    dateText: "Master’s",

    summary: "Performed exploratory data analysis on Airbnb listings to study pricing, availability, and neighborhood dynamics.",

    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Tableau"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-nyc-airbnb.jpg",

    alt: "NYC Airbnb pricing heatmap and neighborhood analysis",

    notes: "Generated clear visual narratives and insights about urban tourism."

  },

  {

    title: "Graph Neural Network Based Intrusion Detection",

    type: "Academic",

    team: "Solo",

    dateText: "Master’s",

    summary: "Applied graph neural networks to detect lateral movement attacks in network intrusion datasets.",

    tech: ["Python", "PyTorch Geometric", "Graph Neural Networks"],

    previewUrl: null,

    codeUrl: "https://github.com/rashmithapagadala/GNN_IDS",

    image: "/src/assets/project-gnn-ids.jpg",

    alt: "Graph-based intrusion detection visualization",

    notes: "Explored GNN models for cybersecurity applications, improving detection of stealthy attacks."

  },

  {

    title: "Career Assistant Dashboard",

    type: "Hobby",

    team: "Solo",

    dateText: "Master’s Summer Break",

    summary: "Designed a React dashboard to track career applications, tasks, and job preparation progress.",

    tech: ["React", "Supabase", "Tailwind CSS", "Node.js"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-career-dashboard.jpg",

    alt: "Career assistant dashboard UI",

    notes: "Built for personal use to streamline application tracking during job hunt."

  },

  {

    title: "Sentiment Analysis on Twitter Dataset",

    type: "Personal",

    team: "Solo",

    dateText: "B.Tech",

    summary: "Analyzed tweets to classify sentiment polarity (positive, negative, neutral) using NLP models.",

    tech: ["Python", "NLTK", "Scikit-learn"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-twitter-sentiment.jpg",

    alt: "Twitter sentiment classification chart",

    notes: "Fun side project to explore text preprocessing and classification pipelines."

  },

  {

    title: "Automated News Category Classification",

    type: "Academic",

    team: "Team",

    dateText: "Data Mining Project",

    summary: "Built a text classification system to automatically categorize news articles by topic.",

    tech: ["Python", "Naive Bayes", "TF-IDF", "Scikit-learn"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-news-classification.jpg",

    alt: "Automated news category classification dashboard",

    notes: "Improved classification accuracy with advanced NLP feature extraction."

  },

  {

    title: "Detection of Cyberbullying on Social Media",

    type: "Hackathon",

    team: "Team",

    dateText: "B.Tech",

    summary: "Built an NLP-based system to detect harmful and bullying content on social media platforms.",

    tech: ["Python", "NLTK", "Scikit-learn", "NLP"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-cyberbullying.jpg",

    alt: "Cyberbullying detection text classification",

    notes: "Hackathon project focusing on responsible AI and online safety."

  },

  {

    title: "Earth Blossom E-commerce Website",

    type: "Academic",

    team: "Team",

    dateText: "Master’s",

    summary: "Developed an e-commerce site for plant and gardening products with integrated database design.",

    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-earth-blossom.jpg",

    alt: "E-commerce website interface",

    notes: "Focused on database schema design and transaction workflows."

  },

  {

    title: "Carnatic Music Ear Training and Feedback",

    type: "Personal",

    team: "Solo",

    dateText: "Ongoing",

    summary: "Designing a data engineering pipeline to train and provide feedback for Carnatic music practice.",

    tech: ["Python", "Audio Processing", "Deep Learning"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-carnatic-music.jpg",

    alt: "Music training feedback interface",

    notes: "Concept stage project exploring the fusion of AI with traditional music learning."

  },

  {

    title: "Credit Card Spam Detection",

    type: "Academic",

    team: "Team",

    dateText: "B.Tech",

    summary: "Built a fraud detection system using sampling techniques to balance imbalanced datasets.",

    tech: ["Python", "SMOTE", "Scikit-learn", "Logistic Regression"],

    previewUrl: null,

    codeUrl: null,

    image: "/src/assets/project-creditcard.jpg",

    alt: "Credit card fraud detection dashboard",

    notes: "Applied advanced resampling techniques to handle class imbalance and improve detection."

  }

];

export const skills = {
  categories: [
    {
      title: "Programming & Scripting",
      items: ["Python ", "SQL ", " R ", "Java", "C++", "Bash", "JavaScript", "HTML", "CSS", "TypeScript"]
    },
    {
      title: "Data Engineering",
      items: ["PySpark", "Apache Spark", "Apache Airflow", "AWS", "Google Cloud", "Talend", "Apache NiFi", "Kafka", "Flink", "ETL/ELT"]
    },
    {
      title: "Machine Learning & AI",
      items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "LightGBM", "CatBoost", "Transformers", "BERT", "OpenCV"]
    },
    {
      title: "Cloud Platforms & DevOps",
      items: ["AWS (S3, EC2, Lambda)", "Google Cloud Platform", "Azure (ADF, Synapse)", "Docker", "Kubernetes", "Git", "GitHub Actions", "Jenkins"]
    },
    {
      title: "Databases & Warehousing",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "DynamoDB", "Snowflake", "BigQuery", "Redshift", "SQL Server"]
    },
    {
      title: "Data Analysis & Tools",
      items: ["Pandas", "NumPy", "SciPy", "StatsModels", "Jupyter", "Google Colab", "Power BI", "Tableau", "Looker Studio", "Plotly", "Dash", "Streamlit"]
    }
  ],
  top: [
    { name: "Python", level: 0.95 },
    { name: "Data Engineering", level: 0.8 },
    { name: "SQL", level: 0.9 },
    { name: "Machine Learning", level: 0.85 },
    { name: "Cloud Platforms", level: 0.75 },
  ],
};

export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    org: "Coursera",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: "IBM Machine Learning with Python",
    org: "Coursera",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: "Data Engineering Fundamentals",
    org: "LinkedIn Learning",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: "Deep Learning Specialization",
    org: "Coursera",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: "Data Science for Business Leaders",
    org: "DataCamp",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: "Python for Data Engineering",
    org: "IBM SkillsBuild",
    date: "2024",
    credentialId: null,
    verifyUrl: null,
  },
];

export const education = [
  {
    school: "Montclair State University",
    degree: "Master of Science in Data Science",
    location: "Montclair, NJ",
    start: "Sep 2024",
    end: "May 2026",
    gpa: "3.9/4.0",
  },
  {
    school: "CMR Engineering College, JNTUH",
    degree: "Bachelor of Science in Data Science",
    location: "Hyderabad, India",
    start: "Jun 2020",
    end: "May 2024",
    gpa: "3.5/4.0",
  },
  {
    school: "PUBLICATION",
    degree: " Classification of Stars and Galaxies using ML",
  },
  {
    school: "PUBLICATION",
    degree: " Classification of Stars and Galaxies using ML",
    start: "Jun 2020",
    end: "May 2024",
    gpa: "3.5/4.0",
  },
];

export const publications = [
  {
    title: "Classification of Stars and Galaxies using ML",
    summary: "Published research utilizing CNN and Random Forest on SDSS astronomical datasets for improved classification.",
    link: null,
    year: "2023",
  },
  {
    title: "IoT-based Automated Agriculture System",
    summary: "Integrated machine learning algorithms with sensor data for precision farming, contributing to smarter agriculture practices.",
    link: null,
    year: "2023",
  },
];

export const contact = {
  email: "rashmithapagadala34@gmail.com",
  phone: "+1 (626) 313-8262",
  linkedin: "https://www.linkedin.com/in/rashmitha-pagadala-11a85634b",
  github: null,
  twitter: null,
  formEndpoint: "/api/contact",
};

export const theme = {
  colors: {
    base: {
      bg: "#0B0F19",
      card: "#111827",
      text: "#E5E7EB",
      muted: "#94A3B8",
      border: "#1F2937",
    },
    accent: {
      primary: "#14B8A6",
      secondary: "#7C3AED",
      info: "#3B82F6",
      success: "#22C55E",
      warn: "#F59E0B",
      danger: "#EF4444",
    },
  },
};