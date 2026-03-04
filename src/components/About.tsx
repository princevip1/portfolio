"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Server, Layers, Zap } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const features = [
  {
    icon: <Layers size={24} />,
    title: "SaaS Platforms",
    desc: "Subscription systems, multi-tenant architecture & automated billing",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Globe size={24} />,
    title: "Ecommerce",
    desc: "Multivendor systems with payment integration & order management",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Server size={24} />,
    title: "OTT Systems",
    desc: "Streaming platforms with DRM, subscriptions & user management",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Zap size={24} />,
    title: "Real-Time Apps",
    desc: "WebSocket, video conferencing, live collaboration & notifications",
    gradient: "from-blue-600 to-indigo-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – Feature Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-shadow duration-500"
              >
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
              About Me
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight mt-4">
              Crafting scalable
              <br />
              digital{" "}
              <span className="gradient-text">solutions</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Full-Stack Web Developer based in Bangladesh with a
                decade-long mindset in building modern, production-grade web
                applications. My expertise spans both frontend and backend,
                with a deep focus on scalable system architecture.
              </p>
              <p>
                I&apos;ve built SaaS platforms, multivendor ecommerce systems,
                OTT subscription platforms, payment integrations, and real-time
                video applications. I prefer{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Express.js
                </span>{" "}
                over Laravel for backend projects — its flexibility in the
                Node.js ecosystem is unmatched.
              </p>
              <p>
                Open to remote work globally — I bring clean architecture,
                well-documented code, and reliable delivery to every project.
              </p>
            </div>

            {/* Status badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 bg-green-50 dark:bg-green-500/10 px-4 py-2 rounded-full border border-green-100 dark:border-green-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Available for remote work
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-500/20">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                Based in Bangladesh
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
