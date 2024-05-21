import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { DefaultSeo, DefaultSeoProps } from "next-seo";

import { changeWebsiteLanguageUsingIP } from '../hooks/setLanguage';
import '../hooks/setDefaultLanguage';

import '../styles/globals.css'

const DEFAULT_SEO: DefaultSeoProps = {
    title: "교육기관 설립 및 운영 전문 컨설팅 법인, 에파포스",
    description: "에파포스는 교육기관 설립 및 운영 컨설팅, 학습관리 시스템 솔루션, 교육 컨텐츠 기획 및 제작을 하는 전문 컨설팅 법인입니다.",
    canonical: "https://www.epaphus.co.kr",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://www.epaphus.co.kr",
        title: "교육기관 설립 및 운영 전문 컨설팅 법인, 에파포스",
        description: "에파포스는 교육기관 설립 및 운영 컨설팅, 학습관리 시스템 솔루션, 교육 컨텐츠 기획 및 제작을 하는 전문 컨설팅 법인입니다.",
        site_name: "에파포스",
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

const App = ({ Component, pageProps }: AppProps) => {
    // set language based on the IP address
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
