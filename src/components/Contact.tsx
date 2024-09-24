"use client";

import { motion } from "framer-motion";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./Section-heading";
import { useSectionInView } from "@/lib/hooks";

export const Contact = () => {
    
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            ref={ref} 
            id="contact"
        >
            <div className="container">
                <SectionHeading>Contact Me</SectionHeading>
                <div>
                    <p className="text-white -mt-4 text-center">
                        Please contact me directly at{" "}
                        <a className="underline text-muted-foreground" href="mailto:adarshtiwari797023@gmail.com">
                            adarshtiwari797023@gmail.com
                        </a>{" "}
                        through this form.
                    </p>
                    <form
                        className="mt-10 flex flex-col items-center px-10 py-5"
                    >
                        <input
                            className="h-14 w-full rounded-lg border bg-gray-600 bg-opacity-50 px-4 text-white"
                            placeholder="Your email"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                        />
                        <textarea
                            className="h-52 w-full my-3 rounded-lg border bg-gray-600 bg-opacity-50 p-4 text-white"
                            placeholder="Your message"
                            name="message"
                            required
                            maxLength={1000}
                        />
                        <button
                            type="submit"
                            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-white  text-black rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-300 active:scale-105"
                        >
                        Submit{" "}
                        <div className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" >
                            <FaPaperPlane/>
                        </div>
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}