import React from 'react'
import * as Icon from '../icon'

import styles from './min.module.css'

function Min({ minPrice }) {
    return (
        <div className={styles.layout}>
            <div>
                <Icon.Money style={{ fontSize: 35 }} />
                <p>Min Paket Tutarı</p>
                <p>₺{minPrice}</p>
            </div>
            <div>
                <Icon.Clock style={{ fontSize: 35 }} />
                <p>Teslim Süresi</p>
                <p>{minPrice}dk</p>
            </div>
        </div>
    )
}

export default Min
