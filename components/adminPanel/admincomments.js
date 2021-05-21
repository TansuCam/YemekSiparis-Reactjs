import React from 'react'
import cn from 'classnames'

import styles from './admincomments.module.css'

function AdminComment({ children }) {
    return (
        <div className={styles.pageLayout}>
            <h2 className={styles.pageTitle}>Müşteri Yorumları</h2>
            <table className={styles.table}>
                <tr className={styles.tableRow}>
                    <th>Id</th>
                    <th>Hız</th>
                    <th>Servis</th>
                    <th>Lezzet</th>
                    <th>Başlık</th>
                    <th>Cevapla</th>
                </tr>
                <tr className={styles.tableRow}>
                    <td className={styles.tableData}>1</td>
                    <td className={styles.tableData}>7</td>
                    <td className={styles.tableData}>10</td>
                    <td className={styles.tableData}>5</td>
                    <td className={cn(styles.tableData, styles.title)}>
                        Lezzetli
                    </td>
                    <td className={styles.buttongroup}>
                        <button className={styles.button}>Cevapla</button>
                    </td>
                </tr>
                <tr className={styles.tableRow}>
                    <td className={styles.tableData}>1</td>
                    <td className={styles.tableData}>7</td>
                    <td className={styles.tableData}>10</td>
                    <td className={styles.tableData}>5</td>
                    <td className={cn(styles.tableData, styles.title)}>
                        Geç teslim ve soğuk
                    </td>
                    <td className={styles.buttongroup}>
                        <button className={styles.button}>Cevapla</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default AdminComment
