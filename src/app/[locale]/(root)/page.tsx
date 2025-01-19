'use client'

import { Pagination } from '@/components';
import AntGridCard from '@/components/cards/ant_grid_card/AntGridCard';
import { getPaginatedAnts, GridAnt } from '@/core';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AntsPage() {
    const [ants, setAnts] = useState<GridAnt[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<string>('');
    const [debouncedFilter, setDebouncedFilter] = useState('');
    const [numRegistry, setNumRegistry] = useState(12);

    const searchParams = useSearchParams();
    const pageString = searchParams.get('page') ?? '1';
    const page = isNaN(Number(pageString)) ? 1 : Number(pageString);

    const t = useTranslations('Main');

    async function fetchAnts(filter?: string) {
        setIsLoading(true);
        try {
            const { ants, totalPages, currentPage } = await getPaginatedAnts({ page, take: numRegistry, filter });
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
    }, [debouncedFilter, searchParams, numRegistry]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const handleNumRegistryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumRegistry(+event.target.value);
    }

    return (
        <section className='p-5 flex flex-col gap-4'>

            <div>
                <span className='font-semibold text-lg text-neutral-900 dark:text-neutral-50'>{t('species filter')}</span>
                <div className='grid grid-cols-[1fr_auto] gap-8'>
                    <input
                        type="text"
                        value={filter}
                        onChange={handleInputChange}
                        className='rounded-md w-full h-10 text-neutral-900 px-2'
                        placeholder={t('search by genus and species')} />

                    <select
                        name="registy"
                        id="registry"
                        defaultValue={12}
                        onChange={handleNumRegistryChange}
                        className='text-neutral-900 px-2 rounded-lg'
                    >
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="48">48</option>
                        <option value="72">72</option>
                        <option value="96">96</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 justify-items-stretch'>
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
