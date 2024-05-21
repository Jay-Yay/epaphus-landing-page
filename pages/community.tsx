import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import PageDescription, { PageDescriptionProps } from '../components/PageDescription/PageDescription';
import CardCommunity, { ICardCommnunity } from "../components/Card/Community/CardCommunity";
import commonStyles from '../styles/Common.module.scss';

import ImageCommunity from '../public/static/images/community.png';
import IconConnection from '../public/static/icons/connectionWhite.png';
import IconMonetization from '../public/static/icons/monetizationWhite.png';
import IconInvestment from '../public/static/icons/investmentWhite.png';
import IconPeople from '../public/static/icons/peopleWhite.png';
import IconWrite from '../public/static/icons/writeWhite.png';
import IconEye from '../public/static/icons/eyeWhite.png';

const Community: NextPage = () => {
    const { t } = useTranslation(); // translation

    const pageDescription: PageDescriptionProps = {
        label: 'community',
        title: t("COMMUNITY_PAGE_TITLE"),
        description: t("COMMUNITY_PAGE_DESCRIPTION"),
        imgData: ImageCommunity
    }
    
    const serviceList: ICardCommnunity[] = [
        {
            label: 'connection',
            title: t("COMMUNITY_CARD_1_TITLE"),
            description: [
                t("COMMUNITY_CARD_1_DESCRIPTION_1"),
                t("COMMUNITY_CARD_1_DESCRIPTION_2"),
                t("COMMUNITY_CARD_1_DESCRIPTION_3"),
            ],
            imgURL: IconConnection
        },
        {
            label: 'monetization',
            title: t("COMMUNITY_CARD_2_TITLE"),
            description: [
                t("COMMUNITY_CARD_2_DESCRIPTION_1"),
            ],
            imgURL: IconMonetization
        },
        {
            label: 'investment',
            title: t("COMMUNITY_CARD_3_TITLE"),
            description: [
                t("COMMUNITY_CARD_3_DESCRIPTION_1"),
                t("COMMUNITY_CARD_3_DESCRIPTION_2"),
            ],
            imgURL: IconInvestment
        },
        {
            label: 'people',
            title: t("COMMUNITY_CARD_4_TITLE"),
            description: [
                t("COMMUNITY_CARD_4_DESCRIPTION_1"),
                t("COMMUNITY_CARD_4_DESCRIPTION_2"),
                t("COMMUNITY_CARD_4_DESCRIPTION_3"),
            ],
            imgURL: IconPeople
        },
        {
            label: 'write',
            title: t("COMMUNITY_CARD_5_TITLE"),
            description: [
                t("COMMUNITY_CARD_5_DESCRIPTION_1"),
            ],
            imgURL: IconWrite
        },
        {
            label: 'eye',
            title: t("COMMUNITY_CARD_6_TITLE"),
            description: [
                t("COMMUNITY_CARD_6_DESCRIPTION_1"),
                t("COMMUNITY_CARD_6_DESCRIPTION_2"),
            ],
            imgURL: IconEye
        }
    ]

    return (
        <>
            <NextSeo
                title={t('SEO_COMMUNITY_TITLE')}
                description={t('SEO_COMMUNITY_DESCRIPTION')}
                canonical={t('SEO_COMMUNITY_PAGE_URL')}
                openGraph={{
                    url: t('SEO_COMMUNITY_PAGE_URL')
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
                <div className={commonStyles.mainContentCommunity}>
                    {serviceList.map((item: ICardCommnunity, index: number) => (
                        <CardCommunity
                            key={index}
                            label={item.label}
                            title={item.title}
                            description={item.description}
                            imgURL={item.imgURL}                            
                        />
                    ))}
                </div>
            </div>
            
            <Footer></Footer>
        </>
    )
}

export default Community;
  