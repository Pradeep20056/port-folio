"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-zinc-400"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </motion.div>
        </nav>
    );
}
