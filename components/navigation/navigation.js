import React from 'react'
import { useRouter } from 'next/router'

import { SIDENAV } from '../../constants'
import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from '../text-title'

function Navigation() {
    const router = useRouter()

    return (
        <nav className={styles.nav}>
            {SIDENAV.map((menu) => {
                const showTitle = menu.title.length > 0
                const selected = router.pathname === menu.path

                return (
                    <NavigationButton
                        key={menu.key}
                        notify={menu.notify}
                        selected={selected}
                        href={menu.path}
                        className={styles.navButton}
                    >
                        {selected ? menu.iconSelected : menu.icon}
                        {showTitle && <TextTitle>{menu.title}</TextTitle>}
                    </NavigationButton>
                )
            })}
        </nav>
    )
}

export default Navigation
