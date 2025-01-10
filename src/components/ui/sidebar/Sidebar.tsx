'use client'

import { useUISidebar } from '@/core/services/ui/sidebar-status.service'
import clsx from 'clsx';
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import LocalSwitch from '../local-switch/LocalSwitch';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import { BugPlay, House } from 'lucide-react';
import { Link } from '@/i18n/routing';

const Sidebar = () => {

    const isSideMenuOpen = useUISidebar(state => state.isSideMenuOpen);
    const closeMenu = useUISidebar(state => state.closeSideMenu);

    return (
        <aside className=''>
            {/* Background black */}
            {
                isSideMenuOpen && (
                    <div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-neutral-900 opacity-30'
                    />
                )
            }

            {/* Blur */}
            {
                isSideMenuOpen && (
                    <div
                        onClick={closeMenu}
                        className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                    />
                )
            }

            {/* Side menu */}
            <nav
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-1/2 sm:w-1/4 h-screen flex flex-col bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }>

                <div className='absolute top-5 left-0 flex flex-row items-center justify-between px-3 w-full'>
                    <LocalSwitch />

                    <ThemeSwitch />

                    <IoCloseOutline
                        size={30}
                        className='cursor-pointer'
                        onClick={() => closeMenu()}
                    />
                </div>

                <div className='mb-10'></div>

                <ul className="flex flex-col gap-2 h-full mt-10 text-aero dark:text-emerald">

                    <li>

                        <Link
                            href={'/'}
                            className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-night-600"
                            onClick={() => closeMenu()}
                        >
                            <House
                                className='w-10'
                            />

                            <span className={`transition-opacity duration-300 ${isSideMenuOpen ? 'opacity-100' : 'opacity-100'}`} >
                                Home
                            </span>

                        </Link>

                        <Link
                            href={'/ants'}
                            className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-night-600"
                            onClick={() => closeMenu()}
                        >
                            <BugPlay
                                className='w-10'
                            />

                            <span className={`transition-opacity duration-300 ${isSideMenuOpen ? 'opacity-100' : 'opacity-100'}`} >
                                Ants
                            </span>

                        </Link>

                    </li>

                </ul>

            </nav>

        </aside>
    )
}

export default Sidebar