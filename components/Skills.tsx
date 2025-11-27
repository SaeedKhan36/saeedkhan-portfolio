"use client";

import { motion } from "framer-motion";

const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "REST APIs", "Python"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "Jest"],
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-neon-teal mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-2xl hover:border-neon-blue/50 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-neon-blue/20 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
