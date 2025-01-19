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

            <div className='bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 duration-300'>
                {children}
            </div>

            <Footer />

        </main>
    )
}

export default MainLayout