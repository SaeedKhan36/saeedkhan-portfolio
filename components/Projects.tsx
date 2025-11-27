"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and payment integration.",
        tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
        github: "#",
        live: "#",
    },
    {
        title: "Task Management App",
        description: "Real-time collaborative task manager with drag-and-drop functionality.",
        tech: ["React", "Firebase", "Redux", "DnD"],
        github: "#",
        live: "#",
    },
    {
        title: "AI Image Generator",
        description: "Web application that uses OpenAI API to generate images from text prompts.",
        tech: ["React", "Node.js", "OpenAI API", "Express"],
        github: "#",
        live: "#",
    },
    {
        title: "Portfolio Website",
        description: "Modern personal portfolio with glassmorphism design and animations.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        github: "#",
        live: "#",
    },
    {
        title: "Chat Application",
        description: "Real-time chat app with private messaging and group channels.",
        tech: ["Socket.io", "React", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with location detection and 5-day forecast.",
        tech: ["React", "OpenWeatherMap", "Chart.js"],
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="w-10 h-10 text-neon-purple" />
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-6 h-6" />
                                        </a>
                                        <a href={project.live} className="text-gray-400 hover:text-neon-purple transition-colors">
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-neon-teal">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
