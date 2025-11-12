import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/mid-hero.png"
              alt="Tinashe Makamure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Building Intelligent Solutions for the Future
              </h3>
            </div>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                An ageless, effulgent, and self-deprecating existence, presently exhibiting
                exceptional intrinsic prowess as a software engineer in the Southern region of
                Africa. Devoted to life-long learning and continual self-improvement, I consider
                myself to be one of the fastest developing and supremely dynamic young talents
                in the industry.
              </p>

              <p>
                My fields of interest include, without limiting thereto:{" "}
                <span className="font-semibold text-primary">
                  solutions architecture, software architecture and development, cloud computing,
                  machine learning and AI, big data, blockchain technologies, financial markets,
                  string theory, aliens, and a pinch of politics.
                </span>
              </p>

              <p>
                With a strong foundation in both{" "}
                <span className="font-semibold text-primary">
                  Electrical and Electronic Engineering
                </span>{" "}
                and{" "}
                <span className="font-semibold text-primary">
                  Information Technology
                </span>{" "}
                from the University of Johannesburg, I bring a unique blend of theoretical
                knowledge and practical expertise to every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">6+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
