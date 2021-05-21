import React from 'react'
import Point from './point'

import styles from './point-box.module.css'

function PointBox() {
    return (
        <div className={styles.layout}>
            <p className={styles.text}>Restaurant Puanları</p>
            <div className={styles.row}>
                <Point pointName="Hız" point="7,5" />
                <Point pointName="Servis" point="8,5" />
                <Point pointName="Lezzet" point="9.0" />
            </div>
        </div>
    )
}

export default PointBox
