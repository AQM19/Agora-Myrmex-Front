'use client'

import { useUISidebar } from '@/core/services/ui/sidebar-status.service';
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const SideMenuButton = () => {
    const openSideMenu = useUISidebar(state => state.openSideMenu);

    return (
        <button
            className='cursor-pointer'
            onClick={() => openSideMenu()}
        >
            <IoMenu size={40} />
        </button >
    )
}

export default SideMenuButton