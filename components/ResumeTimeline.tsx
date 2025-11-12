import { FaBriefcase, FaGraduationCap, FaDownload } from "react-icons/fa";

const ResumeTimeline = () => {
  const education = [
    {
      degree: "BEng Electrical and Electronic Engineering",
      institution: "University of Johannesburg",
      period: "2017 - 2020",
      type: "education",
    },
    {
      degree: "BSc Information Technology",
      institution: "University of Johannesburg",
      period: "2017 - 2020",
      type: "education",
    },
  ];

  const experience = [
    {
      title: "Senior AI Engineer",
      company: "Betway Africa",
      location: "Johannesburg",
      period: "AUG 2025 - PRESENT",
      responsibilities: [
        "Led development of AML, Fraud and Responsible Gambling ML solutions using unsupervised learning (K-Means, Isolation Forest, Gaussian Mixture models)",
        "Built RAG system with real-time updates via SharePoint/OneDrive webhooks and Azure Search Service",
        "Developed OCR-powered Expense Tracking System using Azure Document Intelligence",
        "Worked with Microsoft Fabric, Python, NextJS, Azure DevOps, and Docker",
      ],
      technologies: ["Python", "Azure", "Microsoft Fabric", "NextJS", "Machine Learning", "RAG", "OCR"],
    },
    {
      title: "Software Engineer",
      company: "Entelect Software - Osiris Trading (Betway Africa)",
      location: "Johannesburg",
      period: "NOV 2023 - JUL 2025",
      responsibilities: [
        "Automated Sox Audit process using Azure Logic Apps and C# .NET Azure Functions",
        "Created Infrastructure as Code using ARM templates for multi-environment deployment",
        "Optimized T-SQL stored procedures improving execution efficiency",
        "Built ETL processes with Microsoft Fabric Data pipelines and PySpark",
        "Created Power BI reports with dimensional modeling (star schema)",
        "Led delivery of sub-projects managing small teams",
      ],
      technologies: ["C# .NET", "Azure", "Microsoft Fabric", "T-SQL", "Power BI", "Python", "SSIS"],
    },
    {
      title: "DevOps Engineer",
      company: "Entelect Software - Standard Bank",
      location: "Johannesburg",
      period: "FEB 2023 - OCT 2023",
      responsibilities: [
        "Provisioned AWS cloud infrastructure using Terraform and Terragrunt",
        "Developed and deployed Helm charts to Kubernetes clusters",
        "Enhanced monitoring with Prometheus, Thanos, Grafana, and Alert Manager",
        "Managed Kubernetes clusters across Development, Test, and Production environments",
        "Provided production support and troubleshooting for developer teams",
        "Mentored junior engineers and facilitated agile ceremonies",
      ],
      technologies: ["AWS", "Terraform", "Kubernetes", "Helm", "Prometheus", "Grafana", "ArgoCD"],
    },
    {
      title: "Software Engineer",
      company: "Entelect Software - AlumniServ",
      location: "Johannesburg",
      period: "AUG 2022 - OCT 2022",
      responsibilities: [
        "Designed and implemented relational databases",
        "Developed and exposed RESTful APIs for front-end integration",
        "Worked with Confluent Kafka for event streaming",
        "Deployed solutions on Linux RHEL8 environment",
      ],
      technologies: ["C# .NET", "MSSQL", "Kafka", "Linux"],
    },
    {
      title: "Junior Cloud Engineer & Software Engineer",
      company: "Synthesis Software",
      location: "Johannesburg",
      period: "JAN 2021 - OCT 2022",
      responsibilities: [
        "Built and secured cloud architectures for financial services and retail clients using Terraform",
        "Automated infrastructure delivery with Terraform Cloud",
        "Developed APIs for TransUnion from requirements to production",
        "Managed PostgreSQL, Oracle SQL, Redis databases",
        "Configured Nginx for reverse proxy and load balancing",
      ],
      technologies: ["Terraform", "AWS", "C# .NET", "PostgreSQL", "Oracle SQL", "Redis", "Nginx", "Linux"],
    },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner (Foundational)", issuer: "Amazon Web Services" },
    { name: "AWS Solutions Architect (Associate)", issuer: "Amazon Web Services" },
    { name: "AWS Developer (Associate)", issuer: "Amazon Web Services" },
    { name: "Azure Fundamentals", issuer: "Microsoft" },
    { name: "Kubernetes Certified", issuer: "Microsoft" },
    { name: "Microsoft Fabric Data Engineer (Associate)", issuer: "Microsoft" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Resume
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A comprehensive timeline of my career journey
          </p>
          <a
            href="/CV_Tinashe_Makamure__Software_Engineer.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaDownload className="mr-2" />
            Download PDF Resume
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaGraduationCap className="text-3xl text-accent mr-3" />
            <h2 className="text-3xl font-bold text-primary">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <span className="text-accent font-semibold">{edu.period}</span>
                </div>
                <p className="text-gray-600 font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaBriefcase className="text-3xl text-accent mr-3" />
            <h2 className="text-3xl font-bold text-primary">Work Experience</h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 ml-6" />

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-0 top-6 w-4 h-4 bg-accent rounded-full ml-4 ring-4 ring-white" />

                  <div className="md:ml-16 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">
                          {job.company}
                        </p>
                        <p className="text-gray-600">{job.location}</p>
                      </div>
                      <span className="text-accent font-bold whitespace-nowrap mt-2 md:mt-0">
                        {job.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-gray-700">
                          <span className="text-accent mr-2 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-primary text-sm font-medium rounded-full border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-accent hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;
