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
    return (
        <ul className="space-y-1 text-sm">
            <li className="flex justify-between">
                <span className="text-gray-500">Kingdom:</span>
                <span className="font-medium">{kingdom}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Phylum:</span>
                <span className="font-medium">{phylum}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Class:</span>
                <span className="font-medium">{classValue}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Order:</span>
                <span className="font-medium">{order}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Family:</span>
                <span className="font-medium">{family}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Subfamily:</span>
                <span className="font-medium">{subfamily}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-500">Tribe:</span>
                <span className="font-medium">{tribe}</span>
            </li>
        </ul>
    )
}

export default TaxonomyList