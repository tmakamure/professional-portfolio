import { FaBrain, FaCloud, FaDatabase, FaChartLine, FaCogs, FaRobot, FaAws, FaMicrosoft } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "AML, Fraud & Responsible Gambling ML System",
      company: "Betway Africa",
      period: "2025",
      icon: <FaBrain className="text-4xl" />,
      description:
        "Implemented comprehensive machine learning solutions for detecting fraud, money laundering, and gambling abuse patterns using unsupervised learning algorithms.",
      achievements: [
        "Utilized K-Means clustering, Isolation Forest, and Gaussian Mixture models for risk categorization",
        "Built web portal for business users to review and tag high-risk cases",
        "Collaborated with data engineering to develop new features for model training",
        "Successfully transitioned to supervised learning with generated ground truth data",
      ],
      technologies: ["Python", "Microsoft Fabric", "Machine Learning", "NextJS", "Azure DevOps"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "RAG System with Real-Time Knowledge Updates",
      company: "Betway Africa",
      period: "2025",
      icon: <FaRobot className="text-4xl" />,
      description:
        "Developed a Retrieval Augmented Generation interface for business knowledge interaction with automatic updates from multiple sources.",
      achievements: [
        "Integrated SharePoint, OneDrive, and local disk as knowledge sources",
        "Implemented webhooks for real-time vector store updates",
        "Enabled near real-time access to latest business information",
        "Built chatbot-like interface for intuitive knowledge access",
      ],
      technologies: ["Azure Search", "Microsoft Graph API", "Python", "NextJS", "Docker"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "OCR-Powered Expense Tracking System",
      company: "Betway Africa",
      period: "2025",
      icon: <FaChartLine className="text-4xl" />,
      description:
        "Built an in-house expense tracking solution using AI-powered OCR to automate expense capture and processing.",
      achievements: [
        "Trained Azure Document Intelligence model for receipt field extraction",
        "Developed camera integration for real-time receipt capture",
        "Implemented data persistence in Fabric Lakehouse with blob storage",
        "Created Power BI dashboard for expense analytics",
      ],
      technologies: ["Azure Document Intelligence", "Python FastAPI", "NextJS", "Microsoft Fabric", "Power BI"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Sox Audit Automation Platform",
      company: "Osiris Trading - Betway Africa",
      period: "2023-2025",
      icon: <FaCogs className="text-4xl" />,
      description:
        "Automated the Sox Audit process for financial compliance using serverless Azure architecture.",
      achievements: [
        "Built orchestration with Azure Logic Apps and C# Azure Functions",
        "Connected on-premises SQL via On-Premises Gateway",
        "Created Infrastructure as Code using ARM templates",
        "Enabled rapid deployment across multiple company environments",
      ],
      technologies: ["Azure Logic Apps", "C# .NET", "ARM Templates", "T-SQL"],
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Microsoft Fabric ETL Pipelines",
      company: "Osiris Trading - Betway Africa",
      period: "2023-2025",
      icon: <FaDatabase className="text-4xl" />,
      description:
        "Migrated on-premises ETL processes to cloud using Microsoft Fabric with end-to-end data analytics.",
      achievements: [
        "Integrated third-party REST APIs for data ingestion",
        "Built PySpark notebooks for data transformation and aggregation",
        "Implemented dimensional modeling with star schema",
        "Delivered comprehensive Power BI reports for business insights",
      ],
      technologies: ["Microsoft Fabric", "Python", "PySpark", "Power BI", "T-SQL"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Standard Bank DevOps Platform",
      company: "Standard Bank",
      period: "2023",
      icon: <SiKubernetes className="text-4xl" />,
      description:
        "Managed and enhanced the DevOps platform for business banking teams with full AWS and Kubernetes infrastructure.",
      achievements: [
        "Provisioned AWS infrastructure using Terraform and Terragrunt",
        "Developed and maintained Helm charts for Kubernetes deployments",
        "Implemented comprehensive monitoring with Prometheus, Thanos, and Grafana",
        "Provided production support and mentored junior engineers",
      ],
      technologies: ["AWS", "Terraform", "Kubernetes", "Helm", "Prometheus", "Grafana", "ArgoCD"],
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      title: "Cloud Architecture for Financial Services",
      company: "Synthesis Software",
      period: "2021-2022",
      icon: <FaAws className="text-4xl" />,
      description:
        "Built secure cloud architectures for financial services clients using Infrastructure as Code.",
      achievements: [
        "Designed and implemented AWS architectures for multiple clients",
        "Automated infrastructure delivery with Terraform Cloud",
        "Ensured security compliance for financial services sector",
        "Managed infrastructure across development, staging, and production",
      ],
      technologies: ["Terraform", "AWS", "Terraform Cloud"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "TransUnion API Development",
      company: "Synthesis Software",
      period: "2021",
      icon: <FaCloud className="text-4xl" />,
      description:
        "Full-cycle API development for TransUnion from requirements gathering to production deployment.",
      achievements: [
        "Sole responsibility for multiple APIs from design to production",
        "Implemented secure inter-service communication with TLS certificates",
        "Deployed on Linux RHEL8 with Nginx load balancing",
        "Managed PostgreSQL, Oracle SQL, and Redis databases",
      ],
      technologies: ["C# .NET", "PostgreSQL", "Oracle SQL", "Redis", "Nginx", "Linux"],
      color: "from-teal-500/20 to-green-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects spanning AI/ML, cloud architecture,
            data engineering, and enterprise software development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.color} bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200`}
            >
              {/* Icon and Title */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-accent">{project.icon}</div>
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 font-semibold mb-4">{project.company}</p>

              <p className="text-gray-700 mb-6">{project.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-bold text-primary mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-bold text-primary mb-3 text-sm">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-primary text-xs font-medium rounded-full border border-accent/30 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary/90 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Let's discuss how I can help bring your next project to life
          </p>
          <a
            href="/#contact"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
