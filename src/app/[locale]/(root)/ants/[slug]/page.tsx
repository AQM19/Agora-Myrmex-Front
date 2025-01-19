import { getAntByGenusAndSpecies } from '@/core';
import { notFound } from 'next/navigation'
import React from 'react'
import InfoCard from '@/components/cards/info/InfoCard';
import DataCard from '@/components/cards/data/DataCard';
import PhotoSlider from '@/components/cards/slider/PhotoSlider';
import TaxonomyList from '@/components/cards/taxonomy-list/TaxonomyList';
import MapFrame from '@/components/cards/map/MapFrame';
import TemperatureCard from '@/components/cards/temperature/TemperatureCard';
import HumidCard from '@/components/cards/humid/HumidCard';
import MonthChart from '@/components/cards/month-chart/MonthChart';
import NoData from '@/components/ui/no-data/NoData';
import { getTranslations } from 'next-intl/server';

const AntPageById = async ({ params, }: { params: Promise<{ slug: string }> }) => {

    const slug = (await params).slug
    const [genus, species] = slug.split('_');
    const { ant, images, synonyms } = await getAntByGenusAndSpecies(genus, species);
    const t = await getTranslations('Ant details');
    const d = await getTranslations('No data');

    if (!ant) {
        notFound();
    }

    return (
        <section
            id={`${ant.genus}-${ant.species}`}
            className='bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 h-full px-2 lg:px-10 py-10'
        >

            <div className={`bg-white rounded-lg shadow-lg overflow-hidden mb-4`}>
                <div className="bg-gray-800 px-4 py-3 flex items-center">
                    <h3 className="text-lg font-semibold text-white">{t('Genus and species')}</h3>
                </div>
                <div className="p-4 text-gray-700">
                    <h1 className='text-4xl font-semibold'>{ant.genus} {ant.species}</h1>
                    <h3 className='text-2xl'>{ant.common_name}</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-5 gap-4">

                <div className="lg:col-span-2">
                    <InfoCard title={t('Colony overview')} icon="🏠">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mx-auto">
                            <dt className="font-medium text-gray-500">{t('Form')}</dt>
                            <dd className="text-gray-900 text-right">{ant.colony_form ?? d('title')}</dd>
                            <dt className="font-medium text-gray-500">{t('Founding')}</dt>
                            <dd className="text-gray-900 text-right">{ant.founding ?? d('title')}</dd>
                            <dt className="font-medium text-gray-500">{t('Size')}</dt>
                            <dd className="text-gray-900 text-right">{ant.colony_size?.toLocaleString() ?? d('title')}</dd>
                            <dt className="font-medium text-gray-500">{t('Egg Development')}</dt>
                            <dd className="text-gray-900 text-right">{ant.egg_development_time ? `${ant.egg_development_time} ${t('Days')}` : d('title')}</dd>
                            <dt className="font-medium text-gray-500">{t('Lifespan')}</dt>
                            <dd className="text-gray-900 text-right">{ant.colony_lifespan ? `${ant.colony_lifespan} ${t('Years')}` : d('title')}</dd>
                        </dl>
                    </InfoCard>
                </div>

                <div className='lg:col-span-2 lg:col-start-3'>
                    <InfoCard title={t('Synonyms')} icon={'📖'}>
                        {
                            synonyms && synonyms.length > 0 ? (

                                synonyms.map((synonym, index) => (
                                    <p key={`${synonym}-${index}`}>
                                        {synonym.synonym}
                                    </p>
                                ))
                            ) : (
                                <NoData />
                            )
                        }
                    </InfoCard>
                </div>

                <div className='lg:col-span-4 grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    <TemperatureCard title={t('Temperature')} max={ant.temperature_max} min={ant.temperature_min} />
                    <TemperatureCard title={t('Nest temperature')} max={ant.nest_temperature_max} min={ant.nest_temperature_min} />
                    <HumidCard title={t('Humid')} max={ant.humidity_max} min={ant.humidity_min} />
                    <HumidCard title={t('Nest humid')} max={ant.nest_humidity_max} min={ant.nest_humidity_min} />
                </div>

                <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <DataCard title={t("Queen size")} icon="👑" max={ant.queen_size_max} min={ant.queen_size_min} />
                    <DataCard title={t("Worker size")} icon="🐜" max={ant.worker_size_max} min={ant.worker_size_min} />
                    <DataCard title={t("Soldier size")} icon="💪" max={ant.soldier_size_max} min={ant.soldier_size_min} />
                    <DataCard title={t("Male size")} icon="♂️" max={ant.male_size_max} min={ant.male_size_min} />
                </div>

                <div className='lg:col-span-4 lg:col-start-1 lg:row-start-4'>
                    <InfoCard title={t('Diapause')} icon="❄️">
                        {
                            (ant.diapause && ant.diapause_from && ant.diapause_to && ant.diapause_threshold) ? (

                                <MonthChart from={+ant.diapause_from} to={+ant.diapause_to} />
                            ) : (
                                <NoData />
                            )
                        }
                    </InfoCard>
                </div>

                <div className='lg:col-span-4 lg:col-start-1 lg:row-start-5'>
                    <InfoCard title={t('Nuptial flight')} icon="🦋">

                        {
                            (ant.nuptial_flight && ant.nuptial_flight_from && ant.nuptial_flight_to) ? (
                                <MonthChart from={+ant.nuptial_flight_from} to={+ant.nuptial_flight_to} />
                            ) : (
                                <NoData />
                            )
                        }
                    </InfoCard>
                </div>

                <div className="lg:col-span-2 lg:row-span-5 lg:col-start-5 lg:row-start-1">
                    <InfoCard title={t('Photo Gallery & Taxonomy & Distribution')} icon="📸">

                        <div className='grid grid-cols-1 grid-rows-[1fr_auto_1fr]'>
                            <PhotoSlider
                                photos={images}
                            />

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-semibold mb-2 text-center">{t('Taxonomy')}</h4>
                                <TaxonomyList
                                    kingdom={ant.kingdom ?? ''}
                                    phylum={ant.phylum ?? ''}
                                    class={ant.class ?? ''}
                                    order={ant.order ?? ''}
                                    family={ant.family ?? ''}
                                    subfamily={ant.subfamily ?? ''}
                                    tribe={ant.tribe ?? ''}
                                />
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-semibold mb-2 text-center">{t('Distribution')}</h4>
                                <MapFrame src={ant.distribution ?? ''} />
                            </div>

                        </div>
                    </InfoCard>
                </div>
            </div>
        </section>
    )
}

export default AntPageById