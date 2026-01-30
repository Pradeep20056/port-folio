"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Scene from "@/components/3d/Scene";

const projects = [
    {
        title: "ExplaniX - AI Personal Tutor",
        description: "An AI-driven learning platform enabling students to upload PDFs, ask voice-based questions, and receive real-time explanations with text and voice. Uses RAG pipeline for accurate responses.",
        tech: ["FastAPI", "HuggingFace", "ChromaDB", "Whisper", "React.js"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "GEO VISION - GIS Platform",
        description: "Terrain-aware visibility and LOS analysis platform. Built to compute line-of-sight and viewshed coverage using DEM data. Interactive visualizations with Streamlit + Folium.",
        tech: ["Python", "FastAPI", "Rasterio", "NumPy", "Streamlit", "Leaflet"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Sports League Management",
        description: "Full-stack system for team/league management, match scheduling, and automatic standings calculation. Features JWT-based authentication.",
        tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Mini Projects (AI-based)",
        description: "Offline AI Bot using Ollama, AI-based Recipe Finder, and Healthcare Assistant for Elderly.",
        tech: ["Ollama", "GenAI", "Python"],
        links: { github: "#", demo: "#" }
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <Scene />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Selected Projects</h1>
                    <p className="text-zinc-400 text-lg">A showcase of my work in AI, Full-stack, and GIS.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <Github className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                                    <ExternalLink className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                                </div>
                            </div>

                            <p className="text-zinc-400 mb-8 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
