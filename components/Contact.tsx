"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // For now, just show a success message
    // In production, you'd integrate with a backend API or service like Formspree
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Work Together
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Image */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
              <Image
                src="/images/footer-hero-gaze.png"
                alt="Contact"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h4>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-accent text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-primary mb-1">Email</h5>
                  <a
                    href="mailto:tmakamure32@gmail.com"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    tmakamure32@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-accent text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-primary mb-1">Location</h5>
                  <p className="text-gray-600">Johannesburg, Gauteng, South Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaLinkedin className="text-accent text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-primary mb-1">LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/tinashe-makamure-4b5445132/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaGithub className="text-accent text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-primary mb-1">GitHub</h5>
                  <a
                    href="https://github.com/tmakamure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
