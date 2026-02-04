"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Scene from "@/components/3d/Scene";
import { useState } from "react";

const projects = [
    {
        title: "ExplaniX - AI Personal Tutor",
        description: "An AI-driven learning platform enabling students to upload PDFs, ask voice-based questions, and receive real-time explanations with text and voice. Uses RAG pipeline for accurate responses.",
        tech: ["FastAPI", "HuggingFace", "ChromaDB", "Whisper", "React.js"],
        links: { github: "#", demo: "#" },
        images: ["/projects/explanix-1.png", "/projects/explanix-2.png"]
    },
    {
        title: "GEO VISION - GIS Platform",
        description: "Terrain-aware visibility and LOS analysis platform. Built to compute line-of-sight and viewshed coverage using DEM data. Interactive visualizations with Streamlit + Folium.",
        tech: ["Python", "FastAPI", "Rasterio", "NumPy", "Streamlit", "Leaflet"],
        links: { github: "#", demo: "#" },
        images: ["/projects/geovision-1.png", "/projects/geovision-2.png", "/projects/geovision-3.png"]
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

                <div className="flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4">
                                        <Github className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                                        <ExternalLink className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.images && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {project.images.map((image, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => setSelectedImage(image)}
                                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer group/img"
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${i + 1}`}
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="text-white text-sm font-medium">View Image</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[60]"
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
                        >
                            <img
                                src={selectedImage}
                                alt="Project Preview"
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
