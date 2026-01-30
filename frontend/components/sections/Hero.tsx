'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center text-center"
            >
                <h1 className="text-6xl font-extrabold tracking-tighter sm:text-8xl">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Pradeep K
                    </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-zinc-400 sm:text-2xl font-light">
                    Transforming complex data into <span className="text-white font-medium">elegant interactive experiences.</span>
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/projects"
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/about"
                        className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        About Me
                    </motion.a>
                </div>

                <div className="mt-16 flex gap-6">
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://github.com/Pradeep20056"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Github size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        href="https://www.linkedin.com/in/pradeep-k-017751314/"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
