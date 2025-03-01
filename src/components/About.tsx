"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./Section-heading";

export const About = () => {

    const { ref } = useSectionInView("About");

    return (
        <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        className="z-30 mb-20 scroll-mt-28">
            <div className="container flex items-center justify-center">
                <div className="flex flex-col items-center justify-center bg-gray-700 rounded-full py-5 sm:py-10 px-5 sm:px-10 relative md:w-[1400px] bg-opacity-50 z-20">
                    <SectionHeading>About myself</SectionHeading>
                    <div className="bg-black/70 bg-opacity-45 max-w-[680px] text-center overflow-clip rounded-full px-10 py-12">
                        <p className=" text-white/80 text-xs sm:text-lg md:text-xl tracking-tight">
                            Third-year B.Tech student in Electronics & Communication Engineering at JEC Jabalpur, skilled in full-stack development and problem-solving.
                            Proficient in C++, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma, with a passion for learning. Expanding expertise in DevOps with Docker, CI/CD pipelines, and Kubernetes.
                            Seeking a full-time role or internship as a Software Developer/Engineer to apply my skills and contribute to impactful projects.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}