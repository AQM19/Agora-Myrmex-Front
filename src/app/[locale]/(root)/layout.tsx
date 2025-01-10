'use client'

import { useDarkModeStatus } from '@/core/services/ui/dark-mode-status.service';
import React from 'react'

const MainLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const isDarkModeEnabled = useDarkModeStatus(state => state.isDarkModeEnabled);

    return (
        <main className={`${isDarkModeEnabled ? 'dark' : 'light'} grid grid-rows-[auto_1fr_auto] h-screen transition-all duration-300`}>

            <header className='bg-red-500 dark:bg-purple-500'>header</header>
            <aside className='hidden'>aside</aside>

            <div className='bg-blue-500'>
                {children}
            </div>

            <footer className='bg-green-500'>footer</footer>

        </main>
    )
}

export default MainLayout