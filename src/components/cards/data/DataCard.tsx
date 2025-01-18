import React from 'react'

interface Props {
    title: string
    icon: string
    value: string
}

const DataCard = ({ title, icon, value }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="bg-gray-800 px-3 py-2 flex items-center justify-between">
                <span className="text-xl text-white" role="img" aria-label={title}>
                    {icon}
                </span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>
            <div className="p-3 text-center">
                <p className="text-lg font-bold text-gray-700">{value}</p>
            </div>
        </div>
    )
}

export default DataCard