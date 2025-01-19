import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
    kingdom: string
    phylum: string
    class: string
    order: string
    family: string
    subfamily: string
    tribe: string
}

const TaxonomyList = ({ kingdom, phylum, class: classValue, order, family, subfamily, tribe }: Props) => {

    const t = useTranslations('Ant details');
    const d = useTranslations('No data');

    return (
        <ul className="space-y-1 text-sm w-3/5 mx-auto">
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Kingdom')}:</span>
                <span className="font-medium">{kingdom ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Phylum')}:</span>
                <span className="font-medium">{phylum ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Class')}:</span>
                <span className="font-medium">{classValue ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Order')}:</span>
                <span className="font-medium">{order ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Family')}:</span>
                <span className="font-medium">{family ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Subfamily')}:</span>
                <span className="font-medium">{subfamily ?? d('title')}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">{t('Tribe')}:</span>
                <span className="font-medium">{tribe ?? d('title')}</span>
            </li>
        </ul>
    )
}

export default TaxonomyList