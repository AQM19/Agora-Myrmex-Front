import { Link as I18nLink } from '@/i18n/routing'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const t = useTranslations('Footer');
    const m = useTranslations('Menu');

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 duration-300">

            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="space-y-4">

                        <h3 className="text-xl font-bold flex items-center">
                            <Image src={'/imgs/svg/agora-myrmex-head-light-logo.png'} alt={''} width={140} height={140} className='block dark:hidden' />
                            <Image src={'/imgs/svg/agora-myrmex-head-dark-logo.png'} alt={''} width={140} height={140} className='hidden dark:block' />
                        </h3>

                        <p className="text-sm">{t('Discover')}.</p>

                        <div className="flex space-x-4">

                            <Link href="https://antweb.org" className="hover:text-amber-600" target="_blank" rel="noopener noreferrer">
                                AntWeb
                            </Link>

                            <Link href="https://antmaps.org/" className="hover:text-amber-600" target="_blank" rel="noopener noreferrer">
                                AntMaps
                            </Link>

                        </div>

                    </div>

                    <div className="space-y-4">

                        <h4 className="font-semibold">{t('Quick Links')}</h4>

                        <ul className="space-y-2">
                            <li>
                                <I18nLink href="/" className="hover:text-amber-600">{m('home')}</I18nLink>
                            </li>
                        </ul>

                    </div>

                    <div className="space-y-4">

                        <h4 className="font-semibold">{t('Buy me a coffee')}</h4>

                        <p className="text-sm">{t('Coffee description')}</p>

                        <div className="flex space-x-4">

                            <Link
                                href="https://www.buymeacoffee.com/aaronquintanal"
                                target="_blank"
                            >
                                <Image
                                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                    alt="Buy Me a Coffee"
                                    width={208}
                                    height={56}
                                    className='h-14 w-52'
                                />
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="mt-8 pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-sm">&copy; {new Date().getFullYear()} AgoraMyrmex. {t('All rights reserved')}.</p>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">

                        <span className="flex items-center text-sm">
                            <Mail className="w-4 h-4 mr-1" />
                            <Link href={'mailto:aquintanalm.dev@gmail.com'}>
                                aquintanalm.dev@gmail.com
                            </Link>
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer