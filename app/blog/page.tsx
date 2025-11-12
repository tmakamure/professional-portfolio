import { Metadata } from "next";
import { FaRocket } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog | Tinashe Makamure",
  description: "Technical blog posts about AI, Cloud, and Software Engineering",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights on AI, Cloud Architecture, and Software Engineering
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-yellow-300 rounded-full flex items-center justify-center">
                <FaRocket className="text-4xl text-primary" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">
              Coming Soon
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              I'm currently working on curating insightful content covering topics like:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border border-accent/20">
                <h3 className="font-bold text-primary mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  RAG systems, model training, and ML best practices
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-accent/20">
                <h3 className="font-bold text-primary mb-2">Cloud Architecture</h3>
                <p className="text-sm text-gray-600">
                  AWS, Azure, infrastructure as code, and DevOps
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-accent/20">
                <h3 className="font-bold text-primary mb-2">Data Engineering</h3>
                <p className="text-sm text-gray-600">
                  ETL pipelines, data warehousing, and analytics
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-accent/20">
                <h3 className="font-bold text-primary mb-2">Software Development</h3>
                <p className="text-sm text-gray-600">
                  Full-stack development, microservices, and architecture
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              This section will feature markdown-based blog posts with code snippets,
              technical deep-dives, and lessons learned from real-world projects.
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-primary font-semibold rounded-lg border border-accent/30">
              <span>Stay tuned for updates!</span>
            </div>
          </div>

          {/* Placeholder for future blog structure */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md border-l-4 border-accent">
            <h3 className="font-bold text-primary mb-2">For Future Implementation:</h3>
            <p className="text-gray-600 text-sm mb-2">
              The blog will support markdown rendering with syntax highlighting for code blocks.
              Posts will be stored as markdown files and dynamically loaded.
            </p>
            <p className="text-gray-600 text-sm">
              Technologies: react-markdown, remark-gfm for enhanced markdown support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
