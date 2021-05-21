import React from 'react'
import cn from 'classnames'

import styles from './table-adress.module.css'

import More from '../icon/More'

function TableAdress({
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
            <table className={styles.table}>
                <input type="radio" />
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

export default TableAdress
