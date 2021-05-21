import React from 'react'

import styles from './logo.module.css'

function Logo({ href, children, ...props }) {
    return (
        <div class={styles.image}>
            <img src="https://i.pinimg.com/originals/f4/c2/bf/f4c2bf89258b3a95233854b72018a564.png" />
        </div>
    )
}

export default Logo
