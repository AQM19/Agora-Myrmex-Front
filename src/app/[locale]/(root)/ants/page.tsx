import { Pagination } from '@/components';
import AntGridCard from '@/components/cards/ant_grid_card/AntGridCard';
import { getPaginatedAnts } from '@/core';
import React from 'react'

export const revalidate = 60;

export default async function AntsPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    
    const page = (await searchParams).page
    const numberPage = page ? parseInt(page.toString()) : 1;
    const { ants, currentPage, totalPages } = await getPaginatedAnts({ page: numberPage });

    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 justify-items-stretch p-5'>
                {
                    ants.map((ant, index) => (
                        <AntGridCard
                            key={index}
                            ant={ant}
                        />
                    ))
                }
            </div>

            <Pagination totalPages={totalPages} />
        </>
    );
}
