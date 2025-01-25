'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    )
}

export default ThemeProvider