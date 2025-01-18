import { GridAnt } from '@/core';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react'

interface Props {
    ant: GridAnt;
}

const AntGridCard = ({ ant }: Props) => {
    return (
        <Link href={{ pathname: '/ants/[slug]', params: { slug: `${ant.genus}_${ant.species}` } }}>
            <div
                className="relative overflow-hidden rounded-lg shadow-lg shadow-black dark:shadow-white transition-transform duration-300 ease-in-out hover:scale-105 group cursor-pointer">
                <div className="relative h-64 w-full">
                    <Image
                        src={ant.image ?? '/imgs/svg/placeholder.svg'}
                        alt={ant.appointment ?? ''}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease-in-out group-hover:opacity-75"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-2xl font-bold text-white tracking-tight mb-2 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                        {ant.genus} {ant.species}
                    </h2>
                    <div className="w-12 h-1 bg-white rounded transition-all duration-300 ease-in-out group-hover:w-24"></div>
                </div>
            </div>
        </Link>
    )
}

export default AntGridCard