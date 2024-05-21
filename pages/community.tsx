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
                title="커뮤니티"
                description="에파포스의 DAO 커뮤니티 회원들은 블록체인 기반의 커뮤니티를 통해서 투명하게 공동의 가치실현과 이익을 나눕니다."
                canonical="https://www.epaphus.co.kr/community"
                openGraph={{
                    url: "https://www.epaphus.co.kr/community"
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
  