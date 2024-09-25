"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";



export const Header = () => {
    const { activeSection, setActiveSection, setLastClickTime} = useActiveSectionContext();
    return (
        <header className="fixed top-0 w-full backdrop-blur-sm z-[999]">
            <div className="container flex items-center justify-center py-5">
                <nav className="flex bg-white items-center justify-center rounded-full z-30">
                    <motion.div 
                    className="bg-gradient-to-r from-[#fd9fa2] to-[#7d70e2]  p-0.5 rounded-full"
                    initial={{y: -100, opacity:0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <ul className="flex items-center justify-evenly gap-1 md:gap-4 md:px-4 rounded-full bg-gray-700 bg-opacity-80 py-2 ">
                            {navLinks.map((link)=> (
                                <motion.li 
                                key={link.hash}
                                className="flex items-center justify-center relative"
                                initial={{opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                >
                                    <Link
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setLastClickTime(Date.now())
                                        }}
                                        className={clsx("text-xs md:text-base px-2 py-1 rounded-full text-white hover:text-white/60 transition",
                                            {
                                                "bg-white/10": activeSection === link.name
                                            }
                                        )}
                                    >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                        layoutId="activeSection"
                                        transition={{
                                          type: "spring",
                                          stiffness: 380,
                                          damping: 30,
                                        }}
                                        className=" bg-opacity-10 rounded-full absolute inset-0 -z-10 "
                                      ></motion.span>
                                    )}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </nav>
            </div>
        </header>
    );
}