"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { MdOutlineFileDownload } from "react-icons/md";
import { FlipWords } from "./ui/flip-words";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaArrowRight, FaGithubSquare, FaLinkedin } from "react-icons/fa";



export const Intro = () => {

    const { setActiveSection, setLastClickTime } = useActiveSectionContext();

    const { ref } = useSectionInView("Home", 0.5);

    const roles = [ "Full Stack Developer", "Tech Enthusiast", "NextJs Developer"];

    return (
        <section ref={ref} id="home" className="z-20 mt-32 scroll-mt-36">
            <div className="container">
                <div className="flex justify-center items-center">
                    <motion.h1 
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y: 0 }}
                    className="text-4xl text-white text-center py-10 my-5 max-w-[690px] tracking-wider">
                        <span className="font-bold">I'm Adarsh.</span>I&apos;m a{" "} <br />
                        <span className="font-bold z-20"><FlipWords duration={2000} className="text-[#beedf9] font-bold text-5xl" words={roles}/></span><br/>with{" "}
                        <span className="font-bold ">1 year</span> of experience.I have passion for developing websites.<br/>
                        <span className="">My tech stack is <span className="font-bold">React & NextJs</span></span>
                    </motion.h1>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-center gap-8"
                >
                    <div className="bg-gradient-to-r from-[#fd9fa2] to-[#7d70e2] p-0.5 rounded-full z-20">
                        <Link 
                            href="#contact"
                            onClick={() => {
                                setActiveSection("Contact");
                                setLastClickTime(Date.now());
                            }}
                        >
                            <button className="text-white flex items-center justify-center gap-2 bg-gray-700 group p-2 rounded-full font-semibold">
                                Contact me <div className="group-hover:translate-x-2 pr-3"><FaArrowRight/></div>
                            </button>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-r from-[#fbb0b2] to-[#9f92ff] p-0.5 rounded-full hover:scale-105 ease-linear cursor-pointer z-20">
                        <a
                        className="flex relative items-center justify-center gap-2 cursor-pointer p-2 z-30 bg-clip-content rounded-full text-black font-semibold"
                        href="https://drive.google.com/file/d/1EApMe2WLeSshXbE0SIZDeU_uP33d3YyX/view?usp=drive_link"
                        target="blank"
                        >
                            Download CV <MdOutlineFileDownload size={25}/>
                        </a>
                    </div>
                    <a
                    href="https://github.com/Adarsh9977" 
                    target="_blank"
                    className="bg-white rounded-full z-20 p-2 hover:bg-white/70 cursor-pointer">
                        <FaGithubSquare size={30}/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/adarsh-tiwari-b9a64a19a" 
                    target="_blank"
                    className="bg-white rounded-full p-2 z-20 hover:bg-white/70 cursor-pointer">
                        <FaLinkedin size={30}/>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}