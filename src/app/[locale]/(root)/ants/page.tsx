// page.tsx
export const revalidate = 60;

import { Pagination } from '@/components';
import AntsGridComponent from '@/components/grid/ants-grid.component';
import { getPaginatedAnts } from '@/core';
import React from 'react'

type PageProps = {
    searchParams?: {
        [key: string]: string | string[] | undefined
    };
};

export default async function AntsPage({ searchParams }: PageProps) {
    const page = searchParams?.page;

    console.log('PAGINA DEL SP: ', page);

    const numberPage = page ? parseInt(page.toString()) : 1;

    console.log('PAGINA DEL NUMBER PAGE: ', numberPage);

    const { ants, currentPage, totalPages } = await getPaginatedAnts({ page: numberPage });

    return (
        <>
            <AntsGridComponent ants={ants} />
            <Pagination totalPages={totalPages} />
        </>
    );
}
