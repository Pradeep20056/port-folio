'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center text-center"
            >
                <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Pradeep K
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
                    Aspiring Fullstack Developer | Pursuit of Information Technology
                </p>

                <div className="mt-10 flex gap-6">
                    <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="https://github.com/Pradeep20056"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-zinc-900/50 p-3 text-zinc-400 transition-colors hover:text-white"
                    >
                        <Github size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="https://www.linkedin.com/in/pradeep-k-017751314/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-zinc-900/50 p-3 text-zinc-400 transition-colors hover:text-white"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="https://leetcode.com/u/Pradeepk_07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-zinc-900/50 p-3 text-zinc-400 transition-colors hover:text-white"
                    >
                        <Code2 size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="mailto:pradeepkannan012@gmail.com"
                        className="rounded-full bg-zinc-900/50 p-3 text-zinc-400 transition-colors hover:text-white"
                    >
                        <Mail size={24} />
                    </motion.a>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-20 flex flex-col items-center gap-2"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Scroll Down</p>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
