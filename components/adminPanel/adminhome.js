import React from 'react'

import styles from './adminhome.module.css'
import RestCard from '../rest-card/rest-card'

function AdminCart({ children }) {
    return (
        <div>
            <h2 className={styles.title}>HOŞ GELDİNİZ.</h2>
            <p className={styles.p}>
                Restaurant bilgileriniz aşağıdaki gibidir.
            </p>
            <RestCard />
        </div>
    )
}
export default AdminCart
