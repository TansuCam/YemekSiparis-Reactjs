import React from 'react'
import { useRouter } from 'next/router'

import { ICONBAR } from '../../constants'

import styles from './iconbar.module.css'
import NavigationButton from './navigation-button'

function IconNav() {
    const router = useRouter()
    return (
        <nav className={styles.iconbar}>
            {ICONBAR.map((menu) => {
                const selected = router.pathname === menu.path
                return (
                    <NavigationButton
                        href={menu.path}
                        key={menu.key}
                        className={styles.icon}
                    >
                        {selected ? menu.iconSelected : menu.icon}
                    </NavigationButton>
                )
            })}
        </nav>
    )
}

export default IconNav
