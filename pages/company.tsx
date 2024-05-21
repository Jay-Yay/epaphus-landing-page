import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { StaticImageData } from "next/image";
import { useTranslation } from 'react-i18next';
import { isWidthMobile } from '../hooks/resizeWindow';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import commonStyles from '../styles/common.module.scss';
import communityStyles from './community.module.scss';
import ImageCompanyStructureKR from "../public/static/images/companyStructureKR.png";
import ImageCompanyStructureUS from "../public/static/images/companyStructureUS.png";
import ImageCompanyStructureCN from "../public/static/images/companyStructureCN.png";
import IconLogoEpaphusDaoKR from "../public/static/icons/logoEpaphusDaoKR.png";
import IconLogoEpaphusDaoEN from "../public/static/icons/logoEpaphusDaoEN.png";
import IconLogoEpaphusKR from "../public/static/icons/logoEpaphusKR.png";
import IconLogoEpaphusEN from "../public/static/icons/logoEpaphusEN.png";
import IconLogoEpaphusSeaKR from "../public/static/icons/logoEpaphusSeaKR.png";
import IconLogoEpaphusSeaEN from "../public/static/icons/logoEpaphusSeaEN.png";
import { getWebsiteLanguage } from '../hooks/setLanguage';
import { ESupportedLanguages } from '../constants/translation';

interface ICompanyLogo {
    label: string;
    height: {
        desktop: number;
        mobile: number;
    }
    width: {
        desktop: number;
        mobile: number;
    }
    imgUrl: StaticImageData;
}

const Company = () => {
    const isMobile: boolean = isWidthMobile();
    const { t } = useTranslation(); // translation
    
    const companyStructureImage = 
        getWebsiteLanguage() == ESupportedLanguages.CN ? ImageCompanyStructureCN
            : ( getWebsiteLanguage() == ESupportedLanguages.KR ? ImageCompanyStructureKR : ImageCompanyStructureUS )

    const companyLogoList: ICompanyLogo[] = [
        {
            label: 'logoEpaphusDao',
            height: {
                desktop: 72,
                mobile: 40
            },
            width: {
                desktop: 218,
                mobile: 122
            },
            imgUrl: getWebsiteLanguage() === ESupportedLanguages.KR ? IconLogoEpaphusDaoKR : IconLogoEpaphusDaoEN
        },
        {
            label: 'logoEpaphus',
            height: {
                desktop: 72,
                mobile: 40
            },
            width: {
                desktop: 162,
                mobile: 90
            },
            imgUrl: getWebsiteLanguage() === ESupportedLanguages.KR ? IconLogoEpaphusKR : IconLogoEpaphusEN
        },
        {
            label: 'logoEpaphusSea',
            height: {
                desktop: 72,
                mobile: 40
            },
            width: {
                desktop: 228,
                mobile: 126
            },
            imgUrl: getWebsiteLanguage() === ESupportedLanguages.KR ? IconLogoEpaphusSeaKR : IconLogoEpaphusSeaEN
        }
    ];

    useEffect(() => {
    }, [companyLogoList, companyStructureImage], )

    return (
        <>
            <NextSeo
                title={t('SEO_COMPANY_TITLE')}
                description={t('SEO_COMPANY_DESCRIPTION')}
                canonical={t('SEO_COMPANY_PAGE_URL')}
                openGraph={{
                    url: t('SEO_COMPANY_PAGE_URL')
                }}
            />
            <Header></Header>
            <div className={`${commonStyles.mainBody} ${communityStyles.companyBody}`}>
                <div className={communityStyles.titleWrapper}>
                    <h2 className={communityStyles.title}>
                        {t('COMPANY_PAGE_TITLE')}
                    </h2>
                    <p className={communityStyles.description}>
                        {t('COMPANY_PAGE_DESCRIPTION')}
                    </p>
                </div>
                <div className={communityStyles.companyStructureWrapper}>
                    <h3 className={communityStyles.title}>
                        {t('COMPANY_STRUCTURE_TITLE')}
                    </h3>
                    <img
                        src={companyStructureImage.src}                        
                        alt="companyStructure"
                        className={communityStyles.imageStructure}
                    />
                </div>
                <div className={communityStyles.companyLogoWrapper}>
                    {companyLogoList.map((logo: ICompanyLogo, index: number) => (
                        <img
                            key={index}
                            src={logo.imgUrl.src}
                            alt={logo.label}
                            height={isMobile ? logo.height.mobile : logo.height.desktop}
                            width={isMobile ? logo.width.mobile : logo.width.desktop}
                            className={communityStyles.companyLogo}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Company; 