import React from 'react'

import styles from './search.module.css'
import Logo from '../navbar/logo'

function NavBar({ href, children, ...props }) {
    return (
        <div className={styles.search}>
            <img
                src="https://i.pinimg.com/originals/f4/c2/bf/f4c2bf89258b3a95233854b72018a564.png"
                className={styles.logo}
            />
            <form>
                <input className={styles.box} type="text" name="search" />
            </form>
        </div>
    )
}

export default NavBar
