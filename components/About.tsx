"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#030014] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 z-10"></div>

                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                <User className="w-32 h-32 opacity-50" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                                <p className="text-neon-teal">Creative & Technical</p>
                            </div>
                        </div>

                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-8 rounded-2xl">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I'm Saeed Khan, a Full Stack Developer passionate about building
                                scalable and user-focused web applications. I enjoy turning complex
                                problems into clean, elegant digital experiences.
                                Currently exploring Web 3.0 and blockchain development.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I love learning new technologies and applying them to real-world
                                applications. I believe in clean code, strong architecture,
                                and building products that create real impact.
                            </p>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                <Code className="w-8 h-8 text-neon-blue mb-2" />
                                <h4 className="text-white font-bold">Frontend</h4>
                                <p className="text-sm text-gray-400">React, Next.js, Tailwind</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                <Database className="w-8 h-8 text-neon-teal mb-2" />
                                <h4 className="text-white font-bold">Backend</h4>
                                <p className="text-sm text-gray-400">Node.js, PostgreSQL, Prisma</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                <Zap className="w-8 h-8 text-neon-purple mb-2" />
                                <h4 className="text-white font-bold">Performance</h4>
                                <p className="text-sm text-gray-400">Optimization, SEO, Speed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
