'use client'

import { useDarkModeStatus } from '@/core/services/ui/dark-mode-status.service'
import React from 'react'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'

const ThemeSwitch = () => {

    const isDarkModeEnabled = useDarkModeStatus(state => state.isDarkModeEnabled);
    const enableDarkMode = useDarkModeStatus(state => state.enableDarkMode);
    const disableDarkMode = useDarkModeStatus(state => state.disableDarkMode);

    const toggleDarkMode = () => {
        isDarkModeEnabled ? disableDarkMode() : enableDarkMode();
    }

    return (
        <button
            onClick={toggleDarkMode}
            className={`w-16 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isDarkModeEnabled ? 'bg-blue-900' : 'bg-yellow-400'}`}
        >
            <div
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkModeEnabled ? 'translate-x-8 bg-blue-800' : 'translate-x-0 bg-white'}`}
            >
                {
                    isDarkModeEnabled
                        ? (<IoMoon className="h-6 w-6 text-white p-1" />)
                        : (<IoSunnyOutline className="h-6 w-6 text-yellow-400 p-1" />)
                }
            </div>
        </button>
    )
}

export default ThemeSwitch