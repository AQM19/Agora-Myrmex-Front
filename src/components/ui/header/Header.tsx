import React from 'react'
import AQMIcon from '../logo/AQMIcon'
import SideMenuButton from '../side-menu-button/SideMenuButton';

const Header = () => {
    return (
        <header className='px-5 py-2 flex justify-between items-center bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 transition-colors duration-300'>

            <AQMIcon />

            <h1 className='font-bold text-2xl'>
                AGORA MYRMEX
            </h1>

            <SideMenuButton />

        </header>
    )
}

export default Header