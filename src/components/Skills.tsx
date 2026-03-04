"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone size={20} />,
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-indigo-100 dark:border-indigo-500/20",
    badge: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-500/20",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native (Expo)",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-indigo-100 dark:border-indigo-500/20",
    badge: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-500/20",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "MongoDB (Mongoose)",
      "MySQL",
      "PostgreSQL",
      "REST API Development",
      "GraphQL",
    ],
  },
  {
    title: "Other Tools",
    icon: <Wrench size={20} />,
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-indigo-100 dark:border-indigo-500/20",
    badge: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-500/20",
    skills: [
      "Bull Queue",
      "SMTP Email Systems",
      "Payment Integration",
      "System Architecture",
      "Git & GitHub",
      "Linux (CentOS)",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-gray-50/80 dark:bg-gray-950/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
            Technical Skills
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend frameworks, backend
            systems, databases, and DevOps tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white text-lg shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
                    className={`${category.badge} px-3.5 py-1.5 rounded-lg text-sm font-medium border hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
