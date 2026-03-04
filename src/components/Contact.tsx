"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2, Phone } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
                        Contact
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mt-4">
                        Let&apos;s Work{" "}
                        <span className="gradient-text">Together</span>
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s discuss how I can help bring
                        your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        {[
                            {
                                icon: <Mail size={20} />,
                                label: "Email",
                                value: "xprincemahmud@gmail.com",
                                gradient: "from-blue-600 to-indigo-600",
                            },
                            {
                                icon: <Phone size={20} />,
                                label: "Phone",
                                value: "+880 1797 328282",
                                gradient: "from-blue-600 to-indigo-600",
                            },
                            {
                                icon: <MapPin size={20} />,
                                label: "Location",
                                value: "Bangladesh",
                                gradient: "from-blue-600 to-indigo-600",
                            },
                            {
                                icon: <Clock size={20} />,
                                label: "Availability",
                                value: "Open for remote work",
                                gradient: "from-blue-600 to-indigo-600",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-11 h-11 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-500">
                                            {item.label}
                                        </p>
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Quick CTA */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-2xl p-6 text-white">
                            <h4 className="font-bold text-lg">Ready to start?</h4>
                            <p className="text-blue-100 text-sm mt-1.5 leading-relaxed">
                                Fill out the form and I&apos;ll get back to you within 24 hours
                                with a detailed proposal.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-800 shadow-sm space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-500/10 outline-none transition-all text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-500/10 outline-none transition-all text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="project-type"
                                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Project Type
                                </label>
                                <select
                                    id="project-type"
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-500/10 outline-none transition-all text-sm text-gray-900 dark:text-white"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="saas">SaaS Platform</option>
                                    <option value="ecommerce">Ecommerce System</option>
                                    <option value="api">API Development</option>
                                    <option value="real-time">Real-Time Application</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-500/10 outline-none transition-all text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 ${submitted
                                    ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                                    : "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white hover:shadow-xl hover:shadow-indigo-500/25"
                                    }`}
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle2 size={18} />
                                        Message Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
