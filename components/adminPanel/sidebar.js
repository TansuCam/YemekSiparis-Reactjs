import React from 'react'
import { useRouter } from 'next/router'
import { ADMINSIDEBAR } from '../../constants'
import Button from './button'
import ThemeButton from '../theme-button'

import styles from './sidebar.module.css'

function SideBar() {
    const router = useRouter()
    return (
        <div>
            <nav className={styles.menu} tabIndex="0">
                <div className={styles.smartphonemenutrigger}></div>
                <header className={styles.avatar}>
                    <img
                        className={styles.userLogo}
                        src="https://logos-download.com/wp-content/uploads/2016/04/Burger_King_logo_emblem-2.png"
                    />
                    <h2 className={styles.userName}>Burger King</h2>
                </header>
                <ul className={styles.nav}>
                    {ADMINSIDEBAR.map((menu) => {
                        const selected = router.pathname === menu.path
                        return (
                            <li className={styles.li} tabIndex="0">
                                <span className={styles.span}>
                                    <Button
                                        key={menu.key}
                                        href={menu.path}
                                        selected={selected}
                                    >
                                        {selected
                                            ? menu.iconSelected
                                            : menu.icon}
                                        {menu.title}
                                    </Button>
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <ThemeButton className={styles.logout}> Çıkış Yap </ThemeButton>
            </nav>
        </div>
    )
}

export default SideBar
