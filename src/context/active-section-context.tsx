"use client";

import { SectionName } from "@/lib/types";
import React, { createContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClickTime: number;
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [lastClickTime, setLastClickTime]= useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                lastClickTime,
                setLastClickTime
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext);
    if(context === null){
        throw new Error(
            "useActiveSection is not stated"
        );
    }
    return context;
}