"use client";

import { motion } from "framer-motion";
import { projectsList } from "@/lib/data";
import SectionHeading from "./Section-heading";
import React from "react";
import { Project } from "./Project";
import { useSectionInView } from "@/lib/hooks";

export const Projects = ()=> {

    const { ref } = useSectionInView("Projects", 0.5);

    return(
        <motion.section transition={{ delay: 1}} ref={ref} id="projects" className="z-30 scroll-mt-32">
            <div className="container">
                <div className=" bg-gray-700 relative bg-opacity-50 rounded-full z-30">
                    <SectionHeading>My Projects</SectionHeading>
                </div>
                <div className="relative z-30">
                    {projectsList.map((project, index)=>(
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}