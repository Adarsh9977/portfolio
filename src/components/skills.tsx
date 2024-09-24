import { skills } from "@/lib/data";
import SectionHeading from "./Section-heading";

export const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-28">
            <div className="container text-center">
                <SectionHeading>
                    Skills
                </SectionHeading>
                <div className="relative flex items-center justify-center mb-5 z-20 scroll-mt-28 text-center px-4 py-10 sm:mb:40">
                    <ul className="flex flex-wrap justify-center gap-4 text-lg max-w-[53rem] text-gray-100">
                        {skills.map((skill, index)=>(
                            <li key={index} className="bg-gray-800 bg-opacity-70 rounded-xl px-5 py-3 hover:bg-opacity-100 transition-colors duration-200 cursor-default">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}