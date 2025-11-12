import {
  FaAws,
  FaMicrosoft,
  FaPython,
  FaReact,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiTensorflow,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI Engineering & Machine Learning",
      icon: <SiTensorflow className="text-5xl text-accent" />,
      skills: [
        "Machine Learning Model Development",
        "Unsupervised & Supervised Learning",
        "RAG (Retrieval Augmented Generation)",
        "OCR & Document Intelligence",
        "AI Product Solutioning",
        "Feature Engineering",
        "Model Training & Optimization",
      ],
      color: "from-orange-500/10 to-red-500/10",
    },
    {
      title: "Cloud Architecture (AWS & Azure)",
      icon: <FaAws className="text-5xl text-accent" />,
      skills: [
        "AWS Solutions Architecture",
        "Azure Cloud Services",
        "Infrastructure as Code (Terraform, ARM)",
        "Cloud Security & IAM",
        "Serverless Architecture",
        "Azure Functions & Logic Apps",
        "Cloud Migration Strategies",
      ],
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Data Engineering & Analytics",
      icon: <FaDatabase className="text-5xl text-accent" />,
      skills: [
        "Microsoft Fabric Platform",
        "ETL Pipeline Development",
        "Data Warehousing (Star Schema)",
        "Power BI & Data Visualization",
        "SQL Server (T-SQL) Optimization",
        "Dimensional Modeling",
        "Big Data Processing (PySpark)",
      ],
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "Software Development",
      icon: <FaReact className="text-5xl text-accent" />,
      skills: [
        "C# .NET Development",
        "React & Next.js",
        "Python (FastAPI, Django)",
        "TypeScript & JavaScript",
        "RESTful API Design",
        "Microservices Architecture",
        "Full-Stack Development",
      ],
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "DevOps & Platform Engineering",
      icon: <SiKubernetes className="text-5xl text-accent" />,
      skills: [
        "Kubernetes & Helm Charts",
        "CI/CD Pipelines (Azure DevOps, ArgoCD)",
        "Docker & Containerization",
        "Infrastructure as Code",
        "Monitoring (Prometheus, Grafana)",
        "Log Management (Fluentbit)",
        "Production Support & Troubleshooting",
      ],
      color: "from-indigo-500/10 to-blue-500/10",
    },
    {
      title: "Leadership & Soft Skills",
      icon: <FaMicrosoft className="text-5xl text-accent" />,
      skills: [
        "Team Mentoring & Leadership",
        "Stakeholder Communication",
        "Agile Methodologies (Scrum, PI Planning)",
        "Technical Presentations",
        "Project Management",
        "Solutions Architecture",
        "Client Relationship Management",
      ],
      color: "from-yellow-500/10 to-orange-500/10",
    },
  ];

  const technologies = [
    { name: "AWS", icon: <FaAws size={30} /> },
    { name: "Azure", icon: <FaMicrosoft size={30} /> },
    { name: "Python", icon: <FaPython size={30} /> },
    { name: "C#", icon: <FaDatabase size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
    { name: "JavaScript", icon: <FaReact size={30} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={30} /> },
    { name: "Docker", icon: <FaDocker size={30} /> },
    { name: "Terraform", icon: <SiTerraform size={30} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Specializations
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning AI, cloud architecture, data engineering,
            and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="mb-4">{category.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-accent mr-2 mt-1">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h4 className="text-2xl font-bold text-primary text-center mb-8">
            Core Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="text-gray-600 group-hover:text-accent transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-600 mt-2 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-xl p-8 text-white">
          <h4 className="text-2xl font-bold text-center mb-6">
            Professional Certifications
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-accent/30">
              <div className="font-bold text-accent mb-2">AWS</div>
              <div className="text-sm">Cloud Practitioner (Foundational)</div>
              <div className="text-sm">Solutions Architect (Associate)</div>
              <div className="text-sm">Developer (Associate)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-accent/30">
              <div className="font-bold text-accent mb-2">Microsoft Azure</div>
              <div className="text-sm">Azure Fundamentals</div>
              <div className="text-sm">Kubernetes Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-accent/30">
              <div className="font-bold text-accent mb-2">Microsoft Fabric</div>
              <div className="text-sm">Data Engineer (Associate)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
