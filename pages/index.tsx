import { NextPage } from 'next/types';
import { useTranslation } from 'react-i18next'
import { StaticImageData } from 'next/image';

import { isWidthMobile } from '../hooks/resizeWindow';
import { getWebsiteLanguage } from '../hooks/setLanguage';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CardMain, { ICardMain } from '../components/Card/Main/CardMain';
import commonStyles from '../styles/Common.module.scss';
import indexStyles from './Index.module.scss';
import ImageService from '../public/static/images/service.png';
import ImageSolution from '../public/static/images/solution.png';
import ImageCommunity from '../public/static/images/community.png';
import IconLogoEpaphusDaoKR from "../public/static/icons/logoEpaphusDaoKR.png";
import IconLogoEpaphusDaoEN from "../public/static/icons/logoEpaphusDaoEN.png";
import IconLogoEpaphusKR from "../public/static/icons/logoEpaphusKR.png";
import IconLogoEpaphusEN from "../public/static/icons/logoEpaphusEN.png";
import IconLogoEpaphusSeaKR from "../public/static/icons/logoEpaphusSeaKR.png";
import IconLogoEpaphusSeaEN from "../public/static/icons/logoEpaphusSeaEN.png";
import Articles from '../components/Article/Articles';
import { ESupportedLanguages } from '@/constants/translation';
import { useEffect } from 'react';


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

const registerURL: string = 'https://forms.gle/h8JCzjxMrTmua9979';

const Home: NextPage = () => {
    const isMobile: boolean = isWidthMobile();
    const { t } = useTranslation(); // translation

    const cards: ICardMain[] = [
        {
          label: 'service',
          title: t('MAIN_CARD_1_TITLE'),
          description: t('MAIN_CARD_1_DESCRIPTION'),
          imgData: ImageService,
          isImageLeft: true,
          href: '/service'
        },
        { 
          label: 'solution',
          title: t('MAIN_CARD_2_TITLE'),
          description: t('MAIN_CARD_2_DESCRIPTION'),
          imgData: ImageSolution,
          isImageLeft: false,
          href: '/solution'
        },
        {
          label: 'elearning',
          title: t('MAIN_CARD_3_TITLE'),
          description: t('MAIN_CARD_3_DESCRIPTION'),
          imgData: ImageCommunity,
          isImageLeft: true,
          href: '/community'
        }
    ];

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
      }, [companyLogoList])
    
    return (
        <>
            <Header/>
            <div className={commonStyles.mainBody}>
                <div className={indexStyles.homeTitleWrapper}>
                    <div className={indexStyles.backgroundImage}>
                    </div>
                    <h2 className={indexStyles.title} onClick={() => getWebsiteLanguage()}>
                        {t('MAIN_TITLE')}
                    </h2>
                    <a 
                      href={registerURL}
                      target="_blank"
                      rel="noreferrer"
                      className={indexStyles.buttonWrapper}
                    >
                        <button className={indexStyles.buttonCTA}>{t('MAIN_TOP_CTA')}</button>
                    </a>  
                </div>
                <Articles/>
                <div className={indexStyles.cardWrapper}>
                    {cards.map((item: ICardMain, index: number) => 
                        <CardMain
                            key={index}
                            label={item.label}
                            title={item.title}
                            description={item.description}
                            imgData={item.imgData}
                            isImageLeft={item.isImageLeft}
                            href={item.href}
                        />
                    )}
                </div>
                <div className={indexStyles.partnerWrapper}>
                    <div className={indexStyles.partnerIconLayer}>
                        <div className={indexStyles.partnerIconList}></div>
                        <div className={indexStyles.partnerIconList}></div>
                        <div className={indexStyles.partnerIconList}></div>
                    </div>
                </div>
                <div className={indexStyles.companyLogoWrapper}>
                    {companyLogoList.map((logo: ICompanyLogo, index: number) => (
                        <img
                            key={index}
                            src={logo.imgUrl.src}
                            alt={logo.label}
                            height={isMobile ? logo.height.mobile : logo.height.desktop}
                            width={isMobile ? logo.width.mobile : logo.width.desktop}
                            className={indexStyles.companyLogo}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;