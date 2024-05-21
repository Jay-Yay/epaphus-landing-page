import { isWidthMobile } from "@/hooks/resizeWindow";
import { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import CardStyle from "./CardMain.module.scss"

export interface ICardMain {
    label: string;
    title: string;
    description: string;
    imgData: StaticImageData;
    isImageLeft: boolean;
    href: string;
}

const CardMain = (props: ICardMain) => {
    const isMobile: boolean = isWidthMobile();
    const { t } = useTranslation(); // translation

    return (
        <>
            <div className={isMobile ? CardStyle.mainCardMobile : CardStyle.mainCard}>
                {isMobile ? (
                    <>
                        <img
                            src={props.imgData.src}
                            alt={props.label}
                            className={`${CardStyle["cardImage"]}`}
                        />
                        <div className={CardStyle.textWrapper}>
                            <div className={CardStyle.title}>{props.title}</div>
                            <div className={CardStyle.description}>{props.description}</div>
                            <Link href={props.href}>
                                <div className={CardStyle.more}>{t('MAIN_CARD_MORE')} →</div>
                            </Link>
                        </div>
                    </>  
                ) : (
                    <>
                        {props.isImageLeft ? (
                            <>
                                <img
                                    src={props.imgData.src}
                                    alt={props.label}
                                    className={`${CardStyle["cardImage"]} ${CardStyle["first"]}`}
                                />
                                <div className={CardStyle.textWrapper}>
                                    <div className={CardStyle.title}>{props.title}</div>
                                    <div className={CardStyle.description}>{props.description}</div>
                                    <Link href={props.href}>
                                        <div className={CardStyle.more}>{t('MAIN_CARD_MORE')} →</div>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={`${CardStyle["textWrapper"]} ${CardStyle["first"]}`}>
                                    <div className={CardStyle.title}>{props.title}</div>
                                    <div className={CardStyle.description}>{props.description}</div>
                                    <Link href={props.href}>
                                        <div className={CardStyle.more}>{t('MAIN_CARD_MORE')} →</div>
                                    </Link>
                                </div>
                                <img 
                                    src={props.imgData.src}
                                    alt={props.label}
                                    height={480}
                                    width={480}
                                    className={CardStyle.cardImage}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default CardMain;

