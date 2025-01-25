import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import React from 'react'

const AboutPage = () => {

    const t = useTranslations('About');

    return (
        <section id='about-me' className='container mx-auto px-4 py-8 text-justify text-neutral-900 dark:text-neutral-50'>

            <div className="bg-gray-100 dark:bg-neutral-700 p-6 rounded-lg shadow-lg shadow-black mb-8">
                <h1 className="text-4xl font-bold mb-6 text-center">{t('title')}</h1>

                <div className='flex flex-col'>
                    <div className='flex flex-col md:flex-row items-center w-4/5 mx-auto'>
                        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                            <Image
                                src="/imgs/svg/agora-myrmex-head-light-logo.png"
                                alt="Illustration of an ant"
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="md:w-1/2">
                            <p className="text-lg mb-4">
                                {t('p-1')}
                            </p>
                            <p className="text-lg mb-4">
                                {t('p-2')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-4/5 mx-auto text-lg'>
                    <p>
                        {t('p-3')}
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 mb-8'>
                <div className='bg-gray-100 dark:bg-neutral-700 p-6 rounded-lg shadow-lg shadow-black'>
                    <h2 className="text-2xl font-semibold mb-4">{t('highlights')}</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">{t('h-1')}</li>
                        <li className="mb-2">{t('h-2')}</li>
                        <li className="mb-2">{t('h-3')}</li>
                        <li className="mb-2">{t('h-4')}</li>
                        <li className="mb-2">{t('h-5')}</li>
                    </ul>
                </div>

                <div className='bg-gray-100 dark:bg-neutral-700 p-6 rounded-lg shadow-lg shadow-black'>
                    <h2 className="text-2xl font-semibold mb-4">{t('mission')}</h2>
                    <p className="text-lg mb-6">
                        {t('m-1')}
                    </p>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mb-8'>

                <div className="bg-gray-100 dark:bg-neutral-700 p-6 rounded-lg shadow-lg shadow-black">
                    <h2 className="text-2xl font-semibold mb-4">{t('get involved')}</h2>
                    <p className="text-lg mb-4">
                        {t('i-1')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        {t('contact me')}
                    </Link>
                </div>

                <div className='bg-gray-100 dark:bg-neutral-700 p-6 rounded-lg shadow-lg shadow-black'>
                    <h2 className="text-2xl font-semibold mb-4">{t('future features')}</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">{t('f-1')}</li>
                        <li className="mb-2">{t('f-2')}</li>
                        <li className="mb-2">{t('f-3')}</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default AboutPage