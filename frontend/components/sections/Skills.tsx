'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        name: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Streamlit"]
    },
    {
        name: "Backend",
        skills: ["FastAPI", "Node.js (Express)", "Python"]
    },
    {
        name: "Database",
        skills: ["PostgreSQL", "SQLite", "Supabase"]
    },
    {
        name: "Tools",
        skills: ["Git", "GitHub", "Docker"]
    }
];

export default function Skills() {
    return (
        <section className="relative py-32 px-4 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-4xl font-bold text-white sm:text-5xl"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="mb-6 text-xl font-medium text-zinc-500 uppercase tracking-widest">
                                {category.name}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        whileHover={{ x: 10 }}
                                        className="group flex items-center gap-3 text-lg text-zinc-400 transition-colors hover:text-white"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
