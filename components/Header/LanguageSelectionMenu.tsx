import { useTranslation } from "react-i18next";

import { getWebsiteLanguage, setWebsiteLanguage } from "../../hooks/setLanguage";
import { ESupportedLanguages } from "../../constants/translation";

import styles from './LanguageSelectionMenu.module.scss';
import arrowDown from '../../public/static/icons/arrowDown.png';

const LaugaugeSelectionMenu = (props: {
    menuLanguageDropdownOn: boolean, 
    setLanguageDropdownOn: (bool: boolean) => void
}) => {
    const { t } = useTranslation(); // translation

    const selectLangauge = (language: ESupportedLanguages) => {
        setWebsiteLanguage(language);
        props.setLanguageDropdownOn(false);
    }

    return (
        <div className={styles.languageSelectionComponent}>
            <div className={styles.selectedMenu} onClick={() => props.setLanguageDropdownOn(!props.menuLanguageDropdownOn)}>
                <span className={styles.selectedLanguage}>
                    {t('HEADER_MENU_LANGUAGE')}
                </span>
                <img className={`${styles.arrow} ${props.menuLanguageDropdownOn ? styles.rotate180 : ''}`} src={arrowDown.src} />
            </div>
            {props.menuLanguageDropdownOn && 
                <div className={styles.languageDropdownWrapper}>
                    <div className={`${styles.lauguageItem} ${getWebsiteLanguage() == ESupportedLanguages.KR && styles.languageSelected}`} onClick={() => selectLangauge(ESupportedLanguages.KR)}>🇰🇷 KR</div>
                    <div className={`${styles.lauguageItem} ${getWebsiteLanguage() == ESupportedLanguages.US && styles.languageSelected}`} onClick={() => selectLangauge(ESupportedLanguages.US)}>🇺🇸 EN</div>
                    <div className={`${styles.lauguageItem} ${getWebsiteLanguage() == ESupportedLanguages.CN && styles.languageSelected}`} onClick={() => selectLangauge(ESupportedLanguages.CN)}>🇨🇳 CN</div>
                </div>
            }
        </div>
    )
}

export default LaugaugeSelectionMenu;