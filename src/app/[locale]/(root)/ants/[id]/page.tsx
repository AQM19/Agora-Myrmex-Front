import { getAntById } from '@/core';
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

const AntPageById = async ({ params, }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id
    const { ant, images, synonyms } = await getAntById(+id);

    if (!ant) {
        notFound();
    }

    return (
        <section
            id={`${ant.genus}-${ant.species}`}
            className='bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 h-full px-2 lg:px-10 py-10'
        >

            <div className='bg-white shadow rounded-lg p-6 mb-8'>
                <h1 className='text-4xl font-semibold'>{ant.genus} {ant.species}</h1>
                <h3 className='text-2xl'>{ant.common_name}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-8">

                    <div className="grid grid-cols-1 gap-8">

                        <InfoCard title="Colony Overview" icon="🏠">
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <dt className="font-medium text-gray-500">Form</dt>
                                <dd className="text-gray-900">{ant.colony_form}</dd>
                                <dt className="font-medium text-gray-500">Founding</dt>
                                <dd className="text-gray-900">{ant.founding}</dd>
                                <dt className="font-medium text-gray-500">Size</dt>
                                <dd className="text-gray-900">{ant.colony_size?.toLocaleString()}</dd>
                                <dt className="font-medium text-gray-500">Egg Development</dt>
                                <dd className="text-gray-900">{ant.egg_development_time} days</dd>
                                <dt className="font-medium text-gray-500">Lifespan</dt>
                                <dd className="text-gray-900">{ant.colony_lifespan} years</dd>
                            </dl>
                        </InfoCard>

                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                        <TemperatureCard title={'Temperatura'} max={ant.temperature_max} min={ant.temperature_min} />
                        <TemperatureCard title={'Temperatura del nido'} max={ant.nest_temperature_max} min={ant.nest_temperature_min} />
                        <HumidCard title={'Humedad'} max={ant.humidity_max} min={ant.humidity_min} />
                        <HumidCard title={'Humedad'} max={ant.nest_humidity_max} min={ant.nest_humidity_min} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <DataCard title="Queen Size" icon="👑" max={ant.queen_size_max} min={ant.queen_size_min} />
                        <DataCard title="Worker Size" icon="🐜" max={ant.queen_size_max} min={ant.queen_size_min} />
                        <DataCard title="Soldier Size" icon="💪" max={ant.queen_size_max} min={ant.queen_size_min} />
                        <DataCard title="Male Size" icon="♂️" max={ant.queen_size_max} min={ant.queen_size_min} />
                    </div>

                    <InfoCard title="Diapause" icon="❄️">
                        {
                            (ant.diapause && ant.diapause_from && ant.diapause_to && ant.diapause_threshold) ? (

                                <MonthChart from={+ant.diapause_from} to={+ant.diapause_to} />
                            ) : (
                                <div className="flex justify-center items-center min-h-40">
                                    <span className="text-gray-500">No hay datos</span>
                                </div>
                            )
                        }
                    </InfoCard>

                    <InfoCard title="Nuptial Flight" icon="🦋">

                        {
                            (ant.nuptial_flight && ant.nuptial_flight_from && ant.nuptial_flight_to) ? (
                                <MonthChart from={+ant.nuptial_flight_from} to={+ant.nuptial_flight_to} />
                            ) : (
                                <div className="flex justify-center items-center min-h-40">
                                    <span className="text-gray-500">No hay datos</span>
                                </div>
                            )
                        }
                    </InfoCard>
                </div>

                <div className="lg:col-span-1 space-y-8">
                    <InfoCard title="Photo Gallery & Taxonomy & Distribution" icon="📸">
                        <PhotoSlider
                            photos={images}
                        />

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="text-lg font-semibold mb-2">Taxonomy</h4>
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

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <MapFrame src={ant.distribution ?? ''} />
                        </div>
                    </InfoCard>
                </div>
            </div >

        </section >
    )
}

export default AntPageById