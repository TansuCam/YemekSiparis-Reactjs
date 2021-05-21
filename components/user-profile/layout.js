import React from 'react'

import styles from './layout.module.css'
import Adress from './adress'
import User from './user'

function Layout({ href, children, ...props }) {
    return (
        <div className={styles.layout}>
            <User />
            <Adress
                adressTitle="Ev"
                adress="XXX XXX XXXX XXX/İstanbul"
                phone="51326446164"
                mail="xxxxxx@gmail.com"
            ></Adress>
        </div>
    )
}

export default Layout
