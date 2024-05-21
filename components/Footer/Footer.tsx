import { useTranslation } from "react-i18next";

import { isWidthMobile } from "../../hooks/resizeWindow";
import { setWebsiteLanguage } from "../../hooks/setLanguage";
import { ESupportedLanguages } from "../../constants/translation";

import styles from './Footer.module.scss';
import IconLogo from '../../public/static/icons/logo.png';
import IconEmailGray from '../../public/static/icons/emailGray.png';
import IconEmailBlue from '../../public/static/icons/emailBlue.png';
import IconCallBlue from '../../public/static/icons/callBlue.png';


const Footer = () => {
    const isMobile: boolean = isWidthMobile();
    const { t } = useTranslation(); // translation

    const footerInfo = {
        companyName: t('FOOTER_COMPANY_NAME'),
        companyOwnerName: t('FOOTER_COMPANY_OWNER_NAME'),
        companyAddress: t('FOOTER_COMPANY_ADDRESS'),
        companyRegistrationNumber: t('FOOTER_COMPANY_REGISTRATION_NUMBER'),
        companyPhoneNumber: t('FOOTER_COMPANY_PHONE_NUMBER'),
        companyEmail: t('FOOTER_COMPANY_EMAIL'),
        copyrightText: t('FOOTER_COPYRIGHT')
    }
    
    return (
        <>
            {isMobile ? (
                <div className={styles.footerMainMobile}>
                    <div className={styles.footerWrapper}>
                        <img 
                            src={IconLogo.src} 
                            alt="logo"
                            className={styles.footerLogo}
                            onClick={() => setWebsiteLanguage(ESupportedLanguages.US)}
                        />
                        <div className={styles.footerActionWrapper}>
                            <a href="mailto:ulysses.kim@epaphus.info">
                                <img
                                    src={IconEmailBlue.src} 
                                    alt="email"
                                    className={styles.footerActionIcon}
                                />
                            </a>
                            <a href="tel:+821068730306">
                                <img
                                    src={IconCallBlue.src} 
                                    alt="tel"
                                    className={styles.footerActionIcon}
                                />
                            </a>
                        </div>
                        <div className={styles.footerItem} onClick={() => setWebsiteLanguage(ESupportedLanguages.CN)}>{footerInfo.companyName} ｜ {footerInfo.companyOwnerName}</div>
                        <div className={styles.footerItem}>{footerInfo.companyAddress}</div>
                        <div className={styles.footerItem}>{footerInfo.companyRegistrationNumber}</div>
                        <div className={styles.footerItem}>{footerInfo.companyPhoneNumber} ｜ {footerInfo.companyEmail}</div>
                        <div className={styles.footerItem}>{footerInfo.copyrightText}</div>
                    </div>
                </div>
            ) : (
                <div className={styles.footerMain}>
                    <div className={styles.footerWrapper}>
                        <div className={styles.footerWrapperLeft}>
                            <img 
                                src={IconLogo.src} 
                                alt="logo"
                                className={styles.footerLogo}
                                onClick={() => setWebsiteLanguage(ESupportedLanguages.US)}
                            />
                            <div className={styles.footerItem}>{footerInfo.companyName} ｜ {footerInfo.companyOwnerName}</div>
                            <div className={styles.footerItem}>{footerInfo.companyAddress}</div>
                            <div className={styles.footerItem}>{footerInfo.companyRegistrationNumber}</div>
                            <div className={styles.footerItem}>{footerInfo.companyPhoneNumber} ｜ {footerInfo.companyEmail}</div>
                            <div className={styles.footerItem}>{footerInfo.copyrightText}</div>
                        </div>
                        <div className={styles.footerWrapperRight}>
                            <a href="mailto:ulysses.kim@epaphus.info">
                                <img
                                    src={IconEmailGray.src}
                                    alt="emailaa"
                                    className={styles.footerActionIcon}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
   )
}

export default Footer;