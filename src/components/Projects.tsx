"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "OTT Streaming API Platform",
    description:
      "A robust OTT streaming backend with subscription management, user role-based access, and secure authentication. Built for scalable content delivery.",
    features: [
      "Subscription system",
      "User roles & permissions",
      "Secure JWT authentication",
    ],
    tech: ["MongoDB", "Express.js", "TypeScript", "Node.js"],
    gradient: "from-blue-600 via-indigo-500 to-indigo-600",
  },
  {
    title: "Multivendor Ecommerce System",
    description:
      "Full-featured multivendor marketplace with individual vendor dashboards, product management, payment integration, and real-time order tracking.",
    features: [
      "Vendor product management",
      "Admin dashboard",
      "Payment integration",
      "Order system",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-indigo-600 via-blue-500 to-blue-600",
  },
  {
    title: "AI Image to Real-Time Video",
    description:
      "Conceptual AI-powered tool that transforms static images into real-time video streams with webcam motion tracking and virtual camera output.",
    features: [
      "AI image to video stream",
      "Webcam motion tracking",
      "Virtual camera output",
    ],
    tech: ["Python", "OpenCV", "WebRTC", "Node.js"],
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
  },
  {
    title: "Bulk Email Validation System",
    description:
      "High-performance email validation engine with regex checks, MX record verification, SMTP probing, and bulk queue processing with result export.",
    features: [
      "Regex + MX check + SMTP probe",
      "Queue system using Bull",
      "Result export",
    ],
    tech: ["Node.js", "Bull Queue", "Redis", "Express.js"],
    gradient: "from-indigo-600 via-violet-500 to-blue-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building complex,
            production-ready systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div className="p-8">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-gradient-to-br ${project.gradient} rounded-full flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer group/btn">
                  View Details
                  <ExternalLink
                    size={14}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
