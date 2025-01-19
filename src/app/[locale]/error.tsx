'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import React from 'react'

const ErrorLayoutPage = () => {

    const t = useTranslations('No data');

    return (
        <section id='error-page' className='h-screen w-full bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center'>

            <article className='rounded-lg shadow-lg shadow-black dark:shadow-white px-5 py-10 text-neutral-900 dark:text-neutral-50 -mt-60 text-center'>

                <h1 className='text-4xl font-bold mb-10 text-blue-600'>{t('page error')}</h1>

                <p className='mb-8'>
                    {t('error punish')}
                </p>

                <Link href={'/'} className='rounded-lg p-3 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950'>
                    {t('back home')}
                </Link>

            </article>

        </section>
    )
}

export default ErrorLayoutPage