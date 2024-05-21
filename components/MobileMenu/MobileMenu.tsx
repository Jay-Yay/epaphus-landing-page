import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { IMenu } from "../Header/Header";
import styles from './MobileMenu.module.scss';


const MobileMenu = () => {
    const router = useRouter();
    const { t } = useTranslation(); // translation

    const menuList: IMenu[] = [
        { name: t('HEADER_MENU_SERVICE'), href: '/service' },
        { name: t('HEADER_MENU_SOLUTION'), href: '/solution' },
        { name: t('HEADER_MENU_COMMUNITY'), href: '/community' },
        { name: t('HEADER_MENU_COMPANY'), href: '/company' }
    ]    

    return (
        <div className={styles.mobileMenu}>
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
        </div>
    )
}

export default MobileMenu;