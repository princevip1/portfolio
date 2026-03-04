"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 relative overflow-hidden">
            {/* Gradient line at top */}
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToTop();
                            }}
                            className="text-xl font-bold text-white tracking-tight"
                        >
                            Prince<span className="gradient-text">.</span>
                        </a>
                        <p className="text-sm flex items-center gap-1.5">
                            &copy; 2026 Prince Mahmud. Built with
                            <Heart size={12} className="text-red-400 fill-red-400" />
                            and clean architecture.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://github.com/princevip1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 border border-gray-700 dark:border-gray-800 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/devprincemahmud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 border border-gray-700 dark:border-gray-800 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </motion.a>

                        {/* Scroll to top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 cursor-pointer hover:shadow-indigo-500/40 transition-shadow"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
