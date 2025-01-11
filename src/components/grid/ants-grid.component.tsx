import { Ant } from '@/core';
import React from 'react'

interface Props {
    ants: Ant[];
}

const AntsGridComponent = ({ ants }: Props) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 justify-items-stretch p-5'>
            {
                ants.map((ant, index) => (
                    <div
                        key={`${ant.genus}-${ant.species}-${index}`}
                        className='rounded p-5 bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-300'
                    >
                        {ant.genus} {ant.species}
                    </div>
                ))
            }
        </div>
    )
}

export default AntsGridComponent