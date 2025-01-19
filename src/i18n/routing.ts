import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['es', 'en', 'de', 'it', 'ja', 'ko', 'pl', 'pt', 'zh'],
    defaultLocale: 'es',
    localePrefix: 'always',
    pathnames: {
        "/": "/",
        "/ants/[slug]": {
            'en': '/ants/[slug]',
            'es': '/hormigas/[slug]',
            'de': '/ameisen/[slug]',
            'it': '/formiche/[slug]',
            'ja': '/ari/[slug]',
            'ko': '/gae-mi/[slug]',
            'pl': '/mrowki/[slug]',
            'pt': '/formigas/[slug]',
            'zh': '/mayi/[slug]',
        },
        '/about': {
            'en': '/about',
            'es': '/acerca-de',
            'de': '/uber',
            'it': '/chi-siamo',
            'ja': '/about',
            'ko': '/about',
            'pl': '/o-nas',
            'pt': '/sobre',
            'zh': '/about',
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);