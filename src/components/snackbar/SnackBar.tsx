'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import React, { useEffect } from 'react'

interface Props {
    message: string
    isVisible: boolean
    onClose: () => void
}

const SnackBar = ({ message, isVisible, onClose }: Props) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
            }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96">
            <div className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between">
                <p>{message}</p>
                <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors" aria-label="Close">
                    <X size={20} />
                </button>
            </div>
        </motion.div>
    )
}

export default SnackBar