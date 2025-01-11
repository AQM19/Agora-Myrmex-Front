import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

const AQMIcon = () => {
    return (
        <Link
            href={'/'}
        >
            <Image
                src={'./imgs/svg/AQM.svg'}
                alt={'Logo de Aarón Quintanal Martín'}
                width={40}
                height={40}
            />
        </Link>
    )
}

export default AQMIcon