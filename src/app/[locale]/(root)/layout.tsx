'use client'

import { useDarkModeStatus } from '@/core/services/ui/dark-mode-status.service';
import React from 'react'
import Footer from '@/components/ui/footer/Footer';
import Header from '@/components/ui/header/Header';
import Sidebar from '@/components/ui/sidebar/Sidebar';

const MainLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const isDarkModeEnabled = useDarkModeStatus(state => state.isDarkModeEnabled);

    return (
        <main className={`${isDarkModeEnabled ? 'dark' : 'light'} grid grid-rows-[auto_auto_1fr_auto] h-screen transition-all duration-300`}>

            <Header />
            <Sidebar />

            <div>
                {children}
            </div>

            <Footer />

        </main>
    )
}

export default MainLayout