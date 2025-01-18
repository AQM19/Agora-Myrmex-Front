'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import Image from "next/image"
import { ImageAnt } from '@/core'

interface Props {
    photos: ImageAnt[]
}

const PhotoSlider = ({ photos }: Props) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const nextPhoto = () => {
        setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length)
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex((currentPhotoIndex - 1 + photos.length) % photos.length)
    }

    return (
        <div className="relative">
            <Image
                src={photos[currentPhotoIndex].image ?? ''}
                alt={photos[currentPhotoIndex].appointment ?? `Ant colony photo ${currentPhotoIndex + 1}`}
                width={400}
                height={300}
                className="w-full h-96 object-cover rounded-md"
            />
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1.5 hover:bg-opacity-75 transition-all"
                onClick={prevPhoto}
            >
                <ChevronLeft className="h-4 w-4" />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1.5 hover:bg-opacity-75 transition-all"
                onClick={nextPhoto}
            >
                <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded-md text-xs">
                    {currentPhotoIndex + 1} / {photos.length}
                </span>
            </div>
        </div>
    )
}

export default PhotoSlider