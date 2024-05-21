import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PageDescription, { PageDescriptionProps } from '../components/PageDescription/PageDescription';
import commonStyles from '../styles/Common.module.scss';
import ImageSolution from '../public/static/images/solution.png';
import CardSolution, { ICardSolution } from '../components/Card/Solution/CardSolution';


const Solution: NextPage = () => {
    const { t } = useTranslation(); // translation

    const pageDescription: PageDescriptionProps = {
        label: 'solution',
        title: t("SOLUTION_PAGE_TITLE"),
        description: t("SOLUTION_PAGE_DESCRIPTION"),
        imgData: ImageSolution
    }
    
    const solutionList: ICardSolution[] = [
        {
            title: t("SOLUTION_CARD_1_TITLE"),
            description: t("SOLUTION_CARD_1_DESCRIPTION")
        },
        {
            title: t("SOLUTION_CARD_2_TITLE"),
            description: t("SOLUTION_CARD_2_DESCRIPTION")
        },
        {
            title: t("SOLUTION_CARD_3_TITLE"),
            description: t("SOLUTION_CARD_3_DESCRIPTION")
        },
        {
            title:t("SOLUTION_CARD_4_TITLE"),
            description: t("SOLUTION_CARD_4_DESCRIPTION")
        },
        {
            title: t("SOLUTION_CARD_5_TITLE"),
            description: t("SOLUTION_CARD_5_DESCRIPTION")
        },
        {
            title: t("SOLUTION_CARD_6_TITLE"),
            description: t("SOLUTION_CARD_6_DESCRIPTION")
        },
        {
            title: t("SOLUTION_CARD_7_TITLE"),
            description: t("SOLUTION_CARD_7_DESCRIPTION")
        },
    ]

    return (
        <>
            <NextSeo
                title="솔루션"
                description="에파포스는 온라인 교육환경에 맞는 글로벌 학습관리시스템을 기획 및 분석, 설계, 개발, 운영 및 평가까지 맞춤형 서비스를 제공합니다."
                canonical="https://www.epaphus.co.kr/solution"
                openGraph={{
                    url: "https://www.epaphus.co.kr/solution"
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
                <div className={commonStyles.mainContentSolution}>
                    {solutionList.map((item: ICardSolution, index: number) => (
                        <CardSolution
                            key={index}
                            title={item.title}
                            description={item.description}                            
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Solution;  