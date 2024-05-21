import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { isWidthMobile } from "../../hooks/resizeWindow";
import MobileMenu from "../MobileMenu/MobileMenu";
import LaugaugeSelectionMenu from "./LanguageSelectionMenu";

import styles from './Header.module.scss';
import LogoIcon from '../../public/static/icons/logo.png';
import MenuIcon from '../../public/static/icons/menu.png';
import ClosingIcon from '../../public/static/icons/closing.png';


export interface IMenu {
    name: string;
    href: string;
}

const Header = () => {
    const router = useRouter();
    const isMobile: boolean = isWidthMobile();
    const { t } = useTranslation(); // translation
    const [menuOn, setMenuOn] = useState<boolean>(false);
    const [menuLanguageDropdownOn, setLanguageDropdownOn] = useState<boolean>(false);
    const hideAllDropdowns = (): void => {
        setMenuOn(false);
        setLanguageDropdownOn(false);
    }

    const menuList: IMenu[] = [
        { name: t('HEADER_MENU_SERVICE'), href: '/service' },
        { name: t('HEADER_MENU_SOLUTION'), href: '/solution' },
        { name: t('HEADER_MENU_COMMUNITY'), href: '/community' },
        { name: t('HEADER_MENU_COMPANY'), href: '/company' }
    ]
        
    return (
        <div className={styles.headerMain}>
            <div className={styles.headerWrapper}>
                <Link href='/'>
                    <img 
                        src={LogoIcon.src} 
                        alt="logo"
                        className={styles.headerLogo}
                    />
                </Link>
                {isMobile ? (
                    <div className={styles.headerMobile}>
                        <LaugaugeSelectionMenu
                            menuLanguageDropdownOn={menuLanguageDropdownOn}
                            setLanguageDropdownOn={setLanguageDropdownOn}
                        />
                        <div 
                            className={`${styles.dropdownDisabler} ${(menuOn || menuLanguageDropdownOn) && styles.enabled}`}
                            onClick={() => hideAllDropdowns()}>
                        </div>
                        {menuOn ? (
                            <>
                                <img
                                    src={ClosingIcon.src} 
                                    alt="close"
                                    className={styles.menuButton}
                                    onClick={() => setMenuOn(false)}
                                />
                                <MobileMenu/>
                            </>
                        ) : (
                            <img
                                src={MenuIcon.src} 
                                alt="menu"
                                className={styles.menuButton}
                                onClick={() => setMenuOn(true)}
                            />
                        )}
                    </div>
                ) : (
                    <div className={styles.menuWrapper}>
                        {menuList.map((menu: IMenu, index: number) => (
                            <Link href={menu.href} key={index}>
                                <div className={
                                        `
                                            ${styles['menuItem']}
                                            ${router.pathname === menu.href ? styles['selected'] : ''}
                                        `
                                    }>
                                    {menu.name}
                                </div>
                            </Link>                
                        ))}
                        <LaugaugeSelectionMenu
                            menuLanguageDropdownOn={menuLanguageDropdownOn}
                            setLanguageDropdownOn={setLanguageDropdownOn}
                        />
                        <div 
                            className={`${styles.dropdownDisabler} ${(menuOn || menuLanguageDropdownOn) && styles.enabled}`}
                            onClick={() => hideAllDropdowns()}>
                        </div>
                    </div>
                
                )}
            </div>
        </div>
    )
}

export default Header;