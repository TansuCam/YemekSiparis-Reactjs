import React from 'react'

import styles from './adress.module.css'

import More from '../icon/More'

function Adress({
    adressTitle,
    adress,
    phone,
    mail,
    href,
    children,
    ...props
}) {
    return (
        <div>
            <p className={styles.add}>Adres Ekle +</p>
            <table className={styles.table}>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHead}>{adressTitle}</th>
                    <th className={styles.tableHead}>
                        <More style={{ fontSize: 22, paddingTop: 5 }} />
                    </th>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.td}>
                        <p>Adres:</p>
                        {adress}
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td>
                        <p>Telefon numarası:</p>
                        {phone}
                    </td>
                    <td>
                        <p>Mail adresi:</p>
                        {mail}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Adress
