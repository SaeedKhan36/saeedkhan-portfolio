"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
            {/* Background Gradient & Grid */}
            <div className="absolute inset-0 w-full h-full bg-[#030014]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--neon-blue)_0%,_transparent_10%)] opacity-20 blur-[100px] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-neon-teal font-mono text-lg mb-4 tracking-widest">
                        FULL STACK DEVELOPER
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">Future</span>
                    <br />
                    One Line at a Time
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    I craft high-performance, visually stunning web applications with a focus on user experience and modern design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-medium backdrop-blur-sm"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 flex gap-6 justify-center"
                >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors"><Linkedin className="w-6 h-6" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter className="w-6 h-6" /></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors"><Instagram className="w-6 h-6" /></a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
}
