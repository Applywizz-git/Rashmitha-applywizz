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
  type: "Academic Major" | "Academic Mini" | "Academic" | "Hackathon";
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
    title: "Customer Purchase Behavior Analysis",
    type: "Academic",
    team: "Solo",
    dateText: "Fall 2024",
    featured: true,
    summary: "Segmented customers using RFM-based analysis on SQL-sourced transaction data, applying K-Means clustering to identify customer cohorts, improving targeted marketing strategies to high-value segments.",
    tech: ["Python", "SQL", "K-Means", "RFM Analysis", "Power BI"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-customer-analysis.jpg",
    alt: "Customer segmentation dashboard with RFM analysis",
    notes: "Trained a Random Forest classifier to predict customer purchase probability, integrating results into Power BI dashboards for real-time insights, leading to more informed business decisions."
  },
  {
    title: "Crop Recommendation System (ML Based)",
    type: "Academic Major",
    team: "Team", 
    dateText: "2023-2024",
    featured: true,
    summary: "Developed a dual-model recommendation system using Random Forest and XGBoost to forecast the best crops for specific regions, utilizing data on soil, rainfall, and temperature to provide accurate recommendations.",
    tech: ["Python", "Random Forest", "XGBoost", "Scikit-learn", "Power BI"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-crop-recommendation.jpg",
    alt: "Crop recommendation interface with soil and weather parameters",
    notes: "Enhanced prediction accuracy by 20% through advanced feature engineering, incorporating soil nutrient ratios and microclimatic indicators, resulting in more precise crop predictions for farmers."
  },
  {
    title: "Billing & Logistics Data Automation",
    type: "Academic",
    team: "Team",
    dateText: "Fall 2024",
    summary: "Built an ETL pipeline using Apache Airflow, Python, and SQL to aggregate data from multiple departments and automate report generation, streamlining business operations and saving time for the finance and logistics teams.",
    tech: ["Apache Airflow", "Python", "SQL", "ETL", "Amazon Redshift"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-billing-automation.jpg",
    alt: "ETL pipeline workflow diagram",
    notes: "Centralized data into Amazon Redshift, standardizing schemas and applying data transformations to ensure improved accuracy in business reports and consistent data analysis for departments."
  },
  {
    title: "Classification of Stars and Galaxies using ML",
    type: "Academic",
    team: "Team",
    dateText: "2023",
    summary: "Published research utilizing CNN and Random Forest on SDSS astronomical datasets for improved classification.",
    tech: ["Python", "CNN", "Random Forest", "SDSS", "TensorFlow"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-star-classification.jpg",
    alt: "Astronomical classification visualization",
    notes: "IoT-based Automated Agriculture System - Integrated machine learning algorithms with sensor data for precision farming, contributing to smarter agriculture practices."
  },
  {
    title: "Detection of Cyberbullying on Social Media",
    type: "Hackathon",
    team: "Team",
    dateText: "2023",
    summary: "Supervised text classification to flag harmful content; emphasized precision/recall trade-offs.",
    tech: ["Python", "NLTK", "Scikit-learn", "NLP"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-cyberbullying-detection.jpg",
    alt: "Text classification dashboard for cyberbullying detection",
    notes: "Online safety and responsible AI moderation focus."
  },
  {
    title: "Inside the City that Never Sleeps: EDA of NYC Airbnbs",
    type: "Academic",
    team: "Solo",
    dateText: "Fall 2024",
    summary: "Explored NYC Airbnb pricing/availability drivers, neighborhood trends, and host activity; produced clear visual narratives.",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Tableau"],
    previewUrl: null,
    codeUrl: null,
    image: "/src/assets/project-nyc-airbnb.jpg",
    alt: "NYC Airbnb pricing heatmap and trend analysis",
    notes: "Curiosity about urban dynamics and pricing fairness."
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