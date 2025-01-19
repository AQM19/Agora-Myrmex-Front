'use client'

import { IoLanguageSharp } from 'react-icons/io5';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useTransition } from 'react'
import { Locale } from '@/core/interfaces/locales/locale.interface';

const LocaleConfig: Locale[] = [
    {
        lang: 'es',
        alt: 'Bandera de españa'
    },
    {
        lang: 'en',
        alt: 'Bandera de reino unido'
    },
    {
        lang: 'de',
        alt: 'Bandera de alemania'
    },
    {
        lang: 'it',
        alt: 'Bandera de italia'
    },
    {
        lang: 'ja',
        alt: 'Bandera de japón'
    },
    {
        lang: 'ko',
        alt: 'Bandera de korea del sur'
    },
    {
        lang: 'pl',
        alt: 'Bandera de polonia'
    },
    {
        lang: 'pt',
        alt: 'Bandera de portugal'
    },
    {
        lang: 'zh',
        alt: 'Bandera de china'
    }
]

const LocalSwitch = () => {
    const [isPending, startTransition] = useTransition();
    const [isListOpen, setIsListOpen] = useState(false);

    const router = useRouter();
    const localActive = useLocale();

    const handleLanguageChange = (locale: string) => {
        const currentUrl = new URL(window.location.href).pathname.replace(/^\/[a-z]{2}/, locale);

        startTransition(() => {
            router.replace(`/${currentUrl}`);
        });

        setIsListOpen(false);
    };

    return (
        <div className='relative'>

            <button
                onClick={() => setIsListOpen(!isListOpen)}
                className='px-4 py-2 text-aero dark:text-emerald'
            >
                <IoLanguageSharp size={30} />
            </button>

            <div
                className={`absolute top-10 border-2 border-neutral-100 dark:border-neutral-900 rounded bg-neutral-100 dark:bg-neutral-900 shadow-md z-10
                transition-all duration-300 ease-in-out
                ${isListOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
            >
                <ul>
                    {
                        LocaleConfig.map((value, index) => (
                            <li key={index}>
                                <button
                                    className={`py-2 px-4 w-full text-left transition-colors duration-300 ${localActive === value.lang ? 'bg-neutral-100 dark:bg-neutral-900' : ''}`}
                                    onClick={() => handleLanguageChange(value.lang)}
                                    disabled={isPending}
                                >
                                    <Image
                                        src={`/imgs/flags/${value.lang}.flag.svg`}
                                        alt={value.alt}
                                        width={150}
                                        height={150}
                                    />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default LocalSwitch