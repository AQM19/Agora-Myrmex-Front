import { useTranslations } from 'next-intl'
import React from 'react'

const NoData = () => {
    const t = useTranslations('No data');

    return (
        <div className="flex justify-center items-center min-h-40">
            <span className="text-gray-500 font-semibold">{t('title')}</span>
        </div>
    )
}

export default NoData