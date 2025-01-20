import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localePrefix: 'always',
    pathnames: {
        "/": "/",
        "/ants/[slug]": {
            'en': '/ants/[slug]',
            'es': '/hormigas/[slug]',
        },
        '/about': {
            'en': '/about',
            'es': '/acerca-de',
        },
        '/contact': {
            'en': '/contact',
            'es': '/contacto',
        },
        '/guides/how-to-start': {
            'en': '/guides/how-to-start',
            'es': '/guías/cómo-empezar',
        },
        '/guides/basic-equipment': {
            'en': '/guides/basic-equipment',
            'es': '/guías/equipo-básico',
        },
        '/guides/identification': {
            'en': '/guides/identification',
            'es': '/guías/identificación',
        },
        '/guides/good-practices': {
            'en': '/guides/good-practices',
            'es': '/guías/buenas-prácticas',
        },
        '/resources/publications': {
            'en': '/resources/publications',
            'es': '/recursos/publicaciones',
        },
        '/resources/forums': {
            'en': '/resources/forums',
            'es': '/recursos/foros',
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);