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
  SiMicrosoftazure,
  SiCsharp,
  SiJavascript,
  SiPowerbi,
  SiPostgresql,
  SiMicrosoftfabric,
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
    { name: "AWS", icon: <FaAws size={40} />, color: "text-orange-500" },
    { name: "Azure", icon: <SiMicrosoftazure size={40} />, color: "text-blue-600" },
    { name: "C#", icon: <SiCsharp size={40} />, color: "text-purple-600" },
    { name: "JavaScript", icon: <SiJavascript size={40} />, color: "text-yellow-500" },
    { name: "Python", icon: <FaPython size={40} />, color: "text-blue-500" },
    { name: "React", icon: <FaReact size={40} />, color: "text-cyan-500" },
    { name: "Kubernetes", icon: <SiKubernetes size={40} />, color: "text-blue-600" },
    { name: "Docker", icon: <FaDocker size={40} />, color: "text-blue-400" },
    { name: "Terraform", icon: <SiTerraform size={40} />, color: "text-purple-500" },
    { name: "Power BI", icon: <SiPowerbi size={40} />, color: "text-yellow-600" },
    { name: "SQL", icon: <SiPostgresql size={40} />, color: "text-blue-700" },
    { name: "Microsoft Fabric", icon: <SiMicrosoftfabric size={40} />, color: "text-purple-700" },
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
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-12 border border-gray-100">
          <h4 className="text-3xl font-bold text-primary text-center mb-2">
            Core Technologies
          </h4>
          <p className="text-center text-gray-600 mb-12">
            Modern tools and platforms powering our solutions
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-20 h-20 flex items-center justify-center mb-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <div className={`${tech.color} transition-colors duration-300 group-hover:brightness-110`}>
                    {tech.icon}
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center group-hover:text-accent transition-colors duration-300 h-10 flex items-center">
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
