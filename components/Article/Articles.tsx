import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from './Articles.module.scss'

interface IArticle {
    title: string;
    date: string;
    link: string;
}

const Articles = () => {
    const { t } = useTranslation(); // translation
    
    const articles: IArticle[] = [
        {
            title: t('MAIN_ARTICLE_ITEM_1_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_1_DATE'),
            link: "https://www.shinailbo.co.kr/news/articleView.html?idxno=1866383"
        },
        {
            title: t('MAIN_ARTICLE_ITEM_2_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_2_DATE'),
            link: "https://www.inews365.com/mobile/article.html?no=811257"
        },
        {
            title: t('MAIN_ARTICLE_ITEM_3_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_3_DATE'),
            link: "https://www.yna.co.kr/view/AKR20230823116200064"
        },
        {
            title: t('MAIN_ARTICLE_ITEM_4_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_4_DATE'),
            link: "https://www.e2news.com/news/articleView.html?idxno=251231"
        },
        {
            title: t('MAIN_ARTICLE_ITEM_5_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_5_DATE'),
            link: "https://www.e2news.com/news/articleView.html?idxno=250557"
        },
        {
            title: t('MAIN_ARTICLE_ITEM_6_TITLE'),
            date: t('MAIN_ARTICLE_ITEM_6_DATE'),
            link: "https://www.sisunnews.co.kr/news/articleView.html?idxno=178966",
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const articlePerPage: number = 5;
    const totalPages = Math.ceil(articles.length / articlePerPage);
    const currentItems: IArticle[] = articles.slice((currentPage - 1) * articlePerPage, currentPage * articlePerPage);

    const clickPage = (number: number) => {
        setCurrentPage(number);
    };

    return (
        <div className={styles.articleWrapper}>
            <div className={styles.title}>{t('MAIN_ARTICLE_TITLE')}</div>
            {currentItems.map((item: IArticle, index: number) => (
                <a target='_blank' rel="noreferrer" href={item.link} key={index}>
                    <div className={styles.articleItem}>
                        <div className={styles.articleTitle}>{item.title}</div>
                        <div className={styles.articleDate}>{item.date}</div>
                    </div>
                </a>
            ))}
            <div className={styles.paginationWrapper}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => clickPage(index + 1)}
                        disabled={currentPage === index + 1}
                        className={styles.numberButton}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
                    
    )
}

export default Articles;