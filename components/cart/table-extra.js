import React from 'react'
import styles from './table-extra.module.css'

function TableExtra() {
    return (
        <div className={styles.tableExtraLayout}>
            <div className={styles.clock}>
                <p>
                    <input type="radio" />
                    Şimdi (45-50dk)
                </p>
                <p>
                    <input type="radio" />
                    İleri Tarih
                </p>
            </div>
            <div>
                <textarea className={styles.note} type="text"></textarea>
            </div>
        </div>
    )
}

export default TableExtra
