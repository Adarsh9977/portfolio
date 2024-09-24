"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./Section-heading";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.03 * index,
      },
    }),
  };

export const Skills = () => {  
    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section ref={ref} id="skills" className="scroll-mt-28">
            <div className="container text-center">
                <SectionHeading>
                    Skills
                </SectionHeading>
                <div className="relative flex items-center justify-center mb-5 z-20 scroll-mt-28 text-center px-4 py-10 sm:mb:40">
                    <ul className="flex flex-wrap justify-center gap-4 text-lg max-w-[53rem] text-gray-100">
                        {skills.map((skill, index)=>(
                            <motion.li 
                                key={index} 
                                className="bg-gray-800 bg-opacity-70 rounded-xl px-5 py-3 hover:bg-opacity-100 transition-colors duration-200 cursor-default"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: false
                                }}
                                custom={index}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}