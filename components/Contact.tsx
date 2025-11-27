"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl text-center"
                    >
                        <p className="text-xl text-gray-300 mb-8">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                            <a href="mailto:saeedkhanzak@gmail.com" className="flex items-center justify-center gap-3 text-white hover:text-neon-blue transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-blue/20 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-lg">saeedkhanzak@gmail.com</span>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=918591761508"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 text-white hover:text-neon-teal transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-teal/20 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="text-lg">Chat on WhatsApp</span>
                            </a>


                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="https://github.com/SaeedKhan36" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/saeed-khan-b19440319" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 transition-all hover:-translate-y-1">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/SaeedKhan120842" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 transition-all hover:-translate-y-1">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/_saeedkhan___" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-neon-purple hover:bg-neon-purple/10 transition-all hover:-translate-y-1">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
