import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import React from 'react'

const LayoutPageNotFound = () => {

    const t = useTranslations('No data');

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <article className="p-8 bg-white rounded-lg shadow-md text-center -mt-60">

                <h1 className="text-4xl font-bold text-blue-600 mb-4">{t('page not found')}</h1>

                <p className="text-xl text-gray-600 mb-8">
                    {t('not found description')}
                </p>

                <Link href={'/'} className='rounded-lg p-3 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950'>
                    {t('back home')}
                </Link>

            </article>
        </section>
    )
}

export default LayoutPageNotFound