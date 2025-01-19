import NoData from '@/components/ui/no-data/NoData';
import { ArrowDown, ArrowUp, Droplets } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface Props {
    title: string;
    max: string | null;
    min: string | null;
}

const HumidCard = ({ title, max, min }: Props) => {

    const t = useTranslations('Ant details');
    const d = useTranslations('No data');

    return (

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full min-h-44">

            <div className="bg-gray-800 px-3 py-2 flex items-center justify-between">
                <Droplets className="text-blue-500" />
                <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>

            <div className="p-3 text-center relative h-full flex flex-col justify-center">

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="rgba(59, 130, 246, 0.1)" />
                    <path d="M0 100 C 30 20, 70 20, 100 100 Z" fill="rgba(59, 130, 246, 0.1)" />
                </svg>

                {
                    (max !== null && min !== null) ? (
                        <>
                            <div className="flex justify-between w-full mb-2 -mt-8">
                                <div className="flex items-center">
                                    <ArrowUp className="w-6 h-6 mr-2 text-red-500" />
                                    <span className="text-3xl font-bold">{max ?? d('title')}%</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowDown className="w-6 h-6 mr-2 text-blue-500" />
                                    <span className="text-3xl font-bold">{min ?? d('title')}%</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <span className="text-sm text-gray-500">{t('Max')}</span>
                                <span className="text-sm text-gray-500">{t('Min')}</span>
                            </div>
                        </>
                    ) : (
                        <NoData />
                    )
                }


            </div>
        </div>
    )
}

export default HumidCard