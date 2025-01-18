import React from 'react'

interface Props {
    title: string
    icon: string
    children: React.ReactNode
    className?: string
}

const InfoCard = ({ title, icon, children, className = '' }: Props) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden h-full ${className}`}>
            <div className="bg-gray-800 px-4 py-3 flex items-center">
                <span className="text-2xl mr-2" role="img" aria-label={title}>
                    {icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <div className="p-4 text-gray-700">
                {children}
            </div>
        </div>
    )
}

export default InfoCard