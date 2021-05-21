import React from 'react'
import styles from './nav.module.css'
function Nav() {
    return (
        <div className={styles.primaryNavigation}>
            <ul>
                <li>Neden Biz?</li>
                <li>İletişim</li>
                <li className={styles.lastLi}>Bize Katılın!</li>
            </ul>
        </div>
    )
}
export default Nav
