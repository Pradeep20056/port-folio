"use client";

import { motion } from "framer-motion";
import Scene from "@/components/3d/Scene";

const experience = [
    {
        company: "Codtech IT Solution Private Limited",
        role: "Frontend Developer Intern",
        period: "March 2025 - April 2025",
        description: [
            "Designed and built responsive UI components using React.js.",
            "Implemented interactive features to enhance overall user experience.",
        ]
    }
];

const education = {
    degree: "B.Tech in Information Technology",
    institution: "Anna University (Chennai)",
    cgpa: "7.86 (upto 4th semester)",
    graduation: "August 2027"
};

const skillGroups = [
    { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Streamlit"] },
    { name: "Backend", skills: ["FastAPI", "Node.js (Express)"] },
    { name: "Database", skills: ["SQLite", "PostgreSQL"] },
    { name: "Tools", skills: ["GitHub", "VS Code", "Npm", "Supabase"] }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <Scene />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        I am an aspiring Fullstack Developer currently pursuing my B.Tech in Information Technology.
                        I am passionate about building interactive web interfaces and continuously improving my coding skills through hands-on projects.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {/* Experience */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-2">Experience</h2>
                        {experience.map((exp) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l border-blue-500/30"
                            >
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6px] top-2 shadow-[0_0_10px_#3b82f6]" />
                                <div className="mb-1 flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                                    <span className="text-zinc-500 text-sm">{exp.period}</span>
                                </div>
                                <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                                <ul className="space-y-2 text-zinc-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-2">Technical Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {skillGroups.map((group) => (
                                <div key={group.name} className="space-y-4">
                                    <h3 className="text-zinc-500 uppercase tracking-wider text-xs font-bold">{group.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-2">Education</h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-medium text-white">{education.institution}</h3>
                                <span className="text-zinc-500 text-sm">{education.graduation} (Exp)</span>
                            </div>
                            <p className="text-blue-400 mb-2">{education.degree}</p>
                            <p className="text-zinc-400">CGPA: {education.cgpa}</p>
                        </motion.div>
                    </section>
                </div>
            </div>
        </div>
    );
}
