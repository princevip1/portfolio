"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CreditCard,
  Globe,
  Layers,
  Mail,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Web App Development",
    description:
      "End-to-end development of modern web applications with React, Next.js, and Node.js — from concept to deployment.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Layers size={24} />,
    title: "SaaS & Subscription Systems",
    description:
      "Custom SaaS platforms with multi-tenant architecture, subscription billing, and user management.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Payment Gateway Integration",
    description:
      "Seamless integration of Stripe, PayPal, and local payment gateways with secure transaction handling.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Globe size={24} />,
    title: "Custom API Development",
    description:
      "RESTful and GraphQL API design and development with authentication, rate limiting, and documentation.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Zap size={24} />,
    title: "Real-Time Applications",
    description:
      "WebSocket-powered apps for live chat, video conferencing, notifications, and collaborative tools.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Mail size={24} />,
    title: "Email System & SMTP Architecture",
    description:
      "Bulk email validation, SMTP server setup, transactional email systems, and deliverability optimization.",
    gradient: "from-blue-600 to-indigo-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
            Services
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            What I Can Do{" "}
            <span className="gradient-text">For You</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From idea to deployment — comprehensive development services
            tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.06] transition-opacity duration-500`}
              />

              <div className="relative">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
