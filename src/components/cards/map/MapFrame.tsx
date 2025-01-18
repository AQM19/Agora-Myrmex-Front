import React from 'react'

interface Props {
    src: string
}

const MapFrame = ({ src }: Props) => {
    return (
        <div className="w-full h-96 overflow-hidden rounded-md">
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default MapFrame