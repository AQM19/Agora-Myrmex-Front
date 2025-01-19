import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.antwiki.org',
            },
            {
                protocol: 'https',
                hostname: 'cdn.buymeacoffee.com'
            }
        ]
    }
};

export default withNextIntl(nextConfig);
