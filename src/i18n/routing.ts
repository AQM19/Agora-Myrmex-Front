import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localePrefix: 'always',
    pathnames: {
        "/": "/",
        "/ants": {
            "en": '/ants',
            "es": '/hormigas'
        },
        "/ants/[id]": {
            "en": '/ants/[id]',
            "es": '/hormigas/[id]'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);