import React from 'react'
import Add from './icon/Add'
import cn from 'classnames'

import styles from './menu-content.module.css'

function MenuContent({
    tableName,
    foodName,
    foodContent,
    price,
    href,
    children,
    ...props
}) {
    return (
        <table className={styles.table}>
            <tr className={styles.tableRow}>
                <th className={styles.tableHead}>{tableName}</th>
            </tr>
            <tr className={styles.row}>
                <td className={styles.tableData}>
                    <input
                        type="text"
                        className={(styles.fname, styles.input)}
                        name="fname"
                        placeholder="0"
                    />{' '}
                    <Add />
                </td>
                <td className={styles.tableData}>
                    <p className={styles.textHead}>{foodName} </p>{' '}
                    <small className={styles.small}>{foodContent}</small>
                </td>

                <td className={styles.tableData}>₺{price}</td>
            </tr>

            <tr className={styles.row}>
                <td className={styles.tableData}>
                    <input
                        type="text"
                        className={(styles.fname, styles.input)}
                        name="fname"
                        placeholder="0"
                    />{' '}
                    <Add />
                </td>
                <td className={styles.tableData}>
                    <p className={styles.textHead}>{foodName} </p>{' '}
                    <small className={styles.small}>{foodContent}</small>
                </td>

                <td className={styles.tableData}>₺{price}</td>
            </tr>

            <tr className={styles.row}>
                <td className={styles.tableData}>
                    <input
                        type="text"
                        className={(styles.fname, styles.input)}
                        name="fname"
                        placeholder="0"
                    />{' '}
                    <Add />
                </td>
                <td className={styles.tableData}>
                    <p className={styles.textHead}>{foodName} </p>{' '}
                    <small className={styles.small}>{foodContent}</small>
                </td>

                <td className={styles.tableData}>₺{price}</td>
            </tr>

            <tr className={styles.row}>
                <td className={styles.tableData}>
                    <input
                        type="text"
                        className={(styles.fname, styles.input)}
                        name="fname"
                        placeholder="0"
                    />{' '}
                    <Add />
                </td>
                <td className={styles.tableData}>
                    <p className={styles.textHead}>{foodName} </p>{' '}
                    <small className={styles.small}>{foodContent}</small>
                </td>

                <td className={styles.tableData}>₺{price}</td>
            </tr>
        </table>
    )
}

export default MenuContent
