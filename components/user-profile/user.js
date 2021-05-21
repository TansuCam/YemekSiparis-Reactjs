import React from 'react'

import useWindowSize from '../../hooks/useWindowSize'
import CONST from '../../constants'
import styles from './user.module.css'
import ThemeButton from '../theme-button'

function Adress({ href, children, ...props }) {
    const size = useWindowSize()
    return (
        <div className={styles.container}>
            <form>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label for="fname">Ad:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Tansu"
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label for="lname">Soyad:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="ÇAM"
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label for="country">Doğum Tarihi:</label>
                    </div>
                    <p>xx.xx.xxxx</p>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label for="subject">E Posta:</label>
                    </div>
                    <p>XXXX@gmail.com</p>
                </div>
                <div className={styles.row}>
                    {size.width > CONST.TABLET_SIZE && (
                        <ThemeButton
                            style={{
                                marginTop: 15,
                                paddingLeft: 25,
                                paddingRight: 25,
                                float: 'right',
                            }}
                        >
                            Kaydet
                        </ThemeButton>
                    )}
                    {size.width < CONST.TABLET_SIZE && (
                        <ThemeButton style={{ marginTop: 15 }} full>
                            Kaydet
                        </ThemeButton>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Adress
