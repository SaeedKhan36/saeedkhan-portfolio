"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([
        "Welcome to the interactive terminal.",
        "Type 'help' to see available commands.",
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = "";

        switch (cleanCmd) {
            case "help":
                response = "Available commands: help, about, projects, skills, contact, clear";
                break;
            case "about":
                response = "I am a Full Stack Developer passionate about building modern web applications.";
                break;
            case "projects":
                response = "Check out the projects section above to see my work.";
                break;
            case "skills":
                response = "I work with React, Next.js, Node.js, and more.";
                break;
            case "contact":
                response = "You can reach me at contact@example.com or via social links below.";
                break;
            case "clear":
                setOutput([]);
                return;
            default:
                response = `Command not found: ${cleanCmd}. Type 'help' for available commands.`;
        }

        setOutput((prev) => [...prev, `> ${cmd}`, response]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    return (
        <section className="py-20 bg-[#030014]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                    <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1">
                            <TerminalIcon className="w-3 h-3" /> bash
                        </div>
                    </div>

                    <div
                        className="p-6 h-80 overflow-y-auto font-mono text-sm md:text-base cursor-text"
                        onClick={() => inputRef.current?.focus()}
                    >
                        <div className="space-y-2">
                            {output.map((line, i) => (
                                <div key={i} className={`${line.startsWith(">") ? "text-neon-blue" : "text-gray-300"}`}>
                                    {line}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
                            <span className="text-neon-teal">➜</span>
                            <span className="text-neon-purple">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-white flex-grow focus:ring-0"
                                autoFocus
                            />
                        </form>
                        <div ref={bottomRef}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
