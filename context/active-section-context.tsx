"use client";

import React, { useState, createContext } from 'react'
import type { SectionName } from '@/lib/types';


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0) // Need to keep track of this to disable the oberver temporarily when the user clicks on a link
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider');
    }
    return context;
}
