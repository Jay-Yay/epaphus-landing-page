
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo'

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PageDescription, { PageDescriptionProps } from '../components/PageDescription/PageDescription';
import commonStyles from '../styles/Common.module.scss';
import CardService, { ICardService } from '../components/Card/Service/CardService';

import ImageService from '../public/static/images/service.png';
import IconAnalysis from'../public/static/icons/analysis.png';
import IconSchool from'../public/static/icons/school.png';
import IconMoney from'../public/static/icons/money.png';
import IconVerification from'../public/static/icons/verification.png';
import IconTarget from'../public/static/icons/target.png';
import IconPartnership from'../public/static/icons/partnership.png';
import IconAdvice from'../public/static/icons/advice.png';
import IconGrow from'../public/static/icons/grow.png';
import IconGraduation from'../public/static/icons/graduation.png';
import IconNamecard from'../public/static/icons/namecard.png'
import IconGlobe from'../public/static/icons/globe.png'

const Service: NextPage = () => {
    const { t } = useTranslation(); // translation
    
    const pageDescription: PageDescriptionProps = {
        label: 'service',
        title: t('SERVICE_PAGE_TITLE'),
        description: t('SERVICE_PAGE_DESCRIPTION'),
        imgData: ImageService
    }
    
    const serviceList: ICardService[] = [
        {
            label: 'feasibility',
            title: t('SERVICE_CARD_1_TITLE'),
            description: [
                t('SERVICE_CARD_1_DESCRIPTION_1'), 
                t('SERVICE_CARD_1_DESCRIPTION_2'),
                t('SERVICE_CARD_1_DESCRIPTION_3'),
                t('SERVICE_CARD_1_DESCRIPTION_4'),
                t('SERVICE_CARD_1_DESCRIPTION_5')
            ],
            imgData: IconAnalysis,
        },
        {
            label: 'merge',
            title: t('SERVICE_CARD_2_TITLE'),
            description: [
                t('SERVICE_CARD_2_DESCRIPTION_1'), 
                t('SERVICE_CARD_2_DESCRIPTION_2'),
                t('SERVICE_CARD_2_DESCRIPTION_3'),
                t('SERVICE_CARD_2_DESCRIPTION_4'),
                t('SERVICE_CARD_2_DESCRIPTION_5')
            ],
            imgData: IconSchool,
        },
        {
            label: 'IR',
            title: t('SERVICE_CARD_3_TITLE'),
            description: [
                t('SERVICE_CARD_3_DESCRIPTION_1'), 
                t('SERVICE_CARD_3_DESCRIPTION_2')
            ],
            imgData: IconMoney,
        },
        {
            label: 'verification',
            title: t('SERVICE_CARD_4_TITLE'),
            description: [
                t('SERVICE_CARD_4_DESCRIPTION_1'), 
                t('SERVICE_CARD_4_DESCRIPTION_2'),
                t('SERVICE_CARD_4_DESCRIPTION_3')
            ],
            imgData: IconVerification,
        },
        {
            label: 'incubation',
            title: t('SERVICE_CARD_5_TITLE'),
            description: [
                t('SERVICE_CARD_5_DESCRIPTION_1'), 
                t('SERVICE_CARD_5_DESCRIPTION_2'),
                t('SERVICE_CARD_5_DESCRIPTION_3')
            ],
            imgData: IconTarget,
        },
        {
            label: 'partnership',
            title: t('SERVICE_CARD_6_TITLE'),
            description: [
                t('SERVICE_CARD_6_DESCRIPTION_1'), 
                t('SERVICE_CARD_6_DESCRIPTION_2')
            ],
            imgData: IconPartnership,
        },
        {
            label: 'advisory',
            title: t('SERVICE_CARD_7_TITLE'),
            description: [
                t('SERVICE_CARD_7_DESCRIPTION_1'), 
                t('SERVICE_CARD_7_DESCRIPTION_2'),
                t('SERVICE_CARD_7_DESCRIPTION_3'),
                t('SERVICE_CARD_7_DESCRIPTION_4')
            ],
            imgData: IconAdvice,
        },
        {
            label: 'marketing',
            title: t('SERVICE_CARD_8_TITLE'),
            description: [
                t('SERVICE_CARD_8_DESCRIPTION_1'), 
                t('SERVICE_CARD_8_DESCRIPTION_2'),
                t('SERVICE_CARD_8_DESCRIPTION_3'),
                t('SERVICE_CARD_8_DESCRIPTION_4'),
                t('SERVICE_CARD_8_DESCRIPTION_5'),
                t('SERVICE_CARD_8_DESCRIPTION_6')
            ],
            imgData: IconGrow,
        },
        {
            label: 'consulting',
            title: t('SERVICE_CARD_9_TITLE'),
            description: [
                t('SERVICE_CARD_9_DESCRIPTION_1'), 
                t('SERVICE_CARD_9_DESCRIPTION_2'),
                t('SERVICE_CARD_9_DESCRIPTION_3')
            ],
            imgData: IconGraduation,
        },
        {
            label: 'recruiting',
            title: t('SERVICE_CARD_10_TITLE'),
            description: [
                t('SERVICE_CARD_10_DESCRIPTION_1'), 
                t('SERVICE_CARD_10_DESCRIPTION_2'),
                t('SERVICE_CARD_10_DESCRIPTION_3')
            ],
            imgData: IconNamecard,
        },
        {
            label: 'training',
            title: t('SERVICE_CARD_11_TITLE'),
            description: [
                t('SERVICE_CARD_11_DESCRIPTION_1'), 
                t('SERVICE_CARD_11_DESCRIPTION_2'),
                t('SERVICE_CARD_11_DESCRIPTION_3')
            ],

            imgData: IconGlobe,
        }
    ]

    return (
        <>
            <NextSeo
                title={t('SEO_SERVICE_TITLE')}
                description={t('SEO_SERVICE_DESCRIPTION')}
                canonical={t('SEO_SERVICE_PAGE_URL')}
                openGraph={{
                    url: t('SEO_SERVICE_PAGE_URL')
                }}
            />
            <Header></Header>
            <div className={commonStyles.mainBody}>
                <PageDescription
                    label={pageDescription.label}
                    title={pageDescription.title}
                    description={pageDescription.description}
                    imgData={pageDescription.imgData}
                />
                <div className={commonStyles.mainContentService}>
                    {serviceList.map((item: ICardService, index: number) => (
                        <CardService
                            key={index}
                            label={item.label}
                            title={item.title}
                            description={item.description}
                            imgData={item.imgData}                            
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Service;