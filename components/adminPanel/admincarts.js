import React from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Button from '../button'

import styles from './admincarts.module.css'

function AdminCart({ children }) {
    return (
        <div className={styles.pageLayout}>
            <h2 className={styles.pageTitle}>Siparişler</h2>
            <table className={styles.table}>
                <tr className={styles.tableRow}>
                    <th>Id</th>
                    <th>Adı</th>
                    <th>Kategori</th>
                    <th>Fiyat</th>
                    <th>Fotoğraf</th>
                    <th>İşlem</th>
                </tr>
                <tr className={styles.tableRow}>
                    <td className={styles.tableData}>1</td>
                    <td className={styles.tableData}>Lahmacun</td>
                    <td className={styles.tableData}>Kebap ve Çeşitleri</td>
                    <td className={styles.tableData}>6 TL</td>
                    <td className={styles.tableData}>fotoğraf</td>
                    <td className={styles.buttongroup}>
                        <button className={styles.button}>Düzenle</button>
                        <button className={cn(styles.button, styles.button3)}>
                            Sil
                        </button>
                    </td>
                </tr>
                <tr className={styles.tableRow}>
                    <td className={styles.tableData}>2</td>
                    <td className={styles.tableData}>Döner</td>
                    <td className={styles.tableData}>Kebap ve Çeşitleri</td>
                    <td className={styles.tableData}>15 TL</td>
                    <td className={styles.tableData}>fotoğraf</td>
                    <td className={styles.buttongroup}>
                        <Popup
                            trigger={
                                <button className={styles.button}>
                                    Onayla
                                </button>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className={styles.modal}>
                                    <Button
                                        className={styles.close}
                                        onClick={close}
                                    >
                                        &times;
                                    </Button>
                                    <div className={cn(styles.header)}>
                                        {' '}
                                        KAYDOL{' '}
                                    </div>
                                    <div className={cn(styles.content)}>
                                        Modal
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <button className={cn(styles.button, styles.button3)}>
                            Sil
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default AdminCart
