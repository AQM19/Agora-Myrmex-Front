import React from 'react'
import AQMIcon from '../logo/AQMIcon'
import SideMenuButton from '../side-menu-button/SideMenuButton';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const Header = () => {
    return (
        <header className='px-5 flex justify-between items-center bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 transition-colors duration-300'>

            <AQMIcon />

            <Link href={'/'}>
                <Image src={'/imgs/svg/agora-myrmex-head-light-logo.png'} alt={''} width={140} height={140} className='block dark:hidden' />
                <Image src={'/imgs/svg/agora-myrmex-head-dark-logo.png'} alt={''} width={140} height={140} className='hidden dark:block' />
            </Link>

            <SideMenuButton />

        </header>
    )
}

export default Header