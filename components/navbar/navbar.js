import React from 'react'
import styles from './navbar.module.css'

import Search from './search-box'
import Logo from './logo'

function Navbar() {
    return (
        <div class={styles.grid}>
            <div>
                <Logo />
            </div>
            <div></div>
            <div>
                <Search />
            </div>
        </div>
    )
}

export default Navbar
