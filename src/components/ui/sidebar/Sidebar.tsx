'use client'

import { IoCloseOutline } from 'react-icons/io5'
import { Link } from '@/i18n/routing';
import { MenuItemsConfig } from '@/core/config/menu/menu.config';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useUISidebar } from '@/core/services/ui/sidebar-status.service'
import clsx from 'clsx';
import LocalSwitch from '../local-switch/LocalSwitch';
import React from 'react'
import ThemeSwitch from '../theme-switch/ThemeSwitch';

const Sidebar = () => {
    const [openMenus, setOpenMenus] = React.useState<{ [key: string]: boolean }>({});
    const isSideMenuOpen = useUISidebar(state => state.isSideMenuOpen);
    const closeMenu = useUISidebar(state => state.closeSideMenu);
    const t = useTranslations('Menu');

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
                        'fixed p-5 right-0 top-0 w-3/4 sm:w-1/4 h-screen flex flex-col bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }>

                <div className='block dark:hidden absolute top-1/2 left-1/2 w-64 h-64 bg-no-repeat bg-contain -translate-x-1/2 -translate-y-1/2 opacity-10 -z-10' style={{ backgroundImage: 'url("/imgs/svg/agora-myrmex-head-light-logo.png")' }}></div>
                <div className='hidden dark:block absolute top-1/2 left-1/2 w-64 h-64 bg-no-repeat bg-contain -translate-x-1/2 -translate-y-1/2 opacity-10 -z-10' style={{ backgroundImage: 'url("/imgs/svg/agora-myrmex-head-dark-logo.png")' }}></div>

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

                    {
                        MenuItemsConfig.map((item, index) => (

                            !item.children ? (
                                <li key={`${item.label}-${index}`}>
                                    <Link href={item.href ?? '/'}
                                        className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-600 duration-300"
                                        onClick={() => closeMenu()}
                                    >
                                        <item.icon
                                            size={25}
                                        />

                                        <span className={`transition-opacity duration-300 ${isSideMenuOpen ? 'opacity-100' : 'opacity-100'}`} >
                                            {t(`${item.label}`)}
                                        </span>
                                    </Link>
                                </li>

                            ) : (
                                <li key={`${item.label}-${index}`}>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => setOpenMenus(prev => ({
                                                ...prev,
                                                [item.label]: !prev[item.label]
                                            }))}
                                            className="flex items-center justify-between w-full rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600 duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <item.icon size={25} />
                                                <span>{t(`${item.label}`)}</span>
                                            </div>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${openMenus[item.label] ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {
                                            openMenus[item.label] && (
                                                <motion.ul
                                                    initial={{ opacity: 0, height: 0, y: -20 }}
                                                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                    exit={{ opacity: 0, height: 0, y: -20 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="ml-4 flex flex-col gap-2 overflow-hidden"
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <li key={`${child.label}-${childIndex}`}>
                                                            <Link
                                                                href={child.href ?? '/'}
                                                                className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-600 duration-300"
                                                                onClick={() => closeMenu()}
                                                            >
                                                                <child.icon size={20} />
                                                                <span>{t(`${child.label}`)}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )
                                        }
                                    </div>
                                </li>
                            )

                        ))
                    }

                </ul>

            </nav>

        </aside>
    )
}

export default Sidebar