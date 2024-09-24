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
                <div className="flex flex-col items-center justify-center bg-gray-700 rounded-full py-10 relative w-[1400px] bg-opacity-50 z-20">
                    <SectionHeading>About myself</SectionHeading>
                    <div className="bg-black/70 bg-opacity-45 max-w-[680px] text-center rounded-full p-10">
                        <p className=" text-white/80 text-xl">
                            Third year student pursuing Bachelor of Technology degree in{" "}
                            <span className="font-medium">Electronics & Communication Engineering</span> at
                            JEC Jabalpur. I am skilled in{" "}
                            <span className="font-medium">
                            full-stack web development and problem solving.
                            </span>
                            My tech stack is 
                            <span className="font-medium">
                            C++, JavaScript, React, Next.js, Node.js, and MongoDB
                            </span>
                            . I am also familiar with postgreSQL, TypeScript and Prisma. I
                            am always looking to learn new technologies. I am currently looking for
                            a <span className="font-medium">full-time position</span> as a software
                            developer/engineer.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}