'use client'

import { Pagination } from '@/components';
import AntGridCard from '@/components/cards/ant_grid_card/AntGridCard';
import { getPaginatedAnts, GridAnt } from '@/core';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AntsPage() {
    const [ants, setAnts] = useState<GridAnt[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<string>('');
    const [debouncedFilter, setDebouncedFilter] = useState('');

    const searchParams = useSearchParams();
    const pageString = searchParams.get('page') ?? '1';
    const page = isNaN(Number(pageString)) ? 1 : Number(pageString);

    async function fetchAnts(filter?: string) {
        setIsLoading(true);
        try {
            const { ants, totalPages, currentPage } = await getPaginatedAnts({ page, filter });
            setCurrentPage(currentPage);
            setAnts(ants);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching ants:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAnts();
    }, [page]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedFilter(filter);
        }, 500);

        return () => clearTimeout(timer);
    }, [filter]);

    useEffect(() => {
        if (debouncedFilter !== '') {
            fetchAnts(debouncedFilter);
        } else {
            fetchAnts();
        }
        // Cambiar los parámetros de búsqueda (query) en la URL
    }, [debouncedFilter, searchParams]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <section className='p-5 flex flex-col gap-4'>

            <div>
                <span className='font-semibold text-lg'>Filtro de especies</span>
                <input
                    type="text"
                    value={filter}
                    onChange={handleInputChange}
                    className='rounded-md w-full h-10 text-neutral-900 px-2'
                    placeholder="Buscar por género o especie" />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 justify-items-stretch'>
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
        </section>
    );
}
