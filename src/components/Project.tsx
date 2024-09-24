"use client";

import { projectsList } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

type ProjectProps = (typeof projectsList)[number];

export const Project = ({
    title,
    description,
    tags,
    imageUrl,
    linkToProject,
}: ProjectProps) => {



    return(
        <div className="text-white z-30">
            <CardContainer className="inter-var relative bg-gray-700 bg-opacity-50 rounded-3xl max-w-[50rem] overflow-hidden sm:pr-8 sm:h-[24rem] hover:bg-opacity-60 transition group-even:pl-8 z-30 py-20 px-10">
                <CardBody className="relative group/card w-auto h-auto rounded-xl mt-4 p-6">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                        <h3 className="text-2xl font-semibold text-gray-200">{title}</h3>
                        <p className="mt-2 leading-relaxed text-gray-100">{description}</p>
                        <ul className="flex flex-wrap gap-2 mt-5">
                            {tags.map((tag, index)=>(
                                <CardItem key={index}>
                                    <li className="bg-white/20 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/80 rounded-full">
                                        {tag}
                                    </li>
                                </CardItem>
                            ))}
                        </ul>
                    </div>
                    <a href={linkToProject} target="_blank" style={{ cursor: "pointer"}}>
                        <Image
                            src={imageUrl}
                            alt="my project"
                            quality={100}
                            className="absolute top-12 rounded-2xl -right-28 w-[28.25rem] h-[18rem] rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40"
                        />
                    </a>
                </CardBody>
            </CardContainer>
        </div>
    );
}