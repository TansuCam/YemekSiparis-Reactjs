import React, { useState } from 'react'

import { Button } from 'react-bootstrap'
import styles from './table-price.module.css'
import TableAdress from './table-adress'
import TableExtra from './table-extra'
import { useRouter } from 'next/router'
import { CONTENT } from '../../constants'

function TablePrice({ href, children, ...props }) {
    const router = useRouter()

    return (
        <div>
            <table className={styles.tablePrice}>
                <tr>
                    <th>Yemek</th>
                    <th>Fiyat</th>
                    <th>Adet</th>
                    <th>Tutar</th>
                </tr>
                {CONTENT.map((content) => {
                    const deger = content.deger

                    const [nums, setNums] = useState('')
                    const [price, setPrice] = useState(deger)
                    const [sum, setSum] = useState('')
                    const calculate = (e) => {
                        setSum(e * price)
                    }
                    return (
                        <tr key={content.key}>
                            <td>
                                <b>{content.name}</b>{' '}
                                <small>{content.cont}</small>
                            </td>
                            <td>₺{deger}</td>
                            <td>
                                <input
                                    type="text"
                                    name={nums}
                                    onChange={(e) => calculate(e.target.value)}
                                />
                            </td>
                            <td>₺{sum}</td>
                        </tr>
                    )
                })}
            </table>

            <div className={styles.adressTableTitle}>
                <p className={styles.title}>Teslimat Adresi</p>
                <Button className={styles.add}>Adres Ekle +</Button>
            </div>

            <TableAdress
                adressTitle="Ev"
                adress="XXXX XXXXXX XXXXXXX XXXX/ İstanbul"
                phone="01212451356"
                mail="xxxxxx@gmail.com"
            />
            <div className={styles.adressTableTitle}>
                <p className={styles.title}>Gönderim Zamanı</p>
                <p className={styles.title}>Sipariş Notu</p>
            </div>
            <TableExtra />
        </div>
    )
}
export default TablePrice
