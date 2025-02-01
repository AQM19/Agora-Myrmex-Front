import { Analytics } from '@vercel/analytics/next';
import { getMessages } from "next-intl/server";
import { host } from "@/config";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Suspense } from "react";
import Loading from "./loading";
import notFound from "./not-found";
import ThemeProvider from "@/core/providers/ThemeProvider";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Agora Myrmex - Fichas de cría de hormigas",
  description: "Agora Myrmex es la aplicación para el correcto cuidado de las diferentes especies de hormigas. Recopilación de todas las especies del mundo.",
  authors: [
    {
      name: 'Aarón',
      url: host
    }
  ],
  keywords: ["Aarón Quintanal Martín", "Hormigas", "Hormigueros", "Fichas de cría", "Ficha de cría", "Especies"],
  openGraph: {
    title: "Agora Myrmex - Fichas de cría de hormigas",
    description: "Conoce Agora Myrmex y descubre todas las fichas de cría de tus especies de hormiga favoritas.",
    url: host,
    type: "website",
    images: [
      {
        url: `/imgs/svg/agora-myrmex-head-light-logo.png`,
        width: 800,
        height: 600,
        alt: "Agora Myrmex",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agora Myrmex - Fichas de cría de hormigas",
    description: "Conoce Agora Myrmex y descubre todas las fichas de cría de tus especies de hormiga favoritas",
    site: '@AQuintanalMDev',
    creator: '@AQuintanalMDev',
    images: [
      `/imgs/svg/agora-myrmex-head-light-logo.png`
    ]
  },
  alternates: {
    canonical: host,
    languages: {
      'en': `${host}/en`,
      'es': `${host}/es`,
      'de': `${host}/de`,
      'it': `${host}/it`,
      'ja': `${host}/ja`,
      'ko': `${host}/ko`,
      'pl': `${host}/pl`,
      'pt': `${host}/pt`,
      'zh': `${host}/zh`,
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: 'Agora Myrmex - Fichas de cría de hormigas',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/imgs/svg/agora-myrmex-head-light-logo.png',
      {
        url: '/assets/imgs/svg/agora-myrmex-head-light-logo.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  assets: [
    `${host}/assets`,
  ],
  category: 'development'
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Madrid">
            <Suspense fallback={<Loading />}>
              {children}
              <Analytics />
            </Suspense>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
