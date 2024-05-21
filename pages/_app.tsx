import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { AppProps } from 'next/app'
import { DefaultSeo, DefaultSeoProps } from "next-seo";

import { changeWebsiteLanguageUsingIP } from '../hooks/setLanguage';
import '../hooks/setDefaultLanguage';

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    // set language based on the IP address
    const { t } = useTranslation(); // translation

    const DEFAULT_SEO: DefaultSeoProps = {
        title: t('SEO_MAIN_TITLE'),
        description: t('SEO_MAIN_DESCRIPTION'),
        canonical: t('SEO_MAIN_PAGE_URL'),
        openGraph: {
            type: "website",
            locale: t('SEO_MAIN_LOCALE'),
            url: t('SEO_MAIN_PAGE_URL'),
            title: t('SEO_MAIN_TITLE'),
            description: t('SEO_MAIN_DESCRIPTION'),
            site_name: t('SEO_MAIN_COMPANY_NAME'),
            images: [
                {
                  url: "https://www.epaphus.co.kr/static/icons/logo.png",
                  width: 138,
                  height: 58,
                  alt: "Epaphus",
                  type: 'image/png'
                }
            ]
        }
    };

    useEffect(() => {
        changeWebsiteLanguageUsingIP();
    }, []);

    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default App;
