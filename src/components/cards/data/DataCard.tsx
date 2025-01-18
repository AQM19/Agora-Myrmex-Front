import { Bug } from 'lucide-react';
import React from 'react'

interface Props {
    title: string;
    icon: string;
    max: string | null;
    min: string | null;
}

const DataCard = ({ title, icon, max, min }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full min-h-44">
            <div className="bg-gray-800 px-3 py-2 flex items-center justify-between">
                <span className="text-xl text-white" role="img" aria-label={title}>
                    {icon}
                </span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>

            <div className="p-3 text-center">
                {
                    (max !== null && min !== null) ? (
                        <div className="flex justify-between items-end">
                            <div className="text-center">
                                <Bug className='w-16 h-16 mx-auto text-green-600' />
                                <p className="mt-2 font-semibold text-gray-800">Max: {max} mm</p>
                            </div>
                            <div className="text-center">
                                <Bug className='w-8 h-8 mx-auto text-amber-950' />
                                <p className="mt-2 font-semibold text-gray-800">Min: {min} mm</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-lg font-bold text-gray-700 mt-6">No hay datos</p>
                    )
                }
            </div>

        </div>
    )
}

export default DataCard