import { useTranslations } from 'next-intl'
import React from 'react'

const AboutPage = () => {

    const t = useTranslations('About');

    return (
        <section id='about-me' className='p-5 text-justify flex flex-col items-center justify-center'>

            <article className='space-y-8 w-4/5'>
                <h2 className='text-2xl font-semibold text-center'>{t('how it started')}</h2>

                <div className='text-justify space-y-2'>
                    <p>
                        {t('p-1')}
                    </p>
                    <p>
                        {t('p-2')}
                    </p>
                    <p>
                        {t('p-3')}
                    </p>
                    <p>
                        {t('p-4-1')} (
                        <span><a href="https://antmaps.org/?" target='_blank' className='text-blue-600'>AntMaps</a>, </span>
                        <span><a href="https://www.antweb.org/" target='_blank' className='text-blue-600'>AntWeb</a>, </span>
                        <span><a href="https://www.antwiki.org/wiki/Welcome_to_AntWiki" target='_blank' className='text-blue-600'>AntWiki</a>, </span>
                        <span><a href="https://www.antstore.net/shop/en/?srsltid=AfmBOop3dyEd2pbfYIhrdjMRWz25mOsXshV8gdTCVCRIVAArwEZ6nRbf" target='_blank' className='text-blue-600'>AntStore</a></span>
                        ) {t('p-4-2')}
                    </p>
                    <p>
                        {t('p-5')}
                    </p>
                </div>
            </article>

        </section>
    )
}

export default AboutPage