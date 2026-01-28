'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers, Code, Globe2 } from 'lucide-react';

const projects = [
    {
        title: "ExplaniX",
        description: "Turning PDFs into Personalized Tutors using GenAI, NLP, and VectorDB. RAG pipeline for accurate responses.",
        tech: ["FastAPI", "Transformers", "ChromaDB", "React"],
        icon: <Layers className="text-blue-400" />,
    },
    {
        title: "Sports League Management",
        description: "Full-stack system for match scheduling, results, and standigs. Featuring JWT auth and role-based access.",
        tech: ["Next.js", "Node.js", "Express", "PostgreSQL"],
        icon: <Code className="text-purple-400" />,
    },
    {
        title: "GEO VISION",
        description: "Terrain-aware visibility and LOS analysis platform. Geospatial calculations with DEM data.",
        tech: ["Python", "FastAPI", "Rasterio", "NumPy", "Folium"],
        icon: <Globe2 className="text-emerald-400" />,
    }
];

export default function Experience() {
    return (
        <section className="relative py-32 px-4 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-4xl font-bold text-white sm:text-5xl"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-hover hover:bg-white/10"
                        >
                            <div className="p-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="rounded-xl bg-zinc-900/50 p-3">
                                        {project.icon}
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-white" />
                                </div>
                                <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                                <p className="mb-6 text-zinc-400 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, ti) => (
                                        <span key={ti} className="rounded-full bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-500 whitespace-nowrap">
                                            {t}
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
