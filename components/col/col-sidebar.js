import React from 'react'
import cn from 'classnames'
import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import User from '../user/user'

import styles from './col-sidebar.module.css'

function Sidebar({ children }) {
    return (
        <div className={cn([styles.sidebar])}>
            <Navigation />
            <ThemeButton big full>
                Çıkış Yap
            </ThemeButton>

            <User
                name="Tansu Çam"
                adress="Akşemsettin Mh Sultanbeyli/İstanbul"
            />
        </div>
    )
}
export default Sidebar
