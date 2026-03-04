"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Download } from "lucide-react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startCounting(); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startCounting]);

  return { count, ref };
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const years = useCountUp(5, 1500);
  const projects = useCountUp(200, 2000);
  const clients = useCountUp(100, 1800);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-500/20">
                <Sparkles size={14} />
                Available for Hire
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Prince
              <br />
              <span className="gradient-text">Mahmud</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-medium"
            >
              Full-Stack Developer | React, Next.js, Node.js &amp; System
              Architecture
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg text-base"
            >
              I build scalable web applications, SaaS platforms, OTT systems,
              payment integrations, and real-time applications using modern
              technologies.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-medium hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-xl font-medium hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} />
                Hire Me
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-14 flex gap-10"
            >
              {[
                { counter: years, suffix: "+", label: "Years Experience" },
                { counter: projects, suffix: "+", label: "Projects Done" },
                { counter: clients, suffix: "+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} ref={stat.counter.ref}>
                  <p className="text-3xl lg:text-4xl font-bold gradient-text">
                    {stat.counter.count}{stat.suffix}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Code Editor Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative gradient blobs */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-violet-500/15 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-violet-500/20 rounded-3xl blur-2xl" />

              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-200/80 dark:border-gray-800 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200/80 dark:border-gray-700/50">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 dark:text-gray-500 font-mono">
                    developer.ts
                  </span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="space-y-1.5">
                    <p className="text-gray-400 dark:text-gray-600 text-xs">
                      // Prince Mahmud — portfolio
                    </p>
                    <p>
                      <span className="text-purple-600 dark:text-purple-400">
                        interface
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        Developer
                      </span>{" "}
                      <span className="text-gray-800 dark:text-gray-300">
                        {"{"}
                      </span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        name
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600 dark:text-green-400">
                        string
                      </span>
                      <span className="text-gray-500">;</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        role
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600 dark:text-green-400">
                        string
                      </span>
                      <span className="text-gray-500">;</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        stack
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600 dark:text-green-400">
                        string[]
                      </span>
                      <span className="text-gray-500">;</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        available
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600 dark:text-green-400">
                        boolean
                      </span>
                      <span className="text-gray-500">;</span>
                    </p>
                    <p className="text-gray-800 dark:text-gray-300">{"}"}</p>
                    <p className="mt-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        const
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        me
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        Developer
                      </span>{" "}
                      <span className="text-gray-500">=</span>{" "}
                      <span className="text-gray-800 dark:text-gray-300">
                        {"{"}
                      </span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        name
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-400">
                        &quot;Prince Mahmud&quot;
                      </span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        role
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-400">
                        &quot;Full-Stack Dev&quot;
                      </span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        stack
                      </span>
                      <span className="text-gray-500">: [</span>
                      <span className="text-amber-600 dark:text-amber-400">
                        &quot;React&quot;
                      </span>
                      <span className="text-gray-500">,</span>{" "}
                      <span className="text-amber-600 dark:text-amber-400">
                        &quot;Next&quot;
                      </span>
                      <span className="text-gray-500">,</span>{" "}
                      <span className="text-amber-600 dark:text-amber-400">
                        &quot;Node&quot;
                      </span>
                      <span className="text-gray-500">],</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-gray-800 dark:text-emerald-400">
                        available
                      </span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-orange-600 dark:text-orange-400">
                        true
                      </span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="text-gray-800 dark:text-gray-300">
                      {"}"}<span className="text-gray-500">;</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/30"
              >
                <Code2 size={14} className="inline mr-1.5" />
                React.js
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-3 -left-3 bg-gradient-to-br from-indigo-700 to-blue-800 dark:from-indigo-600 dark:to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/20"
              >
                Node.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg shadow-blue-500/25"
              >
                TypeScript
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
